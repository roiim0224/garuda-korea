/**
 * GARUDA Academy Korea — 교육 신청·예약금 결제 관리 (Google Apps Script)
 * -------------------------------------------------------------------
 * 홈페이지 신청서 → 이 스크립트(웹 앱) → 구글 시트 "신청" 탭에 한 과정당 한 줄씩 기록
 * 토스페이먼츠 결제 승인도 여기서 처리한다 (시크릿 키는 스크립트 속성에만 저장).
 *
 * 설치 방법: 같은 폴더의 SETUP.md 참고
 *
 * 스크립트 속성 (프로젝트 설정 → 스크립트 속성)
 *   TOSS_SECRET_KEY : 토스페이먼츠 시크릿 키 (test_gsk_… / live_gsk_…)
 *   ADMIN_EMAIL     : 새 신청·결제 알림을 받을 이메일 (쉼표로 여러 명)
 *   DEPOSIT         : 과정당 예약금 (기본 300000)
 */

const SHEET_APPLY = '신청';
const SHEET_SUMMARY = '과정별 현황';

/* 신청 탭 열 순서 — 바꾸면 COL 과 현황 수식도 같이 바꿀 것 */
const HEADERS = [
  '신청번호', '신청일시', '이름(한글)', '영문 이름', '연락처', '이메일',
  '과정', '과정ID', '교육시작일', '반·장소', '수강료', '예약금', '잔금',
  '결제상태', '결제수단', '결제일시', '결제키',
  '잔금 결제링크', '잔금상태', '잔금 안내일시', '메모',
  'utm_source', 'utm_medium', 'utm_campaign', '유입 페이지', '이전 사이트', '시작일 직접입력'
];
const COL = Object.fromEntries(HEADERS.map((h, i) => [h, i + 1]));

const STATUS = { WAIT: '결제대기', PAID: '예약금 결제완료', FAIL: '결제실패', CANCEL: '취소' };
const BAL = { NONE: '미발송', SENT: '링크 발송', DONE: '잔금 완납' };

/* ───────────────────────── 웹 앱 진입점 ───────────────────────── */

function doPost(e) {
  let body = {};
  try { body = JSON.parse(e.postData.contents || '{}'); } catch (err) { return json({ ok: false, error: '요청 형식 오류' }); }
  try {
    if (body.action === 'apply') return json(apply(body));
    if (body.action === 'confirm') return json(confirmPayment(body));
    if (body.action === 'fail') return json(markFail(body));
    return json({ ok: false, error: '알 수 없는 요청' });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: '처리 중 오류가 발생했습니다. 카카오톡으로 문의해 주세요.' });
  }
}

function doGet() {
  return json({ ok: true, service: 'GARUDA apply', time: new Date().toISOString() });
}

/* ───────────────────────── 신청 접수 ───────────────────────── */

