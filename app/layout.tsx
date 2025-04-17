import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LayoutContent } from "./layout-client"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CODAI - AI 기반 이카운트 ERP 솔루션",
  description: "CODAI는 이카운트 ERP를 AI로 강화하여 업무 효율성을 극대화하는 솔루션입니다.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'