import PaperContainer from "../PaperContainer"
import PriceLabel from "./PriceLabel"

export default function PaymentOptionContainer({ children, title }: {
  children: React.ReactNode,
  title: string
}) {
  return (
    <PaperContainer
      label={<span className="mb-6 font-extrabold">انتخاب درگاه پرداخت</span>}
      outline
      disablePadding
      disableInnerPadding
    >
      <div className="
        flex
        flex-col
        gap-4
        p-4
      ">
        <div className="
          font-bold
          text-center
        ">
          مبلغ قابل پرداخت: <PriceLabel price={(30000000).toLocaleString("fa")} /> تومان
        </div>
          {children}
      </div>
    </PaperContainer>
  )
}