"use client"

import { ChangeEvent, useState } from "react"

export default function OTPDigit() {
  const [val, setVal] = useState<string>("")
  const [numeralVal, setNumeralVal] = useState<number>()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    if (newVal.length > 1) return
    setVal(
      Number(newVal).toLocaleString("fa-IR")
    )
    setNumeralVal(
      Number(newVal)
    )
  }

  return (
    <input type="string" className="
      w-[100px]
      h-[100px]
      bg-lightprim
      border-[1px]
      border-[#000]
      text-center
      text-4xl
      outline-none
      rounded-3xl
    " placeholder="۰" value={val} onChange={onChange} />
  )
}
