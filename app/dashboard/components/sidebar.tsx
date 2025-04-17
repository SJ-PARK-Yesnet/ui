"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Home, Grid, Code2, Settings, CreditCard, HelpCircle, ChevronDown, ChevronUp, Star } from "lucide-react"

export function Sidebar() {
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(true)

  return (
    <div className="w-64 h-full flex flex-col border-r border-[#dbe3eb] bg-white">
      <div className="p-4 border-b border-[#dbe3eb]">
        <Link href="/dashboard" className="flex items-center">
          <div className="relative h-10 w-32">
            <Image
              src="/logo.png"
              alt="CODAI Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="py-2">
          <div className="px-4 py-1 text-xs text-[#929eb0]">Service 2</div>
          <nav className="mt-1">
            <Link href="#" className="flex items-center px-4 py-2 text-sm font-medium bg-[#eff6ff] text-[#0070ff]">
              <Home className="h-5 w-5 mr-3" />
              <span>Home</span>
            </Link>

            <div>
              <button 
                onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)} 
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-[#36404a] hover:bg-[#f3f6f8]"
              >
                <div className="flex items-center">
                  <Grid className="h-5 w-5 mr-3 text-[#929eb0]" />
                  <span>Workspace</span>
                </div>
                {isWorkspaceOpen ? (
                  <ChevronUp className="h-4 w-4 text-[#929eb0]" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#929eb0]" />
                )}
              </button>
              
              {isWorkspaceOpen && (
                <div className="pl-11">
                  <Link href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#36404a] hover:bg-[#f3f6f8]">
                    <span>입력하기</span>
                  </Link>
                  <Link href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#36404a] hover:bg-[#f3f6f8]">
                    <span>재고현황</span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#36404a]">
              <Code2 className="h-5 w-5 mr-3 text-[#929eb0]" />
              <span>API Management</span>
            </Link>
          </nav>
        </div>

        <div className="py-2">
          <div className="px-4 py-1 text-xs text-[#929eb0]">Account 2</div>
          <nav className="mt-1">
            <Link href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#36404a]">
              <Settings className="h-5 w-5 mr-3 text-[#929eb0]" />
              <span>Setting</span>
            </Link>

            <Link href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#36404a]">
              <CreditCard className="h-5 w-5 mr-3 text-[#929eb0]" />
              <span>User Plan</span>
            </Link>
          </nav>
        </div>

        <div className="py-2">
          <div className="px-4 py-1 text-xs text-[#929eb0]">Other 1</div>
          <nav className="mt-1">
            <Link href="#" className="flex items-center px-4 py-2 text-sm font-medium text-[#36404a]">
              <HelpCircle className="h-5 w-5 mr-3 text-[#929eb0]" />
              <span>Help & Supports</span>
            </Link>
          </nav>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-[#11171d] rounded-lg p-4 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Need Upgrade?</h3>
              <p className="text-xs mt-1 text-[#9fa9b0]">
                Special Plan으로
                <br />
                더욱 다양하게 활용해보세요!
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-full p-1">
              <Star className="h-5 w-5" />
            </div>
          </div>

          <button className="w-full mt-4 py-2 bg-gradient-to-r from-[#222b34] to-[#36404a] rounded text-sm font-medium">
            Upgrade Now
          </button>

          <button className="w-full mt-2 py-2 border border-[#4c555e] rounded text-sm font-medium">Learn more</button>
        </div>
      </div>
    </div>
  )
}
