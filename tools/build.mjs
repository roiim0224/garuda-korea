/* ============================================================
   GARUDA Academy Korea — SEO 빌드
   ------------------------------------------------------------
   데이터(courses.js · programs.js · schedule.js)나 tools/seo.json 을 바꾼 뒤 실행:

     python3 -m http.server 8000      (다른 창에서 로컬 서버 실행)
     node tools/build.mjs

   하는 일
   1. /programs/<과정id>/ 과정별 페이지 생성 (검색엔진이 과정마다 따로 색인)
   2. 모든 페이지 <head> 의 SEO 블록 갱신: 제목·설명·canonical·공유 미리보기(OG)·
      구조화 데이터(JSON-LD)·구글/네이버 소유 확인
   3. 자바스크립트로 그리는 페이지(과정 소개·교육 일정)를 크롬으로 미리 그려 HTML 에 저장
      → 네이버 검색로봇처럼 JS 를 잘 실행하지 않는 크롤러도 내용을 읽을 수 있다
   4. sitemap.xml · robots.txt 생성
   ============================================================ */
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const LOCAL = process.env.LOCAL || 'http://localhost:8000';
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SEO = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/seo.json'), 'utf8'));
const SITE = SEO.site;
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clip = (s, n) => { s = String(s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).replace(/[\s,.·]+\S*$/, '') + '…' : s; };

/* ── 데이터 불러오기 (브라우저와 같은 파일) ── */
const ctx = { window: {}, Date, Math, JSON, console }; vm.createContext(ctx);
for (const f of ['assets/data/courses.js', 'assets/data/programs.js', 'assets/data/schedule.js']) vm.runInContext(read(f), ctx);
const C = Object.fromEntries(ctx.window.GARUDA_COURSES.map(c => [c.id, c]));
const PG = ctx.window.GARUDA_PROGRAMS, X = ctx.window.GARUDA_SCHED;
const SES = X.upcoming(X.D.sessions);

/* ── 구조화 데이터 ── */
const ORG = {
  '@type': 'EducationalOrganization', '@id': SITE + '/#org', name: SEO.siteName, alternateName: '가루다 아카데미 코리아',
  url: SITE + '/', logo: SITE + SEO.defaultImage,
  description: 'The GARUDA Method 공식 아시아 아카데미. 필라테스·바레·기구 지도자 자격과정 운영.',
  parentOrganization: { '@type': 'Organization', name: 'The GARUDA Method', url: 'https://www.thegaruda.net/' },
  sameAs: ['https://pf.kakao.com/_xexjbUT']
};
const place = p => ({ '@type': 'Place', name: p, address: { '@type': 'PostalAddress', addressLocality: p === 'Jakarta' ? 'Jakarta' : '서울', addressCountry: p === 'Jakarta' ? 'ID' : 'KR' } });
function courseLD(p) {
  const f = C[p.ref];
  const inst = SES.filter(s => s.prog === p.id).map(s => {
    const pr = X.price(s, f && f.c);
    return { '@type': 'CourseInstance', courseMode: 'Onsite', startDate: s.dates[0], endDate: s.dates[s.dates.length - 1], location: place(s.place),
      courseSchedule: { '@type': 'Schedule', repeatFrequency: 'P1D', repeatCount: s.dates.length },
      ...(pr.regular ? { offers: { '@type': 'Offer', price: pr.now, priceCurrency: 'KRW', availability: 'https://schema.org/InStock', url: `${SITE}/apply/?c=${p.id}&s=${s.dates[0]}`, category: pr.until ? '얼리버드' : '정가' } } : {}) };
  });
  return { '@type': 'Course', '@id': `${SITE}/programs/${p.id}/#course`, name: `${p.name} 지도자 과정 (${p.kr})`, description: descOf(p),
    url: `${SITE}/programs/${p.id}/`, provider: { '@id': SITE + '/#org' }, inLanguage: 'ko', courseCode: p.id,
    ...(f ? { timeRequired: `PT${f.h}H`, offers: { '@type': 'Offer', price: f.c, priceCurrency: 'KRW', category: '정가' } } : {}),
    ...(inst.length ? { hasCourseInstance: inst } : {}) };
}
function eventLD(e) {
  const now = e.tiers ? X.tierPrice(e).now : e.price;
  return { '@type': 'Event', name: `${e.title} — ${e.sub}`, startDate: e.dates[0], endDate: e.dates[e.dates.length - 1],
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled',
    location: place(e.place), organizer: { '@id': SITE + '/#org' }, description: (e.desc || e.slots.map(s => s[1])).join(' '),
    offers: { '@type': 'Offer', price: now, priceCurrency: 'KRW', availability: 'https://schema.org/InStock', url: e.page ? SITE + e.page : e.apply ? `${SITE}/apply/?e=${e.id}` : `${SITE}/academy/#events` } };
}
const crumbs = list => ({ '@type': 'BreadcrumbList', itemListElement: list.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + url })) });
const ld = graph => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;

