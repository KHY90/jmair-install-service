# JM Air-install Service

이 프로젝트는 에어컨 설치, 수리, 청소 서비스를 제공하는 업체를 위한 간단한 랜딩 페이지입니다.

## ✨ 주요 기능

- **서비스 소개**: 설치, 수리, 청소 서비스에 대한 상세 정보를 제공합니다.
- **이미지 갤러리**: 실제 작업 사진을 보여주는 갤러리 기능이 포함되어 있습니다.
- **문의하기 폼**: 사용자가 서비스 문의를 쉽게 접수할 수 있습니다. 접수된 내용은 지정된 이메일로 자동 발송됩니다.
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 등 모든 기기에서 최적화된 화면을 제공합니다.

## 🛠️ 사용된 기술

- **프레임워크**: [Next.js](https://nextjs.org/)
- **언어**: [TypeScript](https://www.typescriptlang.org/)
- **스타일링**: [Tailwind CSS](https://tailwindcss.com/)
- **메일링**: [Nodemailer](https://nodemailer.com/)

## 📂 프로젝트 구조

주요 디렉토리 및 파일에 대한 간략한 설명입니다.

- `public/`: 이미지, 파비콘 등 정적 자산이 위치합니다.
- `src/app/`: Next.js의 App Router를 사용하는 애플리케이션의 핵심 코드입니다.
  - `api/`: API 라우트 핸들러가 위치합니다 (예: 문의하기 폼 데이터 처리).
  - `components/`: 재사용 가능한 UI 컴포넌트들이 위치합니다.
  - `lib/`: 유틸리티 함수 및 헬퍼 함수들이 위치합니다.
  - `globals.css`: 전역 스타일시트입니다.
  - `layout.tsx`: 전체 애플리케이션의 레이아웃을 정의합니다.
  - `page.tsx`: 메인 페이지 컴포넌트입니다.
  - `not-found.tsx`: 404 에러 페이지입니다.
  
## 🚀 시작하기

### 1. 사전 준비

- [Node.js](https://nodejs.org/) (v18 이상 권장)
- `npm` 또는 `yarn`

### 2. 프로젝트 클론 및 종속성 설치

```bash
git clone https://github.com/your-username/jmair-install-service.git
cd jmair-install-service
npm install
```

### 3. 환경 변수 설정

프로젝트 루트 디렉터리에 `.env.local` 파일을 생성하고 아래 내용을 채워주세요. 이메일 전송 기능을 위해 필요합니다.

```
# 문의를 받을 Gmail 주소
GMAIL_USER="your-email@gmail.com"

# 해당 Gmail 계정에서 생성한 16자리 앱 비밀번호
GMAIL_APP_PASSWORD="your-app-password"
```

**참고**: Gmail 앱 비밀번호는 [Google 계정 설정](https://myaccount.google.com/security)의 `보안` > `앱 비밀번호`에서 생성할 수 있습니다. (2단계 인증이 활성화되어 있어야 합니다.)

### 4. 개발 서버 실행

```bash
npm run dev
```

이제 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 웹사이트를 확인할 수 있습니다.
