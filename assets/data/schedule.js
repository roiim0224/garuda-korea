/* ============================================================
   GARUDA Academy Korea — 교육 일정 (단일 원본)
   ------------------------------------------------------------
   원본: ~/Desktop/Garuda-홈페이지/GARUDA-프로그램/GARUDA-교육일정.numbers
   /academy/ · /programs/ · 홈 · /pilates/ · /barre/ 가 이 파일을 읽는다.

   ▸ 정규 과정 일정 (sessions)
     prog   : programs.js 의 과정 id (소개 페이지·과정 정보와 연결)
     cls    : 반 구분 (주중반(집중반) / 주말반 등)
     dates  : 실제 교육일 'YYYY-MM-DD' 전부 (연속되지 않아도 됨)
     time   : 교육 시간 (요일마다 다르면 '토 13:30–17:30 · 일 09:00–13:00')
     place  : 교육 장소
     price  : 이 기수 교육비(원). 비워 두면 courses.js 의 과정 수강료를 쓴다
     early  : 얼리버드 마감 = 교육 시작일 기준 N주 전. 0 이면 얼리버드 없음
              마감일까지는 20% 할인가, 이후에는 자동으로 정상가 표시
     note   : 추가 안내 (선택)

   ▸ 특별 프로그램 (events) — 워크숍·체험 등 정규 과정이 아닌 것
     tiers  : 기간별 가격 [[이 날짜까지, 금액, 토스 결제 링크], ...]. 마지막 금액이 정상가.
              결제 링크가 비어 있는 기간에는 신청서만 받고 결제 링크를 따로 안내한다
     apply  : true 면 홈페이지 신청서(/apply/?e=id)로 신청·결제. 없으면 카카오톡 신청
     payNow : 토스 결제 링크. 있으면 카드에 '결제신청' 버튼 — 신청서 없이 바로 결제(참가자 정보는 토스 상점관리자에서 확인)
   ============================================================ */

window.GARUDA_SCHEDULE = {
  earlyRate: 0.2,

  events: [
    {
      id: 'gateway-2026-10',
      title: 'GARUDA Gateway',
      sub: 'Barre · Reformer · Sling 체험',
      dates: ['2026-10-17'],
      place: '서울역센터',
      price: 120000,
      cap: 5,
      slots: [
        ['13:00', 'GARUDA Barre', 'barre-foundation'],
        ['14:00', 'GARUDA Reformer', 'reformer'],
        ['15:00', 'GARUDA Sling', 'sling']
      ],
      desc: [
        'GARUDA Master Roi 선생님이 무릎 수술 후 첫번째 진행하는 공식행사로서 이 프로그램은 GARUDA 정규과정 전에 GARUDA 움직임원리와 특징을 경험하고 자신들만의 도입방향을 설계할 수 있는 시간입니다.',
        '각 수업시간은 50분간 진행되며 3가지 수업을 모두 참가하는 일정입니다.'
      ],
      badge: '5명 한정 · 사전등록 할인 없음',
      payNow: 'https://buy.tosspayments.com/products/RzBnLiYz04'   // Gateway 12만원 토스 결제 링크
    },
    {
      id: 'james-2026-11',
      title: 'GARUDA Special Workshop',
      sub: "James D'Silva 내한 특별수업",
      dates: ['2026-11-13', '2026-11-14', '2026-11-15'],
      place: '광화문센터',
      apply: true,
      tiers: [['2026-09-30', 1000000, 'https://buy.tosspayments.com/products/mVBoGj2eG4'], ['2026-10-15', 1200000, ''], [null, 1500000, '']],
      slots: [
        ['10:00–14:00', 'Foot-Knee-Hip', '', '지면반발력과 신체의 무게중심이동의 메카니즘을 이해하고 그에 따른 움직임을 배우는 시간입니다.'],
        ['15:00–19:00', 'Scoliosis', '', '척추측만을 대하는 새로운 방법과 GARUDA 의 모든 원리를 적용한 교정수업을 배우는 시간입니다.']
      ]
    }
  ],

  sessions: [
    {prog: 'barre-foundation', cls: '주말반', dates: ['2026-10-24','2026-10-25','2026-10-31','2026-11-01','2026-11-07','2026-11-08'],
     time: '토 13:30–17:30 · 일 09:00–13:00', place: '서울역센터', price: 2500000, early: 2},
    {prog: 'barre-foundation', cls: '주중반(집중반)', dates: ['2026-10-26','2026-10-27','2026-10-28','2026-10-29','2026-10-30'],
     time: '13:00–17:30', place: '서울역센터', price: 2500000, early: 2},
    {prog: 'barre-foundation', cls: '주말반', dates: ['2026-11-21','2026-11-22','2026-11-28','2026-11-29','2026-12-05','2026-12-06'],
     time: '토 13:30–17:30 · 일 09:00–13:00', place: '광화문센터', price: 2500000, early: 3},
    {prog: 'sling', cls: '주말반', dates: ['2026-12-12','2026-12-13','2026-12-19'],
     time: '토 13:30–17:30 · 일 09:00–13:00', place: '서울역센터', price: 1200000, early: 3},
    {prog: 'reformer', cls: '주말반', dates: ['2027-01-09','2027-01-10','2027-01-16','2027-01-17','2027-01-30','2027-01-31'],
     time: '토 13:30–17:30 · 일 09:00–13:00', place: '서울역센터', price: 2500000, early: 3},
    {prog: 'reformer', cls: '주중반(집중반)', dates: ['2027-01-18','2027-01-19','2027-01-20','2027-01-21','2027-01-22','2027-01-23'],
     time: '09:00–13:00', place: 'Jakarta', price: 2500000, early: 3, note: 'Jakarta 에 위치한 RAIA Pilates Studio 에서 진행됩니다.'},
    {prog: 'barre-foundation', cls: '주중반(집중반)', dates: ['2027-01-18','2027-01-19','2027-01-20','2027-01-21','2027-01-22','2027-01-23'],
     time: '14:00–18:00', place: 'Jakarta', price: 2500000, early: 3, note: 'Jakarta 에 위치한 RAIA Pilates Studio 에서 진행됩니다.'},
    {prog: 'mat-foundation', cls: '주중반(집중반)', dates: ['2027-02-15','2027-02-16','2027-02-17','2027-02-18','2027-02-19','2027-02-20'],
     time: '09:00–13:00', place: '서울역센터', price: 2500000, early: 3},
    {prog: 'apparatus-a', cls: '주중반(집중반)', dates: ['2027-02-15','2027-02-16','2027-02-17','2027-02-18','2027-02-19','2027-02-20'],
     time: '14:00–18:00', place: '서울역센터', price: 2500000, early: 3},
    {prog: 'sling', cls: '토·일·월', dates: ['2027-02-27','2027-02-28','2027-03-01'],
     time: '09:00–13:00', place: '서울역센터', price: null, early: 3},
    {prog: 'brick-ghara', cls: '토·일·월', dates: ['2027-02-27','2027-02-28','2027-03-01'],
     time: '14:00–18:00', place: '서울역센터', price: null, early: 3},
    {prog: 'barre-foundation', cls: '주중반(집중반)', dates: ['2027-03-15','2027-03-16','2027-03-17','2027-03-18','2027-03-19'],
     time: '13:00–17:30', place: '서울역센터', price: null, early: 3},
    {prog: 'chair-dhara', cls: '주말반', dates: ['2027-03-20','2027-03-21','2027-03-27','2027-03-28'],
     time: '09:00–13:00', place: '서울역센터', price: null, early: 3},
    /* 일정표에는 3/20·21·27·28 4일로 적혀 있으나 과정이 3일 12시간이므로 3일로 게시 (2026-09-27 결정) */
    {prog: 'chakra', cls: '주말반', dates: ['2027-03-20','2027-03-21','2027-03-27'],
     time: '14:00–18:00', place: '서울역센터', price: null, early: 3}
  ]
};

