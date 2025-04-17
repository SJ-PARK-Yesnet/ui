export function PaymentSection() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Payment methods</h2>
        <button className="text-sm text-[#0070ff]">편집</button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-8 bg-gradient-to-r from-[#222b34] to-[#36404a] rounded-md flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#ff5e5e] opacity-80"></div>
        </div>

        <div>
          <p className="text-sm font-medium">Mastercard: 5432</p>
          <p className="text-xs text-[#929eb0]">Exp. date: 12/20</p>
        </div>
      </div>
    </div>
  )
}
