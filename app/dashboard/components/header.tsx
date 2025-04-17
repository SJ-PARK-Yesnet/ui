"use client"

import { useState } from "react"
import { Search, Bell, RefreshCcw, Volume2, ChevronDown, User, Settings, LogOut } from "lucide-react"

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="h-16 border-b border-[#dbe3eb] bg-white px-4 flex items-center justify-between relative z-10">
      <div className="w-1/3"></div>

      <div className="w-1/3 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-4 pr-10 rounded-lg border border-[#dbe3eb] focus:outline-none focus:ring-1 focus:ring-[#0070ff]"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#929eb0]">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="w-1/3 flex justify-end items-center space-x-4">
        <button className="text-[#929eb0] hover:text-[#0070ff]">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-[#929eb0] hover:text-[#0070ff]">
          <RefreshCcw className="h-5 w-5" />
        </button>
        <button className="text-[#929eb0] hover:text-[#0070ff]">
          <Volume2 className="h-5 w-5" />
        </button>

        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center ml-4 hover:bg-[#f3f6f8] p-2 rounded-lg"
          >
            <div className="h-8 w-8 bg-[#deedff] rounded-full flex items-center justify-center text-[#0070ff]">Y</div>
            <div className="ml-2">
              <div className="text-sm font-bold">YESNET CODAI</div>
              <div className="text-xs text-[#929eb0]">@Flores1123</div>
            </div>
            <ChevronDown className="h-4 w-4 ml-2 text-[#929eb0]" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-[#dbe3eb] py-2 z-50">
              <div className="px-4 py-2 border-b border-[#dbe3eb]">
                <div className="text-sm font-bold">YESNET CODAI</div>
                <div className="text-xs text-[#929eb0]">@Flores1123</div>
              </div>
              
              <button className="w-full flex items-center px-4 py-2 text-sm text-[#36404a] hover:bg-[#f3f6f8]">
                <User className="h-4 w-4 mr-3 text-[#929eb0]" />
                <span>프로필</span>
              </button>
              
              <button className="w-full flex items-center px-4 py-2 text-sm text-[#36404a] hover:bg-[#f3f6f8]">
                <Settings className="h-4 w-4 mr-3 text-[#929eb0]" />
                <span>설정</span>
              </button>
              
              <div className="border-t border-[#dbe3eb] my-2"></div>
              
              <button className="w-full flex items-center px-4 py-2 text-sm text-red-500 hover:bg-[#f3f6f8]">
                <LogOut className="h-4 w-4 mr-3" />
                <span>로그아웃</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
