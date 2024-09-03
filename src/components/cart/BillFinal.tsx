import Button from "../Button";
import PaperContainer from "../PaperContainer";
import PriceLabel from "./PriceLabel";

export default function BillFinal({
  itemsCount,
  totalCost,
  advance,
  insuranceCost,
  payments,
  payment,
  initialPaymentDate,
  sponsor,
  buyer,
  lastPaymentDate,
}: {
  itemsCount: number,
  totalCost: number,
  advance: number,
  insuranceCost: number,
  payments: number,
  payment: number,
  initialPaymentDate: string,
  sponsor: string,
  buyer?: string,
  lastPaymentDate?: string
}) {
  return (
    <PaperContainer
      disableInnerPadding
      disablePadding
      outline
      label={<span className="mb-6 font-extrabold">جزئیات سفارش</span>}
    >
      <p className="
        text-center
        text-prple
        text-sm
        font-bold
      ">{itemsCount.toLocaleString("fa")} قلم کالا</p>
      <div className="flex flex-col gap-4 text-sm mt-4 font-bold">
        {
          buyer &&
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>خریدار: </div>
              <div className="
                rounded-3xl
                bg-lightprim
                text-prple
                p-2
              ">{buyer}</div>
            </div>
        }
        <div className="
          flex
          flex-row
          justify-between
        ">
          <div>قیمت کالاها</div>
          <div><PriceLabel price={totalCost.toLocaleString("fa")}/> تومان</div>
        </div>
        <div className="
          flex
          flex-row
          justify-between
        ">
          <div>مقدار پیش‌پرداخت</div>
          <div><PriceLabel price={advance.toLocaleString("fa")}/> تومان</div>
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
          payments &&
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>تعداد اقساط: </div>
              <div><PriceLabel price={payments.toLocaleString("fa")}/> ماه</div>
            </div>
        }
        {
          payment &&
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>مبلغ قسط ماهیانه: </div>
              <div><PriceLabel price={payment.toLocaleString("fa")}/> تومان</div>
            </div>
        }
        {
          initialPaymentDate &&
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>تاریخ پرداخت قسط اول: </div>
              <div><PriceLabel price={initialPaymentDate}/></div>
            </div>
        }
        {
          lastPaymentDate &&
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>تاریخ پرداخت قسط آخر: </div>
              <div><PriceLabel price={lastPaymentDate}/></div>
            </div>
        }
        {
          sponsor &&
            <div className="
              flex
              flex-row
              justify-between
              border-t-[1px]
              border-blue
              pt-4
            ">
              <div>ضامن: آقای/خانم </div>
              <div><PriceLabel price={sponsor}/></div>
            </div>
        }
        <Button title="بازگشت/ویرایش" light/>
      </div>
    </PaperContainer>
  )
}