"use client"

import Switch from "../Switch";
import Image from "next/image"
import PlusSvg from "../../../public/cart/plus.svg"
import MinusSvg from "../../../public/cart/minus.svg"
import PaperContainer from "../PaperContainer";
import Button from "../Button";
import { useState } from "react";

export default function HowToPay() {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "seperate">("seperate")
  const switchOnChange = (e: any) => {
    if (!e.target.checked) setPaymentMethod("seperate")
    else setPaymentMethod("cash")
  }
  return (
    <PaperContainer disableInnerPadding disablePadding outline label={<span className="mb-6">نحوه پرداخت</span>}>
      <p className="text-xs font-bold">
        لطفا نحوه پرداخت را انتخاب کنید: 
      </p>
      <div className="
        flex 
        flex-row
        items-start
        justify-center
        gap-2
        mt-4
        border-b-[1px]
        border-blue
        pb-2
      ">
        <div className={paymentMethod === "seperate" ? "text-blue" : ""}>قسطی</div>
        <div><Switch onChange={switchOnChange} /></div>
        <div className={paymentMethod === "cash" ? "text-blue" : ""}>نقدی</div>
      </div>
      { paymentMethod === "seperate" &&
        <div className="flex flex-col text-sm mt-4">
          <div className="
            flex
            flex-row
            justify-between
          ">
            <div>مقدار پیش پرداخت: </div>
            <div>
              <input type="text" className="
                outline-none
                bg-lightprim
                rounded-lg
                text-center
              " dir="ltr" placeholder="30 000 000" /> تومان
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm mt-4">
            <div className="
              flex
              flex-row
              justify-between
              border-b-[1px]
              border-blue
            ">
              <div>تعداد اقساط: </div>
              <div className="
                flex
                flex-row
                gap-2
                justify-center
                items-center
              ">
                <Image src={PlusSvg} alt="" width={20}/>
                <div className="border-[1px] border-lightprim rounded-lg p-1">24</div>
                <Image src={MinusSvg} alt="" width={20}/>
                <div>ماه</div>
              </div>
            </div>
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>مبلغ قسط ماهیانه: </div>
              <div className="flex flex-row gap-2">
                <div className="bg-prple rounded-3xl text-main pr-2 pl-2" dir="ltr">30 000 000</div>
                <div>تومان</div>
              </div>
            </div>
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>سود سفارش: </div>
              <div className="flex flex-row gap-2">
                <div className="bg-prple rounded-3xl text-main pr-2 pl-2 text-xs font-medium" dir="ltr">30 000 000</div>
                <div>تومان</div>
              </div>
            </div>
            <div className="
              flex
              flex-row
              justify-between
            ">
              <div>تاریخ پرداخت قسط اول: </div>
              <div className="bg-prple rounded-3xl text-main pr-2 pl-2 text-xs font-medium" dir="ltr">1402/08/07</div>
            </div>
          </div>
        </div>
      }
      <div className="mt-4">
        <Button color="blue" fullWidth title="تایید و ادامه سفارش" />
      </div>
    </PaperContainer>
  )
}