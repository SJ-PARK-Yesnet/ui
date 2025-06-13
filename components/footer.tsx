import Link from "next/link"
import Image from "next/image"
import { Globe, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col justify-between">
            <div className="mb-4 md:mb-0">
              <Image src="/yesnet-logo.png" alt="CODAI Logo" width={180} height={40} className="h-10 w-auto" />
            </div>
            <div className="text-sm text-[#36404a] mt-auto">© 2025. Yesnet Corp. All Rights Reserved.</div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-2 text-right">
            <p className="text-sm text-[#222b34]">
              주소 경기도 안양시 동안구 벌말로 66, B동 904호 (평촌하이필드지식산업센터)
            </p>

            <div className="flex justify-end items-center gap-2 text-sm">
              <span className="text-[#222b34] font-medium">메일</span>
              <span className="text-[#36404a]">yesnet@yesneterp.com</span>

              <span className="text-[#222b34] font-medium ml-4">연락처</span>
              <span className="text-[#36404a]">070 8657 2080</span>
            </div>

            <div className="flex justify-end items-center gap-2 text-sm">
              <span className="text-[#222b34] font-medium">사업자등록번호</span>
              <span className="text-[#36404a]">581-88-03426</span>

              <span className="text-[#222b34] font-medium ml-4">통신판매업신고번호</span>
              <span className="text-[#36404a]">2025-안양동안-0026</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-100">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="text-sm text-[#222b34] hover:text-blue-500">
              이용약관
            </Link>
            <Link href="#" className="text-sm text-[#222b34] hover:text-blue-500">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-sm text-[#222b34] hover:text-blue-500">
              환불규정
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="https://yesneterp.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <Globe className="w-5 h-5 text-[#222b34] hover:text-blue-500" />
            </Link>
            <Link href="https://blog.naver.com/yesneterp" target="_blank" rel="noopener noreferrer" aria-label="Blog">
              <div className="w-5 h-5 bg-[#222b34] rounded flex items-center justify-center text-white text-xs font-bold hover:bg-blue-500">
                B
              </div>
            </Link>
            <Link href="https://www.youtube.com/@erp" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-[#222b34] hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
