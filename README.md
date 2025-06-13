# UI Kit

공통 UI 컴포넌트 및 레이아웃 모음

## 폴더 구조

- components: 버튼, 카드, 테이블 등 UI 컴포넌트
- layout: 대시보드 등 레이아웃 컴포넌트
- styles: Tailwind, 글로벌 스타일, PostCSS 설정
- hooks: 커스텀 훅

## 사용법

1. 이 레포를 클론하거나, git submodule로 추가하세요.
2. tailwind.config.ts, postcss.config.mjs, globals.css를 프로젝트에 맞게 적용하세요.
3. 필요한 컴포넌트를 import해서 사용하세요.

```tsx
import Button from "@/ui-kit/components/button"

<Button>Click me</Button>
```

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