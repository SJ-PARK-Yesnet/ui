import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Sign Up Form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-20">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <Link href="/" className="relative h-14 w-64">
              <Image
                src="/logo.png"
                alt="CODAI Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 256px, 192px"
              />
            </Link>
          </div>

          {/* Welcome Text */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-[#000000]">
              회원가입<span className="text-[#0066FF]">.</span>
            </h1>
            <p className="mt-2 text-[#a0aec0]">CODAI의 새로운 회원이 되어주세요</p>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#292c33]">
                이메일
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="h-12 w-full rounded border border-[#c1c8d2] px-3 py-2 focus:border-[#96bfff] focus:outline-none focus:ring-1 focus:ring-[#96bfff]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-[#292c33]">
                비밀번호
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-12 w-full rounded border border-[#c1c8d2] px-3 py-2 focus:border-[#96bfff] focus:outline-none focus:ring-1 focus:ring-[#96bfff]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#292c33]">
                비밀번호 확인
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="h-12 w-full rounded border border-[#c1c8d2] px-3 py-2 focus:border-[#96bfff] focus:outline-none focus:ring-1 focus:ring-[#96bfff]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="h-5 w-5 rounded border-[#c1c8d2]" />
              <label htmlFor="terms" className="text-sm text-[#4c555e]">
                <span>이용약관 및 </span>
                <Link href="#" className="text-[#0066FF] hover:underline">
                  개인정보처리방침
                </Link>
                <span>에 동의합니다</span>
              </label>
            </div>

            <Button type="submit" className="h-12 w-full rounded bg-[#4c555e] text-white hover:bg-[#292c33]">
              회원가입
            </Button>

            <div className="text-center">
              <p className="text-sm text-[#4c555e]">
                이미 계정이 있으신가요?{" "}
                <Link href="/login" className="font-medium text-[#0066FF] hover:underline">
                  로그인
                </Link>
              </p>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-12 text-center text-xs text-[#a0aec0]">
            <p>© 2025, Yesnet Corp. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* Right side - Image with Text Overlay */}
      <div className="relative hidden flex-1 md:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)]"></div>
        <Image src="/placeholder.svg?height=900&width=800" alt="City skyline" fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-white">
          <div className="max-w-lg text-center">
            <h2 className="mb-4 text-5xl font-bold">Welcome CoDAi</h2>
            <p className="mb-12 text-xl">
              Connect Data For Artificial Intelligence
              <br />
              Provide Innovation
            </p>
            <p className="text-center">
              지금 바로 CODAI의 새로운 회원이 되어
              <br />
              혁신적인 데이터 솔루션을 경험해보세요
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 