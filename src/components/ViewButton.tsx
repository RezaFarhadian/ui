"use client"

import Image from "next/image";
import closedEye from "../../public/closed_eye.svg"
import invertedClosedEye from "../../public/invert_closed_eye.svg"
import openEye from "../../public/open_eye.svg"
import invertedOpenEye from "../../public/invert_open_eye.svg"
import { useState } from "react";

export default function ViewButton({
  invert
}: {
  invert?: boolean
}) {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className={`
      transition-all
      cursor-pointer
      flex
      flex-row
      rounded-3xl
      gap-2
      text-2xl
      font-bold
      border-2
      p-2
      pr-6
      pl-6
      ${ invert ? "bg-blue text-lightprim border-blue hover:text-blue" : "bg-lightprim text-blue border-lightprim hover:text-lightprim" }
      hover:bg-transparent
    `} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
      <Image src={invert ? (hovered ? invertedOpenEye : invertedClosedEye) : (hovered ? openEye : closedEye)} alt=""/>
      مشاهده
    </div>
  )
}
