/* ============================================================
   GARUDA Academy Korea — 신청·결제 연결 설정
   ------------------------------------------------------------
   applyEndpoint  : Google Apps Script 웹 앱 URL
                    (apps-script/SETUP.md 의 "배포" 단계에서 받은 https://script.google.com/macros/s/…/exec)
   depositPayLink : 토스페이먼츠 결제 링크(예약금 30만원 상품). 값이 있으면 이 링크로 결제하고,
                    신청서는 한 번에 과정 하나만 받는다. 결제 확인은 토스 상점관리자에서 직접.
   tossClientKey  : (결제 링크 대신 홈페이지 안에서 결제받을 때만) 토스페이먼츠 결제위젯 "클라이언트 키" (test_gck_… 또는 live_gck_…)
                    ※ 시크릿 키는 절대 여기 넣지 않는다. Apps Script 스크립트 속성에만 저장.
   deposit        : 과정당 예약금(원). 신청서와 함께 결제
   balanceNotice  : 잔금 안내 문구

   applyEndpoint 가 비어 있으면 신청 내용은 카카오톡으로 보내도록 안내한다(시트 저장 없음).
   applyEndpoint 와 depositPayLink 가 모두 비어 있으면 신청 페이지는 카카오톡 신청만 안내한다.
   ============================================================ */
window.GARUDA_CONFIG = {
  applyEndpoint: 'https://script.google.com/macros/s/AKfycbyjrMFhYV9UvC65tP4z_Uc0TndZyUU2HsNvAKdW2h7jdVVUVdT_qbv6CS76u9C7W8My/exec',
  depositPayLink: 'https://buy.tosspayments.com/products/yUBm1V6H5w',
  tossClientKey: '',
  deposit: 300000,
  balanceNotice: '예약금 결제가 확인되면 1영업일 이내에 잔금 결제 링크를 문자와 이메일로 보내드립니다.'
};
