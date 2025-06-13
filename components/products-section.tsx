import { Download, MoreVertical, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth" // 경로 수정 가능성 있음
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

// stock-history/page.tsx 와 유사한 인터페이스 정의
interface Partner {
  name: string
}

interface Warehouse {
  name: string
}

interface Product {
  code: string
  name: string
}

interface StockInResponse {
  id: number
  date: string
  quantity: number
  partnerId: number
  warehouseId: number
  productId: number
  partners: { name: string }
  warehouses: { name: string }
  products: { code: string, name: string }
}

interface StockOutResponse {
  id: number
  date: string
  quantity: number
  partnerId: number
  warehouseId: number
  productId: number
  partners: { name: string }
  warehouses: { name: string }
  products: { code: string, name: string }
}

interface StockHistoryDisplay {
  id: string // 고유 ID (type-id)
  date: string
  type: '입고' | '출고'
  partnerName: string
  // warehouseName: string; // 필요하다면 추가
  productName: string
  quantity: number
}

export function ProductsSection() {
  const { user } = useAuth()
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [recentStockHistories, setRecentStockHistories] = useState<StockHistoryDisplay[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRecentStockHistories = async () => {
      if (!user?.id) return

      try {
        setIsLoading(true)

        const { data: stockIns, error: stockInsError } = await supabase
          .from('stock_ins')
          .select(`
            id,
            date,
            quantity,
            partnerId,
            warehouseId,
            productId,
            partner:partners (
              name
            ),
            warehouse:warehouses (
              name
            ),
            product:products (
              code,
              name
            )
          `)
          .eq('createdbyid', user.id)
          .order('date', { ascending: false })
          .limit(3)

        if (stockInsError) {
          console.error('StockIns Fetch Error in ProductsSection:', stockInsError);
          throw stockInsError;
        }
        console.log('Raw StockIns Data in ProductsSection:', stockIns); // 데이터 구조 확인을 위한 로깅

        const { data: stockOuts, error: stockOutsError } = await supabase
          .from('stock_outs')
          .select(`
            id,
            date,
            quantity,
            partnerId,
            warehouseId,
            productId,
            partner:partners (
              name
            ),
            warehouse:warehouses (
              name
            ),
            product:products (
              code,
              name
            )
          `)
          .eq('createdbyid', user.id)
          .order('date', { ascending: false })
          .limit(3)

        if (stockOutsError) {
          console.error('StockOuts Fetch Error in ProductsSection:', stockOutsError);
          throw stockOutsError;
        }
        console.log('Raw StockOuts Data in ProductsSection:', stockOuts); // 데이터 구조 확인을 위한 로깅

        const combinedHistories: StockHistoryDisplay[] = [
          ...(stockIns?.map((item: any) => ({
            id: `in-${item.id}`,
            date: item.date,
            type: '입고' as const,
            partnerName: item.partner?.name || 'N/A',
            // warehouseName: item.warehouse?.name || 'N/A',
            productName: item.product?.name || 'N/A',
            quantity: item.quantity,
          })) || []),
          ...(stockOuts?.map((item: any) => ({
            id: `out-${item.id}`,
            date: item.date,
            type: '출고' as const,
            partnerName: item.partner?.name || 'N/A',
            // warehouseName: item.warehouse?.name || 'N/A',
            productName: item.product?.name || 'N/A',
            quantity: item.quantity,
          })) || []),
        ]
        console.log('Combined Histories in ProductsSection:', combinedHistories); // 최종 데이터 로깅

        combinedHistories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setRecentStockHistories(combinedHistories.slice(0, 3))

      } catch (error) {
        console.error('최근 입출고 내역 조회 중 오류 발생 (ProductsSection):', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecentStockHistories()
  }, [user?.id, supabase])

  const handleSeeAllClick = () => {
    router.push('/dashboard/stock-history')
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#11171d]">최근 입출고 내역</h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-[#929eb0]">
              <th className="text-left font-medium pb-2">일자</th>
              <th className="text-left font-medium pb-2">구분</th>
              <th className="text-left font-medium pb-2">거래처</th>
              {/* <th className="text-left font-medium pb-2">창고</th> */}
              <th className="text-left font-medium pb-2">품목명</th>
              <th className="text-right font-medium pb-2">수량</th>
              <th className="text-center font-medium pb-2">관리</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="py-3 text-sm text-center">로딩 중...</td>
              </tr>
            ) : recentStockHistories.length > 0 ? (
              recentStockHistories.map((history) => (
                <tr key={history.id} className="border-t border-[#ecf0f5]">
                  <td className="py-3 text-sm">{format(new Date(history.date), 'MM/dd', { locale: ko })}</td>
                  <td className="py-3 text-sm">{history.type}</td>
                  <td className="py-3 text-sm">{history.partnerName}</td>
                  {/* <td className="py-3 text-sm">{history.warehouseName}</td> */}
                  <td className="py-3 text-sm">{history.productName}</td>
                  <td className="py-3 text-sm text-right">{history.quantity}</td>
                  <td className="py-3">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="text-[#929eb0]" title="다운로드 (기능 없음)">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="text-[#929eb0]" title="더보기 (기능 없음)">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-3 text-sm text-center">최근 입출고 내역이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-right">
        <button 
          onClick={handleSeeAllClick}
          className="text-sm text-[#0070ff] hover:text-[#0056cc] inline-flex items-center"
        >
          See all <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
