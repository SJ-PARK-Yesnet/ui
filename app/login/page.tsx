import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Instagram, Globe, MessageCircle, Youtube } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Login Form */}
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
              Welcome<span className="text-[#0066FF]">.</span>
            </h1>
            <p className="mt-2 text-[#a0aec0]">Connect Data For Artificial Intelligence, Provide Innovation</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="id" className="block text-sm font-medium text-[#292c33]">
                아이디
              </label>
              <Input
                id="id"
                type="text"
                placeholder="ID"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="h-5 w-5 rounded border-[#c1c8d2]" />
                <label htmlFor="remember" className="text-sm text-[#4c555e]">
                  자동 로그인
                </label>
              </div>
              <div>
                <Link href="#" className="text-sm text-[#4c555e] hover:text-[#0066FF]">
                  아이디/비밀번호 찾기
                </Link>
              </div>
            </div>

            <Button type="submit" className="h-12 w-full rounded bg-[#4c555e] text-white hover:bg-[#292c33]">
              로그인
            </Button>

            <div className="text-center">
              <p className="text-sm text-[#4c555e]">
                계정이 없으신가요?{" "}
                <Link href="/signup" className="font-medium text-[#0066FF] hover:underline">
                  회원가입
                </Link>
              </p>
            </div>
          </form>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center space-x-6">
            <Link href="#" className="text-[#a0aec0] hover:text-[#0066FF]">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-[#a0aec0] hover:text-[#0066FF]">
              <Globe size={20} />
            </Link>
            <Link href="#" className="text-[#a0aec0] hover:text-[#0066FF]">
              <MessageCircle size={20} />
            </Link>
            <Link href="#" className="text-[#a0aec0] hover:text-[#0066FF]">
              <Youtube size={20} />
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-xs text-[#a0aec0]">
            <p>© 2025, Yesnet Corp. All Rights Reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="#" className="hover:text-[#0066FF]">
                회사정보
              </Link>
              <Link href="#" className="hover:text-[#0066FF]">
                이용약관
              </Link>
              <Link href="#" className="hover:text-[#0066FF]">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-[#0066FF]">
                환불규정
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image with Text Overlay */}
      <div className="relative flex-1">
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

            <h3 className="mb-4 text-4xl font-bold">CoDAi Solution</h3>
            <p className="mb-6 text-center">
              CoDAi is Yesnet's proprietary solution that leads the digital transformation
              <br />
              era with innovative technology and differentiated services
            </p>
            <p className="text-center">
              Easily accessible to anyone, regardless of location
              <br />
              whether at the office, home, or elsewhere
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 