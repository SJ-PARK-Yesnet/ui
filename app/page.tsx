import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col space-y-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                이카운트 연동 재고관리
                <br />
                스마트 솔루션
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-gray-600">Connect Data</p>
                <p className="text-xl text-gray-600">
                  For Inventory Management, Provide Innovation <span className="font-bold">CODAI</span>
                </p>
              </div>
              <div>
                <Link href="/reservation">
                  <Button className="rounded-md bg-blue-500 px-8 py-6 text-lg font-medium text-white hover:bg-blue-600">
                    <span className="mr-2">Start Now!</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-2xl pt-8 lg:pt-0">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="CODAI 플랫폼 데모"
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}