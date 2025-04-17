import { HeroSection } from "./hero-section"
import { PlanSection } from "./plan-section"
import { ProductsSection } from "./products-section"
import { CalendarSection } from "./calendar-section"
import { PaymentSection } from "./payment-section"
import { InsightsSection } from "./insights-section"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <HeroSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanSection />
        <ProductsSection />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CalendarSection />
        <div className="grid grid-cols-1 gap-6">
          <PaymentSection />
          <InsightsSection />
        </div>
      </div>
    </div>
  )
}
