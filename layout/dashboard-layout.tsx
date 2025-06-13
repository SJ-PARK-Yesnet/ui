"use client"

import type React from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { useState, useEffect } from "react"
import Link from "next/link"
import { PackageIcon, HistoryIcon } from "@heroicons/react/24/outline"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="flex h-screen bg-[#f9f9f9]"></div>
  }

  return (
    <div className="flex h-screen bg-[#f9f9f9]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
