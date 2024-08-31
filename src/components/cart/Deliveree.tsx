"use client"

import { useState } from "react";
import PaperContainer from "../PaperContainer";
import Switch from "../Switch";
import UserSolidSvg from "../../../public/cart/user_solid.svg"
import ArrowLeftSvg from "../../../public/cart/arrow_left.svg"
import Image from "next/image"
import AnotherPersonForm from "./AnotherPersonForm";
import SelfForm from "./SelfForm";
import BlackButton from "./BlackButton";
import PlusBlackSvg from "../../../public/cart/plus_black.svg"

export default function Deliveree() {
  const [deliveree, setDeliveree] = useState<"self" | "another">("self")
  const delivereeOnChange = (e: any) => {
    if (!e.target.checked) setDeliveree("self")
    else setDeliveree("another")
  }
  const [expand, setExpand] = useState<boolean>(false)
  const toggleExpand = () => setExpand(!expand)
  return (
    <PaperContainer
      label={<span className="mb-6 font-extrabold">تحویل‌گیرنده کالا</span>}
      outline
      disablePadding
    >
      <div className="flex flex-row gap-2 justify-center font-extrabold">
        <div className={deliveree === "self" ? "text-blue" : ""}>خودم</div>
        <div><Switch onChange={delivereeOnChange} /></div>
        <div className={deliveree === "another" ? "text-blue" : ""}>شخص دیگر</div>
      </div>
      {
        !expand &&
          <div className="flex flex-row font-bold">
            <div className="basis-2/3 flex flex-row items-center">
              <Image src={UserSolidSvg} alt="" />
              <div className="flex flex-row items-center justify-around gap-12">
                <span>آقا/خانم : <span className="text-prple">فلان فلانی</span></span>
                <span>کد ملی : <span className="text-prple">12345678</span></span>
                <span>تاریخ تولد : <span className="text-prple">1370/10/10</span></span>
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
              <div className="opacity-90">{ deliveree == "another" ? "ویرایش/انتخاب" : "ویرایش"}</div>
            </div>
          </div>
      }
      {
        expand &&
          <div>
            {
              deliveree === "another" &&
                <div className="
                  flex
                  flex-col
                  gap-2
                ">
                  <div className="flex flex-col gap-4">
                    <AnotherPersonForm />
                    <AnotherPersonForm />
                    <AnotherPersonForm />
                  </div>
                  <div className="flex flex-row-reverse">
                    <BlackButton label="اضاف کردن شخص دیگر" icon={PlusBlackSvg} />
                  </div>
                </div>
            }
            {
              deliveree === "self" && <SelfForm />
            }
          </div>
      }
    </PaperContainer>
  )
}
