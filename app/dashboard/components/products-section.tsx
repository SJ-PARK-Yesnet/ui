import { Download, MoreVertical } from "lucide-react"

export function ProductsSection() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#11171d]">My Products</h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-[#929eb0]">
              <th className="text-left font-medium pb-2">코드</th>
              <th className="text-left font-medium pb-2">파일명</th>
              <th className="text-left font-medium pb-2">정확도</th>
              <th className="text-left font-medium pb-2">관리</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#ecf0f5]">
              <td className="py-3 text-sm">#100519</td>
              <td className="py-3 text-sm">Dashboard screenshot54315648_202514</td>
              <td className="py-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-[#0070ff]">100%</span>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center space-x-2">
                  <button className="text-[#929eb0]">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="text-[#929eb0]">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-[#ecf0f5]">
              <td className="py-3 text-sm">#526659</td>
              <td className="py-3 text-sm">Tech requirements846529</td>
              <td className="py-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-[#0070ff]">100%</span>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center space-x-2">
                  <button className="text-[#929eb0]">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="text-[#929eb0]">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-[#ecf0f5]">
              <td className="py-3 text-sm">#526659</td>
              <td className="py-3 text-sm">Tech requirements846529</td>
              <td className="py-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-[#0070ff]">98.9%</span>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center space-x-2">
                  <button className="text-[#929eb0]">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="text-[#929eb0]">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-right">
        <button className="text-sm text-[#0070ff]">See all</button>
      </div>
    </div>
  )
}
