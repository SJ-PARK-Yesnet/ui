import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Clock, ArrowRight, FileText, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">유용한 정보</h1>
            <p className="mt-4 text-lg text-gray-600">
              CODAI를 최대한 활용하는 데 도움이 되는 블로그 포스트, 튜토리얼, 문서 및 리소스를 찾아보세요
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 md:w-auto">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="blog">블로그</TabsTrigger>
                <TabsTrigger value="tutorials">튜토리얼</TabsTrigger>
                <TabsTrigger value="docs">문서</TabsTrigger>
                <TabsTrigger value="webinars">웨비나</TabsTrigger>
              </TabsList>
              <div className="mt-8">
                <TabsContent value="all">
                  <FeaturedResource />
                  <div className="mt-12">
                    <h2 className="mb-6 text-2xl font-bold">최신 블로그 포스트</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {blogPosts.slice(0, 3).map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <Button variant="outline" asChild>
                        <Link href="#" className="inline-flex items-center">
                          모든 블로그 포스트 보기
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-16">
                    <h2 className="mb-6 text-2xl font-bold">인기 튜토리얼</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {tutorials.slice(0, 3).map((tutorial) => (
                        <TutorialCard key={tutorial.id} tutorial={tutorial} />
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <Button variant="outline" asChild>
                        <Link href="#" className="inline-flex items-center">
                          모든 튜토리얼 보기
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="blog">
                  <h2 className="mb-6 text-2xl font-bold">블로그 포스트</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="tutorials">
                  <h2 className="mb-6 text-2xl font-bold">튜토리얼</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tutorials.map((tutorial) => (
                      <TutorialCard key={tutorial.id} tutorial={tutorial} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="docs">
                  <h2 className="mb-6 text-2xl font-bold">문서</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {docs.map((doc) => (
                      <DocCard key={doc.id} doc={doc} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="webinars">
                  <h2 className="mb-6 text-2xl font-bold">웨비나</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {webinars.map((webinar) => (
                      <WebinarCard key={webinar.id} webinar={webinar} />
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">뉴스레터 구독하기</h2>
              <p className="mt-4 text-lg text-gray-600">최신 블로그 포스트, 튜토리얼 및 CODAI 업데이트를 받아보세요</p>
            </div>
            <div className="mx-auto mt-8 max-w-md">
              <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">구독하기</Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl bg-black p-8 text-center text-white md:p-12">
              <h2 className="text-3xl font-bold md:text-4xl">도움이 필요하신가요?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                기술적인 질문이 있거나 CODAI 사용에 도움이 필요하시면 저희 지원팀에 문의하세요.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  지원팀 문의하기
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FeaturedResource() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center md:order-1">
          <Badge className="mb-4 w-fit">추천 리소스</Badge>
          <h2 className="text-2xl font-bold md:text-3xl">CODAI API 완벽 가이드</h2>
          <p className="mt-4 text-gray-600">
            이 종합 가이드에서는 CODAI API를 사용하여 데이터를 연결하고, 분석하고, 인사이트를 도출하는 방법을 단계별로
            안내합니다. 초보자부터 전문가까지 모든 수준의 개발자에게 유용한 정보를 제공합니다.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="#" className="inline-flex items-center">
                가이드 읽기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/placeholder.svg?height=300&width=500"
            width={500}
            height={300}
            alt="CODAI API 가이드"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          width={500}
          height={300}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </span>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href="#">자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video overflow-hidden bg-gray-100 p-4">
        <div className="flex h-full items-center justify-center">
          <Video className="h-12 w-12 text-gray-400" />
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <Badge variant="outline">{tutorial.level}</Badge>
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {tutorial.duration}
          </span>
        </div>
        <CardTitle className="line-clamp-2">{tutorial.title}</CardTitle>
        <CardDescription className="line-clamp-2">{tutorial.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href="#">튜토리얼 시작하기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function DocCard({ doc }: { doc: Doc }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
          <FileText className="h-6 w-6 text-gray-500" />
        </div>
        <CardTitle>{doc.title}</CardTitle>
        <CardDescription className="line-clamp-2">{doc.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href="#">문서 읽기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function WebinarCard({ webinar }: { webinar: Webinar }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <Image
          src={webinar.image || "/placeholder.svg"}
          width={500}
          height={300}
          alt={webinar.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {webinar.date}
          </span>
          <Badge variant="outline">{webinar.status}</Badge>
        </div>
        <CardTitle className="line-clamp-2">{webinar.title}</CardTitle>
        <CardDescription className="line-clamp-2">{webinar.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href="#">{webinar.status === "예정됨" ? "등록하기" : "다시보기"}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// 데이터 타입 정의
type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
}

type Tutorial = {
  id: number
  title: string
  description: string
  level: string
  duration: string
}

type Doc = {
  id: number
  title: string
  description: string
  category: string
}

type Webinar = {
  id: number
  title: string
  description: string
  date: string
  status: string
  image: string
}

// 샘플 데이터
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "CODAI를 활용한 데이터 분석 효율성 향상 방법",
    excerpt: "CODAI의 강력한 기능을 활용하여 데이터 분석 워크플로우를 최적화하는 방법을 알아봅니다.",
    date: "2023-10-15",
    readTime: "5분",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "인공지능과 데이터 연결: 미래 비즈니스의 핵심 요소",
    excerpt: "데이터 연결과 인공지능이 어떻게 비즈니스 혁신을 주도하는지 살펴봅니다.",
    date: "2023-10-08",
    readTime: "7분",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "CODAI API를 활용한 실시간 데이터 처리 사례 연구",
    excerpt: "대규모 데이터를 실시간으로 처리하기 위해 CODAI API를 활용한 성공 사례를 소개합니다.",
    date: "2023-09-30",
    readTime: "10분",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "데이터 보안과 개인정보 보호: CODAI의 접근 방식",
    excerpt: "CODAI가 데이터 보안과 개인정보 보호를 위해 어떤 조치를 취하고 있는지 알아봅니다.",
    date: "2023-09-22",
    readTime: "6분",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "CODAI 시작하기: 기본 설정 및 첫 번째 프로젝트",
    description: "CODAI를 처음 사용하는 사용자를 위한 기본 설정 및 첫 번째 프로젝트 생성 방법을 안내합니다.",
    level: "초급",
    duration: "15분",
  },
  {
    id: 2,
    title: "CODAI API를 활용한 데이터 통합 구현",
    description: "다양한 데이터 소스를 CODAI API를 통해 통합하는 방법을 단계별로 안내합니다.",
    level: "중급",
    duration: "25분",
  },
  {
    id: 3,
    title: "고급 데이터 분석: CODAI의 AI 기능 활용",
    description: "CODAI의 인공지능 기능을 활용하여 고급 데이터 분석을 수행하는 방법을 배웁니다.",
    level: "고급",
    duration: "40분",
  },
  {
    id: 4,
    title: "CODAI 대시보드 맞춤 설정 및 최적화",
    description: "비즈니스 요구사항에 맞게 CODAI 대시보드를 맞춤 설정하고 최적화하는 방법을 알아봅니다.",
    level: "중급",
    duration: "20분",
  },
]

const docs: Doc[] = [
  {
    id: 1,
    title: "API 참조 문서",
    description: "CODAI API의 모든 엔드포인트, 매개변수 및 응답 형식에 대한 상세한 참조 문서입니다.",
    category: "API",
  },
  {
    id: 2,
    title: "SDK 문서",
    description: "다양한 프로그래밍 언어로 CODAI를 통합하기 위한 SDK 문서입니다.",
    category: "개발",
  },
  {
    id: 3,
    title: "보안 가이드라인",
    description: "CODAI를 안전하게 사용하기 위한 보안 모범 사례 및 가이드라인입니다.",
    category: "보안",
  },
  {
    id: 4,
    title: "데이터 모델링 가이드",
    description: "CODAI에서 효과적인 데이터 모델을 설계하기 위한 가이드입니다.",
    category: "데이터",
  },
  {
    id: 5,
    title: "통합 가이드",
    description: "CODAI를 기존 시스템과 통합하기 위한 단계별 가이드입니다.",
    category: "통합",
  },
  {
    id: 6,
    title: "문제 해결 및 FAQ",
    description: "자주 발생하는 문제와 해결 방법에 대한 문서입니다.",
    category: "지원",
  },
]

const webinars: Webinar[] = [
  {
    id: 1,
    title: "CODAI를 활용한 데이터 기반 의사결정",
    description: "데이터 기반 의사결정을 위해 CODAI를 활용하는 방법에 대한 웨비나입니다.",
    date: "2023-11-15",
    status: "예정됨",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "CODAI 신규 기능 소개: 2023년 4분기",
    description: "2023년 4분기에 출시된 CODAI의 신규 기능을 소개하는 웨비나입니다.",
    date: "2023-10-20",
    status: "완료됨",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "엔터프라이즈 환경에서의 CODAI 구축 사례",
    description: "대규모 엔터프라이즈 환경에서 CODAI를 성공적으로 구축한 사례를 공유합니다.",
    date: "2023-09-05",
    status: "완료됨",
    image: "/placeholder.svg?height=300&width=500",
  },
]
