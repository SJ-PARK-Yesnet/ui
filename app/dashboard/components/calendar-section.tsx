import { ChevronLeft, ChevronRight } from "lucide-react"

export function CalendarSection() {
  // Days of the week in Korean
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"]

  // Generate calendar days for July 2025
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <button className="text-[#929eb0]">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-bold">July 2025</h2>
        <button className="text-[#929eb0]">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-xs text-[#929eb0] font-medium py-1">
            {day}
          </div>
        ))}

        {/* Empty cells for days before July 1, 2025 (assuming July 1 is a Tuesday) */}
        <div></div>
        <div></div>

        {days.map((day) => (
          <div
            key={day}
            className={`
              text-sm py-1 rounded-full w-8 h-8 mx-auto flex items-center justify-center
              ${day === 17 ? "bg-[#0070ff] text-white" : "text-[#36404a] hover:bg-[#f3f6f8]"}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}
