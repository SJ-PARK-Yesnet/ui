import { Header } from "../components/header";
import Footer from "../components/footer";
import { Card } from "../components/card";
import { Button } from "../components/button";

export default function ExampleLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <header className="w-full py-6 px-8 flex items-center justify-between bg-white shadow">
        <img src="/logo.png" alt="CODAI Logo" className="h-10" />
        <nav className="space-x-6">
          <a href="#features" className="text-[#4c555e] hover:text-[#1976d2] font-medium">특장점</a>
          <a href="#pricing" className="text-[#4c555e] hover:text-[#1976d2] font-medium">요금제</a>
          <a href="#contact" className="text-[#4c555e] hover:text-[#1976d2] font-medium">문의</a>
        </nav>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#19212f] mt-16 mb-6">혁신적인 AI ERP, <span className="text-[#1976d2]">CoDAI</span></h1>
        <p className="text-lg md:text-xl text-[#7d8398] mb-8 max-w-2xl">
          디지털 전환을 꿈꾸는 모든 기업을 위한 올인원 ERP 솔루션.<br />
          쉽고 빠르게, 누구나 사용할 수 있는 AI 기반 업무 자동화 플랫폼을 경험하세요.
        </p>
        <a href="#start" className="inline-block px-8 py-3 bg-[#1976d2] text-white rounded-full font-semibold text-lg shadow hover:bg-[#145ea8] transition">무료로 시작하기</a>
      </main>
      <footer className="w-full py-6 px-8 bg-white text-center text-[#89a0b0] text-sm mt-12">
        © 2024 Yesnet Corp. All Rights Reserved.
      </footer>
    </div>
  );
} 