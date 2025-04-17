import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">가격 정책</h1>
            <p className="mt-6 text-lg text-gray-600">비즈니스 규모와 요구사항에 맞는 최적의 요금제를 선택하세요</p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <Tabs defaultValue="monthly" className="mx-auto max-w-5xl">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">월간 결제</TabsTrigger>
                <TabsTrigger value="annually">연간 결제 (20% 할인)</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <PricingCard
                    title="스타터"
                    price="99,000"
                    description="소규모 팀과 개인을 위한 기본 기능"
                    features={["월 5,000 API 호출", "기본 데이터 분석", "5GB 스토리지", "이메일 지원", "2명의 팀원"]}
                    buttonText="무료 체험 시작하기"
                    buttonVariant="outline"
                  />
                  <PricingCard
                    title="프로"
                    price="299,000"
                    description="성장하는 비즈니스를 위한 고급 기능"
                    features={[
                      "월 50,000 API 호출",
                      "고급 데이터 분석",
                      "50GB 스토리지",
                      "우선 지원",
                      "10명의 팀원",
                      "고급 보안 기능",
                      "커스텀 통합",
                    ]}
                    buttonText="프로 시작하기"
                    buttonVariant="default"
                    popular
                  />
                  <PricingCard
                    title="엔터프라이즈"
                    price="문의"
                    description="대규모 조직을 위한 맞춤형 솔루션"
                    features={[
                      "무제한 API 호출",
                      "엔터프라이즈급 분석",
                      "무제한 스토리지",
                      "24/7 전담 지원",
                      "무제한 팀원",
                      "고급 보안 및 규정 준수",
                      "맞춤형 개발",
                      "전용 계정 관리자",
                    ]}
                    buttonText="영업팀 문의하기"
                    buttonVariant="outline"
                  />
                </div>
              </TabsContent>
              <TabsContent value="annually">
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <PricingCard
                    title="스타터"
                    price="79,000"
                    period="월"
                    description="소규모 팀과 개인을 위한 기본 기능"
                    features={["월 5,000 API 호출", "기본 데이터 분석", "5GB 스토리지", "이메일 지원", "2명의 팀원"]}
                    buttonText="무료 체험 시작하기"
                    buttonVariant="outline"
                  />
                  <PricingCard
                    title="프로"
                    price="239,000"
                    period="월"
                    description="성장하는 비즈니스를 위한 고급 기능"
                    features={[
                      "월 50,000 API 호출",
                      "고급 데이터 분석",
                      "50GB 스토리지",
                      "우선 지원",
                      "10명의 팀원",
                      "고급 보안 기능",
                      "커스텀 통합",
                    ]}
                    buttonText="프로 시작하기"
                    buttonVariant="default"
                    popular
                  />
                  <PricingCard
                    title="엔터프라이즈"
                    price="문의"
                    description="대규모 조직을 위한 맞춤형 솔루션"
                    features={[
                      "무제한 API 호출",
                      "엔터프라이즈급 분석",
                      "무제한 스토리지",
                      "24/7 전담 지원",
                      "무제한 팀원",
                      "고급 보안 및 규정 준수",
                      "맞춤형 개발",
                      "전용 계정 관리자",
                    ]}
                    buttonText="영업팀 문의하기"
                    buttonVariant="outline"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">자주 묻는 질문</h2>
              <p className="mt-4 text-lg text-gray-600">CODAI 서비스에 대한 궁금증을 해결해 드립니다</p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl space-y-6">
              <FaqItem
                question="무료 체험 기간은 얼마나 되나요?"
                answer="모든 요금제는 14일 무료 체험 기간을 제공합니다. 이 기간 동안 모든 기능을 제한 없이 사용해 볼 수 있으며, 만족하지 않으시면 언제든지 해지할 수 있습니다."
              />
              <FaqItem
                question="요금제를 언제든지 변경할 수 있나요?"
                answer="네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 업그레이드 시 즉시 반영되며, 다운그레이드는 현재 결제 주기가 끝난 후 적용됩니다."
              />
              <FaqItem
                question="API 호출 제한을 초과하면 어떻게 되나요?"
                answer="API 호출 제한을 초과하면 추가 요금이 발생합니다. 초과 사용량에 대한 요금은 대시보드에서 확인할 수 있으며, 사용량이 급증할 것으로 예상되는 경우 미리 영업팀에 문의하시면 맞춤형 요금제를 제안해 드립니다."
              />
              <FaqItem
                question="결제 방법은 어떤 것이 있나요?"
                answer="신용카드, 계좌이체, 그리고 기업의 경우 세금계산서 발행을 통한 결제가 가능합니다. 모든 결제는 안전한 결제 시스템을 통해 처리됩니다."
              />
              <FaqItem
                question="환불 정책은 어떻게 되나요?"
                answer="구독 시작 후 14일 이내에 요청하시면 전액 환불이 가능합니다. 14일 이후에는 남은 기간에 대한 환불이 불가능하며, 현재 구독 기간이 끝날 때까지 서비스를 이용하실 수 있습니다."
              />
              <FaqItem
                question="기술 지원은 어떻게 받을 수 있나요?"
                answer="모든 요금제는 이메일 지원을 제공하며, 프로 및 엔터프라이즈 요금제는 우선 지원 및 전화 지원을 포함합니다. 엔터프라이즈 고객은 전담 계정 관리자가 배정됩니다."
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl bg-black p-8 text-center text-white md:p-12">
              <h2 className="text-3xl font-bold md:text-4xl">맞춤형 솔루션이 필요하신가요?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                특별한 요구사항이 있으시거나 대규모 구축이 필요하신 경우, 저희 전문가 팀이 최적의 솔루션을 제안해
                드립니다.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  상담 예약하기
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function PricingCard({
  title,
  price,
  period = "월",
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
}: {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  popular?: boolean
}) {
  return (
    <Card className={`flex flex-col ${popular ? "border-black ring-2 ring-black" : ""}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
          추천
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "문의" && <span className="ml-1 text-gray-500">원/{period}</span>}
        </div>
        <CardDescription className="mt-4">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 px-6">
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="mr-3 h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
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