function apply(b) {
  if (b.website) return { ok: false, error: 'spam' };             // 스팸 방지용 숨은 칸
  const need = ['nameKo', 'nameEn', 'phone', 'email'];
  for (const k of need) if (!String(b[k] || '').trim()) return { ok: false, error: '필수 항목이 비어 있습니다.' };
  if (!/^[A-Za-z][A-Za-z .'-]{1,58}$/.test(String(b.nameEn).trim())) return { ok: false, error: '영문 이름을 확인해 주세요.' };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(b.email).trim())) return { ok: false, error: '이메일 주소를 확인해 주세요.' };
  const items = Array.isArray(b.items) ? b.items.filter(x => x && x.progId && x.start) : [];
  if (!items.length || items.length > 12) return { ok: false, error: '교육 과정과 시작일을 선택해 주세요.' };

  const deposit = Number(prop('DEPOSIT') || 300000);
  const orderId = 'GA' + Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyMMddHHmmss') + Math.floor(Math.random() * 9000 + 1000);
  const now = new Date();
  const src = b.src || {};
  const rows = items.map(it => {
    const fee = Number(it.fee) || '';
    const pay = Number(it.pay) > 0 ? Number(it.pay) : deposit;   // 특별 프로그램은 참가비 전액, 정규 과정은 예약금
    return [
      orderId, now, clean(b.nameKo), clean(b.nameEn).toUpperCase(), clean(b.phone), clean(b.email),
      clean(it.progName), clean(it.progId), "'" + clean(it.start), clean(it.session || ''),   // 시작일은 텍스트로 저장해야 집계(QUERY)에서 빠지지 않는다
      fee, pay, fee ? fee - pay : '',
      STATUS.WAIT, '', '', '',
      '', BAL.NONE, '', '',
      clean(src.utm_source), clean(src.utm_medium), clean(src.utm_campaign), clean(src.landing), clean(src.ref),
      it.manual ? 'Y' : ''
    ];
  });

  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const sh = sheet(SHEET_APPLY);
    if (sh.getLastRow() === 0) sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);   // 초기 설정 전이어도 머리글 보장
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
  } finally { lock.releaseLock(); }

  notifyAdmin(`[가루다] 새 교육 신청 · ${clean(b.nameKo)} · ${items.length}개 과정`,
    `신청번호: ${orderId}\n이름: ${clean(b.nameKo)} (${clean(b.nameEn).toUpperCase()})\n연락처: ${clean(b.phone)}\n이메일: ${clean(b.email)}\n\n` +
    items.map(it => `· ${it.progName} / 시작일 ${it.start}${it.manual ? ' (직접 입력)' : ''}${it.session ? ' / ' + it.session : ''}`).join('\n') +
    `\n\n결제 금액 ${won(rows.reduce((s, r) => s + Number(r[COL['예약금'] - 1] || 0), 0))} — 결제 전 상태입니다.` +
    `\n토스 결제 링크로 결제하는 경우: 토스페이먼츠 상점관리자에서 같은 이름·연락처의 결제를 확인한 뒤,\n시트에서 이 행을 선택하고 [가루다 관리 → 선택한 행 예약금 결제완료 처리]를 눌러 주세요.`);

  const total = rows.reduce((s, r) => s + Number(r[COL['예약금'] - 1] || 0), 0);
  return { ok: true, orderId, amount: total, orderName: orderName(items) };
}

/* ───────────────────────── 토스페이먼츠 결제 승인 ───────────────────────── */

