import { useState } from "react"
import InputField from "./InputField"
import BlackButton from "./BlackButton"
import ArrowDownSvg from "../../../public/cart/arrow_down.svg"
import TrashBlackSvg from "../../../public/cart/trash_black.svg"

export default function SponsorForm() {
  const [selected, setSelected] = useState<boolean>(false)
  const toggle = () => setSelected(!selected)

  return (
    <div className="
      flex
      flex-row
      items-center
    ">
      <div className="
        basis-1/12
      ">
        <div className={`
          rounded-full
          border-blue
          cursor-pointer
          ${selected ? "border-[22px]" : "border-4"}
          h-[60px]
          w-[60px]
        `} onClick={toggle}></div>
      </div>
      <div className="
        basis-11/12
        w-full
        border-blue
        border-2
        rounded-3xl
        p-4
      ">
        <div className="
          flex
          flex-row
          flex-wrap
          gap-8
        ">
          <InputField title="نام" placeholder="فلان" />
          <InputField title="نام خانوادگی" placeholder="فلانی" />
          <InputField title="کد ملی" placeholder="0123456789" />
          <InputField title="تاریخ تولد" placeholder="1378/8/8" />
          <InputField title="تلفن همراه 1" placeholder="0912-123-1234" />
          <InputField title="تلفن همراه 2" placeholder="0912-123-1234" />
          <InputField title="کد پرسنلی(شاغلین)" placeholder="0123456789" />
          <InputField title="سازمان" placeholder="فلان" />
          <InputField title="منطقه" placeholder="فلان" />
          <InputField title="واحد" placeholder="لورم اپیسوم" />
        </div>
        <div className="flex flex-row-reverse gap-4">
          <BlackButton label="حذف" icon={TrashBlackSvg} />
          <BlackButton label="ویرایش" icon={ArrowDownSvg} />
        </div>
      </div>
    </div>
  )
}
