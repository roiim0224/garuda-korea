/* 구글 애널리틱스(GA4) — 모든 페이지 <head> 에서 불러온다.
   실제 주소(garudakorea.com)에서만 기록한다. 로컬 확인 중에는 ?ga_debug 를 붙이면 기록.
   페이지에서 행동을 기록할 때는 gaEvent('이벤트이름', {항목}) 를 쓴다. */
(function () {
  var ID = 'G-ZSDCG1RDPK';
  window.gaEvent = function (name, params) { try { if (window.gtag) window.gtag('event', name, params || {}); } catch (e) {} };
  var live = /(^|\.)garudakorea\.com$/.test(location.hostname) || /[?&]ga_debug/.test(location.search);
  if (!live) return;
  var s = document.createElement('script'); s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', ID);

  /* 모든 페이지 공통: 카카오톡 상담·신청 버튼 클릭 */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('pf.kakao.com') > -1) window.gaEvent('kakao_click', { link_text: (a.textContent || '').trim().slice(0, 40), page_path: location.pathname });
    else if (href.indexOf('/apply/') === 0) window.gaEvent('apply_click', { link_url: href, page_path: location.pathname });
  }, true);
})();
