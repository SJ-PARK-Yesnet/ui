import { MoreVertical } from "lucide-react"

export function InsightsSection() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="px-3 py-1 bg-[#11171d] text-white text-xs font-medium rounded-full">Insights</div>
        <button className="text-[#929eb0]">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="flex space-x-4">
        <div className="w-20 h-16 bg-[#11171d] rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full"></div>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-medium">기업 운영에 가장 중요한 지표는 무엇일까요?</h3>
          <p className="text-xs text-[#929eb0] mt-1">February 20, 2025</p>
        </div>
      </div>
    </div>
  )
}
