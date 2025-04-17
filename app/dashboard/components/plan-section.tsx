import { Award } from "lucide-react"

export function PlanSection() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-[#11171d]">Regular Plan</h2>
          <p className="text-sm text-[#929eb0] mt-1">Codelist 3 / 1 Day 1000 / 1 Month 10,000</p>
        </div>
        <div className="text-[#0070ff]">
          <Award className="h-12 w-12" />
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold">YESNET CODAI</h3>
        <p className="text-sm text-[#929eb0] mt-1">@Flores1123</p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-[#929eb0]">Projects</p>
          <p className="text-2xl font-bold mt-1">12</p>
        </div>
        <div>
          <p className="text-sm text-[#929eb0]">Codelist</p>
          <p className="text-2xl font-bold mt-1">8</p>
        </div>
        <div>
          <p className="text-sm text-[#929eb0]">
            Line<span className="text-xs">(count)</span>
          </p>
          <p className="text-2xl font-bold mt-1">3,582</p>
        </div>
      </div>
    </div>
  )
}
