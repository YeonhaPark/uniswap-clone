## How to Get Started

```
pnpm install
```

```
pnpm run dev
```

## 🛠️ Tech Stack

### Language

- Typescript

### Framework

- Next.js (App Router)

### UI & Styling

- Tailwind CSS
- shadcn/ui

### 구현 기능

- Light/Dark mode 지원 (via next-themes)
- ETH/USDC/WBTC 간 스왑 UI
- 통화 선택 모달 (ETH/USDC/WBTC), 토큰 리스트의 경우 mock-data를 Next API Routes 에서 불러와서 진행
- Internationalization (next-intl, 헤더 우측 더보기 버튼 클릭 후 실행)
- 린팅(ESLint), 포맷팅(Prettier) 설정

### Structure

```
.
├── README.md
├── components
│   └── ui # Shadcn UI components
├── components.json
├── constants.ts
├── data
│   └── volume-dummy.json
├── eslint.config.mjs
├── lib
│   └── utils.ts
├── messages # 언어 파일
│   ├── af-ZA.json
│   ├── ar-SA.json
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── favicon.ico
│   ├── fonts
│   └── logos
├── src
│   ├── app
│   ├── components
│   ├── i18n
│   └── middleware.ts
├── tsconfig.json
└── types.ts
```