/* ── 공통 계산 (각 페이지에서 사용) ───────────────────────────── */
window.GARUDA_SCHED = (function () {
  const D = window.GARUDA_SCHEDULE;
  const W = '일월화수목금토';
  const day = s => new Date(s + 'T00:00:00');
  const today = () => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; };
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const md = s => { const d = day(s); return `${d.getMonth() + 1}.${d.getDate()}`; };
  const wd = s => W[day(s).getDay()];

  /* '10.24(토) 25(일) 31(토) · 11.1(일) 7(토) 8(일)' — 같은 달은 날짜만 */
  function datesText(ds) {
    const out = []; let m = -1;
    ds.forEach(s => {
      const d = day(s);
      if (d.getMonth() !== m) { m = d.getMonth(); out.push(`${m + 1}.${d.getDate()}(${wd(s)})`); }
      else out.push(`${d.getDate()}(${wd(s)})`);
    });
    return out.join(' ');
  }
  /* 연속된 날짜면 '1.18(월) – 1.23(토)' 로 짧게 */
  function rangeText(ds) {
    const a = day(ds[0]), b = day(ds[ds.length - 1]);
    const consecutive = (b - a) / 864e5 === ds.length - 1;
    return consecutive && ds.length > 2 ? `${md(ds[0])}(${wd(ds[0])}) – ${md(ds[ds.length - 1])}(${wd(ds[ds.length - 1])})` : datesText(ds);
  }
  function earlyEnd(x) {
    if (!x.early) return null;
    const d = day(x.dates[0]); d.setDate(d.getDate() - x.early * 7); return d;
  }
  /* 기수 가격: {regular, now, until(Date|null)} */
  function price(x, courseFee) {
    const regular = x.price || courseFee || null;
    const end = earlyEnd(x);
    const on = regular && end && today() <= end;
    return { regular, now: on ? Math.round(regular * (1 - D.earlyRate)) : regular, until: on ? end : null };
  }
  function tierPrice(ev) {
    const t = today();
    for (const [until, amt, link] of ev.tiers) if (!until || t <= day(until)) return { now: amt, until: until ? day(until) : null, link: link || '' };
  }
  const upcoming = list => list.filter(x => day(x.dates[x.dates.length - 1]) >= today())
                                .sort((a, b) => a.dates[0] < b.dates[0] ? -1 : a.dates[0] > b.dates[0] ? 1 : 0);
  return { D, day, iso, md, wd, datesText, rangeText, price, tierPrice, upcoming, earlyEnd };
})();
