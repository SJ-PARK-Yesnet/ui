export function HeroSection() {
  return (
    <div className="relative rounded-xl overflow-hidden h-72">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          filter: "brightness(0.7)",
        }}
      ></div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-center">
        <p className="text-white text-opacity-80 text-lg">Welcome back,</p>
        <h1 className="text-white text-4xl font-bold mt-2">CHAE YOUNG</h1>

        <p className="text-white text-opacity-90 mt-6 max-w-xl">
          디지털 전환을 꿈꾸는 모든 기업을 위한 혁신적인 AI 솔루션,
          <br />
          CoDAI를 통해 디지털 전환을 경험하세요!
        </p>

        <button className="mt-6 px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:bg-opacity-10 transition-colors w-32">
          Start Now
        </button>
      </div>
    </div>
  )
}