/* ── 과정별 메타 ── */
function descOf(p) {
  const f = C[p.ref], body = (p.intro || []).filter(t => !t.startsWith('### ')).join(' ');
  const facts = f ? ` ${f.d}일 ${f.h}시간 · 수강료 ${(f.c / 10000)}만원.` : '';
  return clip((p.ready ? body : `${p.name} 지도자 과정 소개를 준비하고 있습니다.`), 130 - facts.length) + facts;
}
function metaOf(p) {
  const f = C[p.ref], d = f ? f.d : p.days, h = f ? f.h : p.hours;
  const title = `${p.name} 지도자 과정 | 가루다 아카데미`;
  const facts = d ? `${d}일 ${h}시간${f ? `·수강료 ${f.c / 10000}만원` : ''}. ` : '';
  const description = p.ready
    ? `${p.kr} 지도자 과정. ${facts}커리큘럼·교육 일정·현장 사진과 영상을 확인하세요.`
    : `${p.kr} 지도자 과정 소개를 준비하고 있습니다. 교육 일정과 상담은 카카오톡으로 문의하세요.`;
  return { title, description };
}
const LIM = SEO.limits || { title: 40, description: 80 };
function checkLen(url, title, description) {
  if (title.length > LIM.title) console.warn(`  ⚠ ${url} 제목 ${title.length}자 (권장 ${LIM.title}자 이내)`);
  if (description.length > LIM.description) console.warn(`  ⚠ ${url} 설명 ${description.length}자 (권장 ${LIM.description}자 이내)`);
}
function ogImage(p) { const f = `assets/img/og/${p.id}.jpg`; return fs.existsSync(path.join(ROOT, f)) ? '/' + f : SEO.defaultImage; }

/* ── <head> SEO 블록 ── */
function seoBlock({ url, title, description, image, robots, graph, type = 'website' }) {
  const img = SITE + (image || SEO.defaultImage);
  return [
    '<!--seo:start (tools/build.mjs 가 생성 — 직접 고치지 말 것)-->',
    `<link rel="canonical" href="${SITE}${url}">`,
    robots ? `<meta name="robots" content="${robots}">` : '',
    SEO.googleVerification ? `<meta name="google-site-verification" content="${esc(SEO.googleVerification)}">` : '',
    SEO.naverVerification ? `<meta name="naver-site-verification" content="${esc(SEO.naverVerification)}">` : '',
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:site_name" content="${esc(SEO.siteName)}">`,
    `<meta property="og:locale" content="ko_KR">`,
    `<meta property="og:url" content="${SITE}${url}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    graph ? ld(graph) : '',
    '<!--seo:end-->'
  ].filter(Boolean).join('\n');
}
function applyHead(html, { title, description, block }) {
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(description)}">`);
  html = html.replace(/\n?<meta name="robots"[^>]*>/g, '').replace(/\n?<link rel="canonical"[^>]*>/g, '');
  html = html.replace(/\n?<!--seo:start[\s\S]*?<!--seo:end-->/, '');
  return html.replace(/(<meta name="description"[^>]*>)/, `$1\n${block}`);
}

/* ── 크롬으로 미리 그리기 ── */
function prerender(url) {
  const out = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--virtual-time-budget=6000', '--dump-dom', LOCAL + url],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 << 20 });
  if (!out.includes('</html>')) throw new Error('prerender 실패: ' + url);
  // 빈 줄이 실행할 때마다 늘어나지 않도록 정리 (여러 번 빌드해도 결과가 같게)
  return '<!DOCTYPE html>\n' + out.trim().replace(/\n[ \t]*\n(?:[ \t]*\n)+/g, '\n\n') + '\n';
}
const keepHead = (fresh, rendered) => rendered.replace(/<head>[\s\S]*<\/head>/, fresh.match(/<head>[\s\S]*<\/head>/)[0]);