function confirmPayment(b) {
  const { paymentKey, orderId } = b; const amount = Number(b.amount);
  if (!paymentKey || !orderId || !amount) return { ok: false, error: '결제 정보가 부족합니다.' };

  const sh = sheet(SHEET_APPLY);
  const rows = findRows(sh, orderId);
  if (!rows.length) return { ok: false, error: '신청 내역을 찾을 수 없습니다.' };

  const first = sh.getRange(rows[0], 1, 1, HEADERS.length).getValues()[0];
  if (first[COL['결제상태'] - 1] === STATUS.PAID) return { ok: true, already: true, orderId, amount };

  // 금액 위변조 방지 — 시트에 기록된 예약금 합계와 비교
  const expected = rows.reduce((s, r) => s + Number(sh.getRange(r, COL['예약금']).getValue() || 0), 0);
  if (expected !== amount) { markRows(sh, rows, STATUS.FAIL, '', '', `금액 불일치 (요청 ${amount}, 기대 ${expected})`); return { ok: false, error: '결제 금액이 신청 내역과 다릅니다.' }; }

  const secret = prop('TOSS_SECRET_KEY');
  if (!secret) return { ok: false, error: '결제 설정이 완료되지 않았습니다. (시크릿 키 없음)' };
  const res = UrlFetchApp.fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { Authorization: 'Basic ' + Utilities.base64Encode(secret + ':') },
    payload: JSON.stringify({ paymentKey, orderId, amount })
  });
  const data = JSON.parse(res.getContentText() || '{}');
  if (res.getResponseCode() !== 200) {
    markRows(sh, rows, STATUS.FAIL, '', '', `승인 실패: ${data.code || ''} ${data.message || ''}`);
    return { ok: false, error: data.message || '결제 승인에 실패했습니다.', code: data.code };
  }

  const method = data.method || '';
  const approved = data.approvedAt ? new Date(data.approvedAt) : new Date();
  markRows(sh, rows, STATUS.PAID, method, approved, '', paymentKey);
  rows.forEach(i => sh.getRange(i, COL['메모']).setValue(''));   // 앞선 실패 기록 정리

  const r = first;
  const name = r[COL['이름(한글)'] - 1], email = r[COL['이메일'] - 1];
  const list = rows.map(i => sh.getRange(i, COL['과정']).getValue() + ' · 시작일 ' + sh.getRange(i, COL['교육시작일']).getDisplayValue());
  notifyAdmin(`[가루다] 예약금 결제완료 · ${name} · ${won(amount)}`,
    `신청번호: ${orderId}\n결제수단: ${method}\n\n${list.join('\n')}\n\n1영업일 이내에 잔금 결제 링크를 보내 주세요.\n(시트에서 '잔금 결제링크' 칸에 링크를 넣고, 메뉴 [가루다 관리 → 선택한 행에 잔금 링크 보내기])`);
  if (email) MailApp.sendEmail({
    to: email, name: 'GARUDA Academy Korea',
    subject: '[GARUDA] 교육 신청 및 예약금 결제가 완료되었습니다',
    body: `${name}님, 가루다 교육 신청이 접수되었습니다.\n\n신청번호: ${orderId}\n예약금: ${won(amount)}\n\n${list.join('\n')}\n\n1영업일 이내에 잔금 결제 링크를 문자와 이메일로 보내드립니다.\n문의: 카카오톡 채널 "바디녹스필라테스&가루다"`
  });
  return { ok: true, orderId, amount, method };
}

function markFail(b) {
  if (!b.orderId) return { ok: false };
  const sh = sheet(SHEET_APPLY), rows = findRows(sh, b.orderId);
  const st = rows.length ? sh.getRange(rows[0], COL['결제상태']).getValue() : '';
  if (rows.length && st !== STATUS.PAID) markRows(sh, rows, STATUS.FAIL, '', '', `결제창: ${clean(b.code)} ${clean(b.message)}`);
  return { ok: true };
}

/* ───────────────────────── 관리자 메뉴 ───────────────────────── */

function onOpen() {
  SpreadsheetApp.getUi().createMenu('가루다 관리')
    .addItem('선택한 행 예약금 결제완료 처리 (결제 링크 확인 후)', 'markDepositPaid')
    .addItem('선택한 행에 잔금 링크 보내기', 'sendBalanceLinks')
    .addItem('선택한 행 잔금 완납 처리', 'markBalanceDone')
    .addSeparator()
    .addItem('시트 초기 설정 (처음 한 번)', 'setup')
    .addToUi();
}

