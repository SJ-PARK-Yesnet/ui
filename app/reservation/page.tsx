"use client"

import type React from "react"

import { useState } from "react"
import { Check, ArrowRight, Clock, Gift, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function ReservationPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 구현에서는 여기에 폼 데이터를 서버로 전송하는 코드가 들어갑니다
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "사전예약이 완료되었습니다",
        description: "CODAI 출시 소식을 이메일로 알려드리겠습니다.",
      })
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  CODAI 사전예약으로
                  <br />
                  <span className="text-blue-600">특별한 혜택</span>을 받으세요
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  디지털 전환 시대를 위한 혁신적인 솔루션, CODAI가 곧 출시됩니다. 지금 사전예약하고 출시 즉시 특별
                  혜택과 함께 서비스를 이용해보세요.
                </p>
                <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    지금 사전예약하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    서비스 소개 보기
                  </Button>
                </div>
                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">출시 예정: 2023년 12월</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">무료 체험 14일</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-100"></div>
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-blue-50"></div>
                <div className="relative rounded-xl bg-white p-6 shadow-lg md:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black">
                        <span className="text-xl font-bold text-white">C</span>
                      </div>
                      <span className="text-xl font-bold">CODAI</span>
                    </div>
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                      사전예약 진행중
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {["일", "시간", "분", "초"].map((unit, i) => (
                        <div key={i} className="flex flex-col">
                          <div className="rounded-md bg-gray-100 p-3">
                            <span className="text-2xl font-bold">
                              {i === 0 ? "30" : i === 1 ? "12" : i === 2 ? "45" : "20"}
                            </span>
                          </div>
                          <span className="mt-1 text-xs text-gray-500">{unit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-sm text-gray-500">사전예약 마감까지 남은 시간</p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">프로 요금제 30일 무료 이용</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">우선 접근 권한</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">전용 온보딩 세션</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">사전예약 혜택</h2>
              <p className="mt-4 text-lg text-gray-600">CODAI 사전예약을 통해 다양한 특별 혜택을 받아보세요</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                    <Gift className="h-6 w-6" />
                  </div>
                  <CardTitle>프로 요금제 30일 무료</CardTitle>
                  <CardDescription>
                    사전예약 고객에게는 프로 요금제를 30일 동안 무료로 제공합니다. 모든 고급 기능을 제한 없이 사용해
                    보세요.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>우선 접근 권한</CardTitle>
                  <CardDescription>
                    CODAI가 정식 출시되기 전에 먼저 서비스를 이용할 수 있는 우선 접근 권한을 제공합니다.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>전용 온보딩 세션</CardTitle>
                  <CardDescription>
                    CODAI 전문가와 함께하는 1:1 온보딩 세션을 통해 서비스를 빠르게 시작할 수 있도록 도와드립니다.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="reservation-form" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold md:text-3xl">CODAI 사전예약하기</h2>
                <p className="mt-2 text-gray-600">
                  아래 양식을 작성하여 CODAI 사전예약을 완료하세요. 출시 소식을 가장 먼저 알려드립니다.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름</Label>
                      <Input id="name" placeholder="홍길동" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">회사/조직</Label>
                      <Input id="company" placeholder="회사 또는 조직명" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">직책</Label>
                      <Input id="position" placeholder="직책" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>관심 분야</Label>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-1" />
                        <label htmlFor="interest-1" className="text-sm">
                          데이터 분석 및 시각화
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-2" />
                        <label htmlFor="interest-2" className="text-sm">
                          인공지능 및 머신러닝
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-3" />
                        <label htmlFor="interest-3" className="text-sm">
                          API 통합 및 관리
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-4" />
                        <label htmlFor="interest-4" className="text-sm">
                          데이터 보안 및 규정 준수
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>사용 목적</Label>
                    <RadioGroup defaultValue="business">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="purpose-1" />
                        <Label htmlFor="purpose-1">비즈니스 용도</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="personal" id="purpose-2" />
                        <Label htmlFor="purpose-2">개인 용도</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="education" id="purpose-3" />
                        <Label htmlFor="purpose-3">교육 및 연구</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        이용약관 및 개인정보처리방침에 동의합니다
                      </label>
                      <p className="text-sm text-gray-500">
                        CODAI의 이용약관 및 개인정보처리방침을 읽고 이에 동의합니다.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="marketing" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="marketing"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        마케팅 정보 수신에 동의합니다
                      </label>
                      <p className="text-sm text-gray-500">
                        CODAI의 최신 소식, 이벤트 및 프로모션 정보를 이메일로 받아보겠습니다.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? "처리 중..." : "사전예약 완료하기"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">자주 묻는 질문</h2>
              <p className="mt-4 text-lg text-gray-600">CODAI 사전예약에 대한 궁금증을 해결해 드립니다</p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl space-y-6">
              <FaqItem
                question="사전예약은 언제까지 가능한가요?"
                answer="사전예약은 2023년 11월 30일까지 진행됩니다. 사전예약 기간이 종료된 후에는 일반 가입만 가능하며, 사전예약 특별 혜택은 제공되지 않습니다."
              />
              <FaqItem
                question="사전예약 후 언제부터 서비스를 이용할 수 있나요?"
                answer="CODAI는 2023년 12월 중 정식 출시 예정입니다. 사전예약 고객에게는 출시 전 우선 접근 권한을 제공하며, 정확한 일정은 이메일로 안내해 드립니다."
              />
              <FaqItem
                question="사전예약 혜택은 어떻게 받을 수 있나요?"
                answer="사전예약을 완료하신 이메일로 서비스 출시 시 혜택 이용 방법에 대한 안내를 보내드립니다. 이메일에 포함된 특별 코드를 통해 프로 요금제 30일 무료 이용 및 기타 혜택을 받으실 수 있습니다."
              />
              <FaqItem
                question="사전예약 후 취소할 수 있나요?"
                answer="네, 사전예약은 언제든지 취소 가능합니다. 취소를 원하시면 support@codai.com으로 이메일을 보내주시기 바랍니다."
              />
              <FaqItem
                question="무료 체험 기간 이후에는 어떻게 되나요?"
                answer="무료 체험 기간이 종료된 후에는 자동으로 유료 구독으로 전환되지 않습니다. 계속해서 서비스를 이용하시려면 원하는 요금제를 선택하여 결제하시면 됩니다."
              />
            </div>
          </div>
        </section>

        <section className="bg-black py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">지금 바로 사전예약하세요</h2>
              <p className="mt-4 text-lg text-gray-300">
                CODAI와 함께 디지털 혁신의 여정을 시작하세요. 사전예약 기간 동안만 제공되는 특별 혜택을 놓치지 마세요.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-white px-8 py-6 text-lg font-medium text-black hover:bg-gray-100"
                  onClick={() => document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  사전예약하기
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h3 className="text-lg font-medium">{question}</h3>
      <p className="mt-2 text-gray-600">{answer}</p>
    </div>
  )
}