const TPL = read('programs/index.html');   // 과정 페이지 틀 (개요 페이지를 미리 그리기 전에 읽어 둔다)

/* ── 1) 기본 페이지 ── */
const sitemap = [];
const homeGraph = [ORG, { '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + '/', name: SEO.siteName, inLanguage: 'ko', publisher: { '@id': SITE + '/#org' } }];
for (const [url, pg] of Object.entries(SEO.pages)) {
  let graph = null;
  if (url === '/') graph = homeGraph;
  if (url === '/programs/') graph = [ORG, crumbs([['홈', '/'], ['교육과정 소개', '/programs/']]),
    { '@type': 'ItemList', itemListElement: PG.programs.filter(p => p.ready).map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/programs/${p.id}/`, name: p.name })) }];
  if (url === '/academy/') graph = [ORG, crumbs([['홈', '/'], ['교육 일정', '/academy/']]),
    ...PG.programs.filter(p => SES.some(s => s.prog === p.id)).map(courseLD), ...X.upcoming(X.D.events).map(eventLD)];
  if (pg.event) { const ev = X.D.events.find(e => e.id === pg.event); if (ev) graph = [ORG, crumbs([['홈', '/'], ['교육 일정', '/academy/'], [ev.title, url]]), eventLD(ev)]; }
  checkLen(url, pg.title, pg.description);
  const block = seoBlock({ url, title: pg.title, description: pg.description, image: pg.image, robots: pg.robots, graph });
  let html = applyHead(read(pg.file), { title: pg.title, description: pg.description, block });
  write(pg.file, html);
  if (pg.prerender) { const r = prerender(url); write(pg.file, keepHead(html, r)); }
  if (!pg.robots) sitemap.push([url, pg.priority]);
  console.log('✓', url);
}

/* ── 2) 과정별 페이지 /programs/<id>/ ── */
for (const p of PG.programs) {
  const url = `/programs/${p.id}/`, f = C[p.ref];
  const { title, description } = metaOf(p); checkLen(url, title, description);
  const graph = [ORG, crumbs([['홈', '/'], ['교육과정 소개', '/programs/'], [p.name, url]]), courseLD(p)];
  const block = seoBlock({ url, title, description, image: ogImage(p), robots: p.ready ? '' : 'noindex, follow', graph });
  const html = applyHead(TPL, { title, description, block });
  const file = `programs/${p.id}/index.html`;
  write(file, html);
  write(file, keepHead(html, prerender(url)));
  if (p.ready) sitemap.push([url, '0.8']);
  console.log('✓', url, p.ready ? '' : '(noindex: 소개 준비중)');
}

/* ── 3) 캐시 무효화: 데이터·스크립트 파일 주소에 내용 기반 버전(?v=)을 붙인다 ──
   파일이 바뀌면 주소가 바뀌어 방문자 브라우저가 옛 파일(최대 10분 저장)을 쓰지 않는다 */
const crypto = await import('node:crypto');
const ver = {};
for (const dir of ['assets/data', 'assets/js']) for (const f of fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith('.js')))
  ver['/' + dir + '/' + f] = crypto.createHash('md5').update(read(dir + '/' + f)).digest('hex').slice(0, 8);
const htmlFiles = [];
(function walk(d) { for (const e of fs.readdirSync(path.join(ROOT, d), { withFileTypes: true })) {
  if (e.name.startsWith('.') || ['node_modules', 'apps-script', 'tools', 'assets'].includes(e.name)) continue;
  const p = d ? d + '/' + e.name : e.name;
  if (e.isDirectory()) walk(p); else if (e.name.endsWith('.html')) htmlFiles.push(p);
} })('');
let bumped = 0;
for (const f of htmlFiles) {
  const src = read(f);
  const out = src.replace(/src="(\/assets\/(?:data|js)\/[\w.-]+\.js)(?:\?v=[\w]+)?"/g, (m, u) => ver[u] ? `src="${u}?v=${ver[u]}"` : m);
  if (out !== src) { write(f, out); bumped++; }
}
console.log(`✓ 파일 버전 표시 갱신 (${bumped}개 페이지)`);

/* ── 4) sitemap.xml · robots.txt ── */
const today = new Date().toISOString().slice(0, 10);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemap.map(([u, pr]) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join('\n') + '\n</urlset>\n');
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /apply/\nDisallow: /apps-script/\nDisallow: /tools/\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`✓ sitemap.xml (${sitemap.length}개 주소) · robots.txt`);
