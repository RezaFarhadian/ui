import Button from "../Button"
import KalaLotus from "../KalaLotus"
import PaperContainer from "../PaperContainer"
import DiscountCode from "./DiscountCode"

export default function BillDraft({
  itemsCount,
  initialCost,
  insuranceCost,
  lotusDiscount,
  finalCost,
}: Readonly<{
  itemsCount: number,
  initialCost: number,
  insuranceCost?: number,
  lotusDiscount?: number,
  finalCost: number,
}>) {
  return (
    <PaperContainer
      disableInnerPadding
      disablePadding
      outline
      label={<span className="mb-6">صورت حساب</span>}
    >
      <p className="
        text-center
        text-prple
        text-sm
      ">{itemsCount.toLocaleString("fa")} قلم کالا</p>
      <div className="flex flex-col gap-4 text-sm mt-4">
        <div className="
          flex
          flex-row
          justify-between
        ">
          <div>قیمت کالاها</div>
          <div>{initialCost.toLocaleString("fa")} تومان</div>
        </div>
        <div className="
          flex
          flex-row
          justify-between
        ">
          <div>بسته‌بندی و ارسال</div>
          <div>رایگان</div>
        </div>
        {
          insuranceCost &&
            <div className="
              flex
              flex-row
              justify-between
              text-[#16742A]
              border-b-[1px]
              border-blue
              pb-4
            ">
              <div>بیمه</div>
              <div>{insuranceCost.toLocaleString("fa")} تومان</div>
            </div>
        }
        {
          lotusDiscount &&
            <div className="
              flex
              flex-row
              justify-between
              text-prple
            ">
              <div>تخفیف <KalaLotus /></div>
              <div>{lotusDiscount.toLocaleString("fa")} تومان</div>
            </div>
        }
        <div className="
          flex
          flex-row
          justify-between
        ">
          <div>کد تخفیف مشتری</div>
          <div><DiscountCode /></div>
        </div>
        <div className="
          border-b-[1px]
          border-blue
          pb-6
        ">
          <Button color="prple" fullWidth title="اعمال تخفیف" />
        </div>
        <div className="
          flex
          flex-row
          justify-between
          font-extrabold
          text-blue
        ">
          <div>مبلغ قابل پرداخت (نقدی)</div>
          <div>{finalCost.toLocaleString("fa")} تومان</div>
        </div>
      </div>
    </PaperContainer>
  )
}