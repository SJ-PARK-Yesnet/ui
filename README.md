# UI Kit

공통 UI 컴포넌트 및 레이아웃 모음

## 폴더 구조

- components: 버튼, 카드, 테이블 등 UI 컴포넌트
- layout: 대시보드 등 레이아웃 컴포넌트
- styles: Tailwind, 글로벌 스타일, PostCSS 설정
- hooks: 커스텀 훅
- example: 실제 서비스와 동일한 구조의 샘플 랜딩/로그인/대시보드 페이지 예시

## 사용법

1. 이 레포를 클론하거나, git submodule로 추가하세요.
2. tailwind.config.ts, postcss.config.mjs, globals.css를 프로젝트에 맞게 적용하세요.
3. 필요한 컴포넌트를 import해서 사용하세요.

```tsx
import Button from "@/ui-kit/components/button"

<Button>Click me</Button>
```

## 샘플 페이지 예시 (example 폴더)

- `example/ExampleLanding.tsx`: 실제 랜딩페이지와 동일한 구조/스타일의 샘플
- `example/ExampleLogin.tsx`: 실제 로그인페이지와 동일한 구조/스타일의 샘플
- `example/ExampleDashboard.tsx`: 실제 대시보드와 동일한 섹션/레이아웃 샘플

> 샘플 페이지는 실제 데이터/비즈니스 로직 없이 UI 조합만 보여줍니다. 
> 다른 프로젝트에서 빠르게 참고하거나 복사해서 사용할 수 있습니다.

## 의존성
- React
- Tailwind CSS
- lucide-react 등

## 예시
- Button, Card, Table, Modal, Input, Pagination, Toast 등 다양한 UI 컴포넌트 포함

---

> 이 UI Kit은 다양한 프로젝트에서 재사용할 수 있도록 설계되었습니다.
> props만 맞추면 어떤 데이터/기능에도 쉽게 적용할 수 있습니다.

---

문의: your@email.com 