/** 선택한 행 중 '잔금 결제링크'가 있고 예약금이 결제된 신청자에게 안내 메일 발송 */
function sendBalanceLinks() {
  const ui = SpreadsheetApp.getUi(), sh = SpreadsheetApp.getActiveSheet();
  if (sh.getName() !== SHEET_APPLY) return ui.alert(`'${SHEET_APPLY}' 탭에서 보낼 행을 선택해 주세요.`);
  const rows = selectedRows(sh); let sent = 0, skip = [];
  rows.forEach(i => {
    const r = sh.getRange(i, 1, 1, HEADERS.length).getValues()[0], g = k => r[COL[k] - 1];
    if (g('결제상태') !== STATUS.PAID) return skip.push(`${i}행: 예약금 미결제`);
    if (!g('잔금 결제링크')) return skip.push(`${i}행: 잔금 링크 없음`);
    MailApp.sendEmail({
      to: g('이메일'), name: 'GARUDA Academy Korea',
      subject: `[GARUDA] ${g('과정')} 잔금 결제 안내`,
      body: `${g('이름(한글)')}님, 안녕하세요.\n\n${g('과정')} (시작일 ${sh.getRange(i, COL['교육시작일']).getDisplayValue()}) 잔금 결제 링크를 보내드립니다.\n\n잔금: ${g('잔금') ? won(g('잔금')) : '링크에 표시된 금액'}\n결제 링크: ${g('잔금 결제링크')}\n\n문의: 카카오톡 채널 "바디녹스필라테스&가루다"`
    });
    sh.getRange(i, COL['잔금상태']).setValue(BAL.SENT);
    sh.getRange(i, COL['잔금 안내일시']).setValue(new Date());
    sent++;
  });
  ui.alert(`잔금 안내 메일 ${sent}건 발송` + (skip.length ? `\n\n보내지 않음:\n${skip.join('\n')}` : '') +
    '\n\n※ 문자 안내가 필요하면 연락처 칸을 참고해 따로 보내 주세요.');
}

/** 토스 결제 링크로 받은 예약금: 상점관리자에서 확인 후 수동 처리 + 신청자에게 확인 메일 */
function markDepositPaid() {
  const ui = SpreadsheetApp.getUi(), sh = SpreadsheetApp.getActiveSheet();
  if (sh.getName() !== SHEET_APPLY) return ui.alert(`'${SHEET_APPLY}' 탭에서 처리할 행을 선택해 주세요.`);
  const rows = selectedRows(sh); if (!rows.length) return;
  if (ui.alert(`${rows.length}개 행을 '예약금 결제완료'로 바꾸고 신청자에게 확인 메일을 보낼까요?`, ui.ButtonSet.YES_NO) !== ui.Button.YES) return;
  let n = 0;
  rows.forEach(i => {
    const r = sh.getRange(i, 1, 1, HEADERS.length).getValues()[0], g = k => r[COL[k] - 1];
    if (g('결제상태') === STATUS.PAID) return;
    markRows(sh, [i], STATUS.PAID, '결제 링크', new Date(), '');
    if (g('이메일')) MailApp.sendEmail({
      to: g('이메일'), name: 'GARUDA Academy Korea',
      subject: '[GARUDA] 교육 신청 및 예약금 결제가 확인되었습니다',
      body: `${g('이름(한글)')}님, 가루다 교육 결제가 확인되었습니다.\n\n과정: ${g('과정')}\n교육 시작일: ${sh.getRange(i, COL['교육시작일']).getDisplayValue()}\n결제 금액: ${won(g('예약금'))}\n\n` +
        (Number(g('잔금')) > 0 ? '1영업일 이내에 잔금 결제 링크를 문자와 이메일로 보내드립니다.' : '참가가 확정되었습니다. 교육 전 준비 사항을 따로 안내해 드립니다.') +
        `\n문의: 카카오톡 채널 "바디녹스필라테스&가루다"`
    });
    n++;
  });
  ui.alert(`${n}건 처리했습니다.`);
}

function markBalanceDone() {
  const sh = SpreadsheetApp.getActiveSheet();
  if (sh.getName() !== SHEET_APPLY) return SpreadsheetApp.getUi().alert(`'${SHEET_APPLY}' 탭에서 선택해 주세요.`);
  selectedRows(sh).forEach(i => sh.getRange(i, COL['잔금상태']).setValue(BAL.DONE));
}

