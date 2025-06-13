import { Award } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"
import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export function PlanSection() {
  const { user } = useAuth();
  const [productCount, setProductCount] = useState(0)
  const [customerCount, setCustomerCount] = useState(0)
  const [warehouseCount, setWarehouseCount] = useState(0)
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchProductCount = async () => {
      if (!user?.id) return
      try {
        const { count, error } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true })
          .eq('createdbyid', user.id)

        if (error) throw error
        setProductCount(count || 0)
      } catch (error) {
        console.error('품목 수 조회 중 오류 발생:', error)
      }
    }

    fetchProductCount()
  }, [user?.id])

  useEffect(() => {
    const fetchCustomerCount = async () => {
      if (!user?.id) return
      try {
        const { count, error } = await supabase
          .from('partners')
          .select('*', { count: 'exact', head: true })
          .eq('createdbyid', user.id)

        if (error) throw error
        setCustomerCount(count || 0)
      } catch (error) {
        console.error('거래처 수 조회 중 오류 발생:', error)
      }
    }

    fetchCustomerCount()
  }, [user?.id])

  useEffect(() => {
    const fetchWarehouseCount = async () => {
      if (!user?.id) return
      try {
        const { count, error } = await supabase
          .from('warehouses')
          .select('*', { count: 'exact', head: true })
          .eq('createdbyid', user.id)

        if (error) throw error
        setWarehouseCount(count || 0)
      } catch (error) {
        console.error('창고 수 조회 중 오류 발생:', error)
      }
    }

    fetchWarehouseCount()
  }, [user?.id])

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      if (!user?.id) return
      try {
        const { data, error } = await supabase
          .from('payments')
          .select('payment_status, status')
          .eq('userId', user.id)
          .order('createdAt', { ascending: false })
          .limit(1)
          .single()

        if (error) {
          if (error.code === 'PGRST116') {
            setPaymentStatus('Free Plan')
          } else {
            throw error
          }
        } else if (data) {
          // payment_status 또는 status 필드 확인
          const status = data.payment_status || data.status || 'Unknown Status';
          
          // 상태값 한글화
          let displayStatus;
          switch(status.toLowerCase()) {
            case 'completed':
              displayStatus = '결제 완료';
              break;
            case 'pending':
              displayStatus = '결제 대기중';
              break;
            case 'failed':
              displayStatus = '결제 실패';
              break;
            case 'refunded':
              displayStatus = '환불 완료';
              break;
            default:
              displayStatus = status;
          }
          
          setPaymentStatus(displayStatus);
        } else {
          setPaymentStatus('Free Plan');
        }
      } catch (error) {
        console.error('결제 상태 조회 중 오류 발생:', error)
        setPaymentStatus('Free Plan')
      }
    }

    fetchPaymentStatus()
  }, [user?.id])

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-[#11171d]">{paymentStatus || '로딩 중...'}</h2>
          <p className="text-sm text-[#929eb0] mt-1">
            Codelist 3 / 1 Day 1000 / 1 Month 10,000
          </p>
        </div>
        <div className="text-[#0070ff]">
          <Award className="h-12 w-12" />
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold">{user?.user_metadata?.name || "사용자"}</h3>
        <p className="text-sm text-[#929eb0] mt-1">{user?.email || "이메일"}</p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-[#929eb0]">품목</p>
          <p className="text-2xl font-bold mt-1">{productCount}</p>
        </div>
        <div>
          <p className="text-sm text-[#929eb0]">거래처</p>
          <p className="text-2xl font-bold mt-1">{customerCount}</p>
        </div>
        <div>
          <p className="text-sm text-[#929eb0]">
            창고
          </p>
          <p className="text-2xl font-bold mt-1">{warehouseCount}</p>
        </div>
      </div>
    </div>
  )
}
