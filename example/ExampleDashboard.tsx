import { useState } from "react";

function HeroSection() {
  return (
    <div className="relative rounded-xl overflow-hidden h-72 mb-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          filter: "brightness(0.7)",
        }}
      ></div>
      <div className="relative z-10 p-8 h-full flex flex-col justify-center">
        <p className="text-white text-opacity-80 text-lg">Welcome back,</p>
        <h1 className="text-white text-4xl font-bold mt-2 uppercase">사용자</h1>
        <p className="text-white text-opacity-90 mt-6 max-w-xl">
          디지털 전환을 꿈꾸는 모든 기업을 위한 혁신적인 AI 솔루션,<br />
          CoDAI를 통해 디지털 전환을 경험하세요!
        </p>
        <button className="mt-6 px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:bg-opacity-10 transition-colors w-32">
          Start Now
        </button>
      </div>
    </div>
  );
}

function PlanSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-2">요금제 정보</h2>
      <p className="text-gray-600">Free Plan (샘플)</p>
    </div>
  );
}

function ProductsSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-2">품목 현황</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>상품A - 10개</li>
        <li>상품B - 5개</li>
      </ul>
    </div>
  );
}

function CalendarSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-2">캘린더</h2>
      <p className="text-gray-600">2024년 6월 (샘플)</p>
    </div>
  );
}

function PaymentSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-2">결제 내역</h2>
      <p className="text-gray-600">최근 결제: 2024-06-01 (샘플)</p>
    </div>
  );
}

function InsightsSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-2">인사이트</h2>
      <p className="text-gray-600">AI 추천: 재고를 확인하세요! (샘플)</p>
    </div>
  );
}

export default function ExampleDashboard() {
  return (
    <div className="space-y-6 p-8 bg-[#f8f9fa] min-h-screen">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanSection />
        <ProductsSection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CalendarSection />
        <div className="grid grid-cols-1 gap-6">
          <PaymentSection />
          <InsightsSection />
        </div>
      </div>
    </div>
  );
} 