/** 처음 한 번 실행: 탭·머리글·드롭다운·현황 수식 생성 */
function setup() {
  const ss = SpreadsheetApp.getActive();
  const sh = sheet(SHEET_APPLY);
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold').setBackground('#32383E').setFontColor('#FFFFFF');
  sh.setFrozenRows(1); sh.setFrozenColumns(3);
  sh.getRange('B:B').setNumberFormat('yyyy-mm-dd hh:mm');
  sh.getRange('P:P').setNumberFormat('yyyy-mm-dd hh:mm');
  sh.getRange('T:T').setNumberFormat('yyyy-mm-dd hh:mm');
  sh.getRange('K:M').setNumberFormat('#,##0"원"');
  const rule = (list) => SpreadsheetApp.newDataValidation().requireValueInList(list, true).setAllowInvalid(false).build();
  sh.getRange(2, COL['결제상태'], 999).setDataValidation(rule(Object.values(STATUS)));
  sh.getRange(2, COL['잔금상태'], 999).setDataValidation(rule(Object.values(BAL)));
  // 결제상태 색상
  const rng = sh.getRange(2, 1, 999, HEADERS.length), letter = colLetter(COL['결제상태']);
  sh.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied(`=$${letter}2="${STATUS.PAID}"`).setBackground('#EAF4EE').setRanges([rng]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied(`=$${letter}2="${STATUS.FAIL}"`).setBackground('#FBEDEA').setRanges([rng]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied(`=$${letter}2="${STATUS.CANCEL}"`).setFontColor('#9AA0A6').setRanges([rng]).build()
  ]);

  const sm = sheet(SHEET_SUMMARY); sm.clear();
  const c = k => colLetter(COL[k]);
  sm.getRange('A1').setValue('과정·교육시작일별 신청 현황 (신청 탭에서 자동 집계)').setFontWeight('bold');
  sm.getRange('A3').setFormula(
    `=IFERROR(QUERY(${SHEET_APPLY}!A1:${colLetter(HEADERS.length)},"select ${c('과정')}, ${c('교육시작일')}, count(${c('신청번호')}) where ${c('신청번호')} is not null group by ${c('과정')}, ${c('교육시작일')} pivot ${c('결제상태')}",1),"아직 신청이 없습니다")`);
  sm.getRange('A1:Z2').setFontColor('#32383E');
  SpreadsheetApp.getUi().alert('설정 완료: "신청" 탭과 "과정별 현황" 탭이 준비되었습니다.');
}

/* ───────────────────────── 공통 ───────────────────────── */

function sheet(name) { const ss = SpreadsheetApp.getActive(); return ss.getSheetByName(name) || ss.insertSheet(name); }
function prop(k) { return PropertiesService.getScriptProperties().getProperty(k); }
function json(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function clean(v) { return String(v == null ? '' : v).replace(/^[=+\-@]/, "'$&").slice(0, 300).trim(); } // 수식 주입 방지
function won(n) { return Number(n).toLocaleString('ko-KR') + '원'; }
function orderName(items) { const n = items[0].progName; return (items.length > 1 ? `${n} 외 ${items.length - 1}건` : n) + ' 예약금'; }
function colLetter(n) { let s = ''; while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
function findRows(sh, orderId) {
  const last = sh.getLastRow(); if (last < 2) return [];
  const ids = sh.getRange(2, 1, last - 1, 1).getValues();
  return ids.map((r, i) => r[0] === orderId ? i + 2 : 0).filter(Boolean);
}
function markRows(sh, rows, status, method, at, memo, key) {
  rows.forEach(i => {
    sh.getRange(i, COL['결제상태']).setValue(status);
    if (method) sh.getRange(i, COL['결제수단']).setValue(method);
    if (at) sh.getRange(i, COL['결제일시']).setValue(at);
    if (key) sh.getRange(i, COL['결제키']).setValue(key);
    if (memo) sh.getRange(i, COL['메모']).setValue(memo);
  });
}
function selectedRows(sh) {
  const out = new Set();
  sh.getActiveRangeList().getRanges().forEach(r => { for (let i = r.getRow(); i < r.getRow() + r.getNumRows(); i++) if (i > 1) out.add(i); });
  return [...out];
}
function notifyAdmin(subject, body) {
  const to = prop('ADMIN_EMAIL'); if (!to) return;
  MailApp.sendEmail({ to, subject, body: body + `\n\n시트 열기: ${SpreadsheetApp.getActive().getUrl()}` });
}
