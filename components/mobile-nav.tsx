"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
        <div className="flex items-center justify-center mb-10 mt-4">
          <Link href="/" onClick={() => setOpen(false)}>
            <div className="relative h-12 w-40">
              <Image
                src="/logo.png"
                alt="CODAI Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 160px, 120px"
              />
            </div>
          </Link>
        </div>
        <nav className="flex flex-col gap-6">
          <Link 
            href="/" 
            className="text-lg font-medium hover:text-primary transition-colors" 
            onClick={() => setOpen(false)}
          >
            솔루션 소개
          </Link>
          <Link 
            href="/pricing" 
            className="text-lg font-medium hover:text-primary transition-colors" 
            onClick={() => setOpen(false)}
          >
            가격 정책
          </Link>
          <Link 
            href="/resources" 
            className="text-lg font-medium hover:text-primary transition-colors" 
            onClick={() => setOpen(false)}
          >
            유용한 정보
          </Link>
          <Link 
            href="/login" 
            className="text-lg font-medium hover:text-primary transition-colors" 
            onClick={() => setOpen(false)}
          >
            로그인
          </Link>
          <Link href="/reservation" onClick={() => setOpen(false)}>
            <Button className="w-full text-lg py-6">시작하기</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
