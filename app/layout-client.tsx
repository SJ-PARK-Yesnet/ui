"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // 로그인, 회원가입, 대시보드 페이지에서는 헤더와 푸터를 표시하지 않음
  const hideHeaderFooter = 
    pathname === "/login" || 
    pathname === "/signup" || 
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/")

  return (
    <div className="relative flex min-h-screen flex-col">
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  )
} 