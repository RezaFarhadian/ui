"use client"

import { useState } from "react";
import PaperContainer from "../PaperContainer";
import Switch from "../Switch";
import HomeSvg from "../../../public/cart/home.svg"
import ArrowLeftSvg from "../../../public/cart/arrow_left.svg"
import Image from "next/image"
import BlackButton from "./BlackButton";
import PlusBlackSvg from "../../../public/cart/plus_black.svg"
import AddressForm from "./AddressForm";
import SelfAddressForm from "./SelfAddressForm";

export default function Address() {
  const [addr, setAddr] = useState<"self" | "another">("self")
  const addrOnChange = (e: any) => {
    if (!e.target.checked) setAddr("self")
    else setAddr("another")
  }
  const [expand, setExpand] = useState<boolean>(false)
  const toggleExpand = () => setExpand(!expand)
  return (
    <PaperContainer
      label={<span className="mb-6 font-extrabold">آدرس دریافت کالا</span>}
      outline
      disablePadding
    >
      <div className="flex flex-row gap-2 justify-center font-extrabold">
        <div className={addr === "self" ? "text-blue" : ""}>خودم</div>
        <div><Switch onChange={addrOnChange} /></div>
        <div className={addr === "another" ? "text-blue" : ""}>آدرس شخص دیگر</div>
      </div>
      {
        !expand &&
          <div className="flex flex-row font-bold">
            <div className="basis-2/3 flex flex-row items-center">
              <Image src={HomeSvg} alt="" />
              <div className="flex flex-row items-center justify-around gap-12">
                <span><span className="text-prple">تهران-تهران-خیابان اول کوچه دوم پلاک 0 طبقه 1</span></span>
                <span>کد پستی: <span className="text-prple">0123456789</span></span>
              </div>
            </div>
            <div className="
              basis-1/3
              flex
              flex-row-reverse
              items-center
              gap-4
              font-medium
              cursor-pointer
            " onClick={toggleExpand}>
              <Image src={ArrowLeftSvg} alt="" />
              <div className="opacity-90">{ addr == "another" ? "ویرایش/انتخاب" : "ویرایش"}</div>
            </div>
          </div>
      }
      {
        expand &&
          <div>
            {
              addr === "another" &&
                <div className="
                  flex
                  flex-col
                  gap-2
                ">
                  <div className="flex flex-col gap-4">
                    <AddressForm />
                    <AddressForm />
                    <AddressForm />
                  </div>
                  <div className="flex flex-row-reverse">
                    <BlackButton label="اضاف کردن آدرس شخص دیگر" icon={PlusBlackSvg} />
                  </div>
                </div>
            }
            {
              addr === "self" && <SelfAddressForm />
            }
          </div>
      }
    </PaperContainer>
  )
}
