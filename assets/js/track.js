/* 유입 경로 기록 — 처음 들어온 광고(UTM)·페이지를 저장해 두었다가 신청서에 함께 보낸다.
   모든 페이지에서 불러온다. 저장 실패(사생활 보호 모드 등)는 무시. */
(function () {
  try {
    const K = 'garuda_src', q = new URLSearchParams(location.search);
    const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const hasUtm = utm.some(k => q.get(k));
    let cur = null; try { cur = JSON.parse(localStorage.getItem(K) || 'null'); } catch (e) {}
    // 광고로 새로 들어왔거나 기록이 없을 때만 저장 (첫 유입 기준, 광고 재유입 시 갱신)
    if (hasUtm || !cur) {
      const v = { landing: location.pathname, ref: document.referrer && !document.referrer.includes(location.host) ? document.referrer : '', at: new Date().toISOString() };
      utm.forEach(k => { v[k] = q.get(k) || ''; });
      localStorage.setItem(K, JSON.stringify(v));
    }
  } catch (e) {}
})();
