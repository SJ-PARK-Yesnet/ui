"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative mx-auto flex h-14 items-center px-4">
        <div className="absolute left-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-6 w-24">
              <Image
                src="/logo.png"
                alt="CODAI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
        
        <nav className="mx-auto flex items-center justify-center space-x-8 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80"
          >
            솔루션 소개
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-foreground/80"
          >
            가격 정책
          </Link>
          <Link
            href="/resources"
            className="transition-colors hover:text-foreground/80"
          >
            유용한 정보
          </Link>
        </nav>
        
        <div className="absolute right-4 flex items-center space-x-2">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <nav className="flex items-center space-x-2">
            <Link href="/login">
              <Button variant="ghost" className="hidden md:inline-flex">
                로그인
              </Button>
            </Link>
            <Link href="/reservation">
              <Button>사전예약</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
