import { useState } from "react"
import InputField from "./InputField"
import BlackButton from "./BlackButton"
import ArrowDownSvg from "../../../public/cart/arrow_down.svg"
import TrashBlackSvg from "../../../public/cart/trash_black.svg"

export default function AddressForm() {
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
          justify-around
        ">
          <InputField title="استان" placeholder="تهران" />
          <InputField title="شهر" placeholder="تهران" />
          <InputField title="کد پستی" placeholder="0123456789" />
        </div>
        <div className="w-full">
          <label>شرح آدرس: </label><br />
          <textarea className="rounded-lg bg-lightprim w-full mt-2 outline-none"></textarea>
        </div>
        <div className="flex flex-row-reverse gap-4">
          <BlackButton label="حذف" icon={TrashBlackSvg} />
          <BlackButton label="ویرایش" icon={ArrowDownSvg} />
        </div>
      </div>
    </div>
  )
}
