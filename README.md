# GARUDA Academy Korea 홈페이지

정적 사이트입니다. HTML·CSS·JS 파일만 있고 서버가 필요 없습니다.

```
garuda-site/
├── index.html              홈
├── pilates/index.html      필라테스 스튜디오 원장 랜딩
├── barre/index.html        바레 스튜디오 원장 랜딩
├── academy/index.html      자격과정 일정·신청·결제
├── studios/index.html      공식 스튜디오
├── assets/data/courses.js  코스 데이터 (여기만 고치면 일정이 바뀜)
├── CLAUDE.md               Claude Code가 읽는 프로젝트 명세
└── .nojekyll               GitHub Pages 설정
```

---

## 1. 로컬에서 열어보기

터미널에서 이 폴더로 이동한 뒤:

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속. 끌 때는 터미널에서 `Ctrl + C`.

> HTML 파일을 더블클릭해서 여는 방식은 쓰지 마세요.
> `/academy/` 페이지가 코스 데이터를 못 읽어 빈 화면이 됩니다.

---

## 2. Claude Code로 수정하기

이 폴더에서 `claude` 를 실행하면 Claude Code가 `CLAUDE.md`를 자동으로 읽습니다.
프로젝트 목표·데이터·금지사항이 거기 다 들어 있으니 매번 설명할 필요가 없습니다.

요청 예시:

```
9월 기수 일정을 실제 날짜로 바꿔줘. Mat Foundation은 10월 6일부터 11일까지야.
```
```
공식 스튜디오 목록의 예시 데이터를 지우고 실제 명단으로 바꿔줘.
```
```
5개 페이지에 중복된 CSS를 assets/css/base.css로 빼줘.
```

수정 후에는 위 1번 방법으로 꼭 눈으로 확인하세요.

---

## 3. GitHub Pages로 배포하기

`bpm.bodynox.com`과 같은 방식입니다. 가루다용 **새 저장소**를 만들고
다른 서브도메인을 붙입니다. 커스텀 도메인은 저장소마다 따로 지정할 수 있습니다.

### 3-1. 저장소 만들고 올리기

```bash
cd garuda-site
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/<아이디>/garuda-korea.git
git branch -M main
git push -u origin main
```

저장소 이름은 자유입니다(`garuda-korea` 등). 커스텀 도메인을 쓰면
`<아이디>.github.io/<저장소이름>/` 주소가 아니라 도메인 루트로 서비스되므로
절대 경로 링크가 그대로 동작합니다.

### 3-2. DNS 레코드 추가

bodynox.com DNS 관리 화면에서 `bpm` 레코드 옆에 하나 더 추가합니다.

| 타입 | 이름 | 값 |
|---|---|---|
| CNAME | `garuda` | `<아이디>.github.io` |

### 3-3. GitHub 설정

저장소 → **Settings → Pages**
- Source: `main` 브랜치 / `/ (root)`
- Custom domain: `garuda.bodynox.com` (이미 `CNAME` 파일에 들어 있어 자동 인식됩니다)
- DNS 전파 후 **Enforce HTTPS** 체크

### 서브도메인을 바꾸려면

`CNAME` 파일의 내용 한 줄만 바꾸고, DNS 레코드 이름도 같이 맞추면 됩니다.
현재 값: `garuda.bodynox.com`

### 수정 후 다시 올리기

```bash
git add .
git commit -m "무엇을 고쳤는지 한 줄로"
git push
```

푸시하면 1~2분 뒤 반영됩니다.

---

## 4. 배포 전 체크리스트

- [ ] `courses.js`의 커리큘럼·기수 일정을 실제 내용으로 교체
- [ ] `studios/index.html`의 공식 스튜디오 예시 명단을 실제 명단으로 교체 (게재 동의 확인)
- [ ] 히어로 배경 영상 5개 페이지에 연결
- [ ] 카카오톡 채널 URL 연결
- [ ] 문의·신청 폼을 구글폼으로 연결
- [ ] 원데이 워크숍 가격·일정·차감 정책 확정
- [ ] 환불 규정, 예약금 금액 확정
- [ ] 시뮬레이터 기본값 검토 (너무 낙관적이면 신뢰를 잃습니다)
- [ ] 모바일에서 전체 페이지 확인 — 방문자 대부분이 모바일입니다
