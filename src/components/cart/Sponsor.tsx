"use client"

import { useState } from "react";
import PaperContainer from "../PaperContainer";
import SponsorSvg from "../../../public/cart/sponsor.svg"
import ArrowLeftSvg from "../../../public/cart/arrow_left.svg"
import Image from "next/image"
import BlackButton from "./BlackButton";
import PlusBlackSvg from "../../../public/cart/plus_black.svg"
import SponsorForm from "./SponsorForm";
import TrustFilledSvg from "../../../public/cart/trust_filled.svg"
import OnlyOneSponsorForm from "./OnlyOneSponsorForm";

export default function Sponsor({
  altIcon,
  selectOne,
}: {
  altIcon?: boolean,
  selectOne?: boolean,
}) {
  const [expand, setExpand] = useState<boolean>(false)
  const toggleExpand = () => setExpand(!expand)
  return (
    <PaperContainer
      label={<span className="mb-6 font-extrabold">مشخصات ضامن</span>}
      outline
      disablePadding
    >
      {
        !expand &&
          <div className="flex flex-row font-bold text-sm">
            <div className="basis-8/12 flex flex-row items-center gap-2">
              <Image src={altIcon ? TrustFilledSvg : SponsorSvg} alt="" />
              <div className="flex flex-row items-center justify-around gap-6">
                <span>آقا/خانم : <span className="text-prple">فلان فلانی</span></span>
                <span>کد ملی : <span className="text-prple">12345678</span></span>
                <span>تاریخ تولد : <span className="text-prple">1370/10/10</span></span>
              </div>
            </div>
            <div className="
              basis-4/12
              flex
              flex-row-reverse
              items-center
              gap-4
              font-medium
              cursor-pointer
            " onClick={toggleExpand}>
              <Image src={ArrowLeftSvg} alt="" />
              <div className="opacity-90">ویرایش/انتخاب</div>
            </div>
          </div>
      }
      {
        expand && !selectOne &&
          <div>
            <div className="
              flex
              flex-col
              gap-2
            ">
              <div className="flex flex-col gap-4">
                <SponsorForm />
                <SponsorForm />
                <SponsorForm />
              </div>
              <div className="flex flex-row-reverse">
                <BlackButton label="اضاف کردن ضامن" icon={PlusBlackSvg} />
              </div>
            </div>
          </div>
      }
      {
        expand && selectOne &&
          <OnlyOneSponsorForm />
      }
    </PaperContainer>
  )
}
