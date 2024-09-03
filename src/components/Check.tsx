"use client"

import { useState } from "react"

export default function Check({ size }: {
  size?: "sm" | "lg"
}) {
  const [selected, setSelected] = useState<boolean>(false)
  const toggle = () => setSelected(!selected)
  
  return (
    <div className={`
      rounded-full
      border-blue
      cursor-pointer
      ${selected ? (size ==="sm" ? "border-[10px]" : "border-[22px]") : (size === "sm" ? "border-2" : "border-4")}
      ${size === "sm" ? "h-[30px] w-[30px]" : "h-[60px] w-[60px]"}
      bg-main
    `} onClick={toggle}></div>
  )
}
