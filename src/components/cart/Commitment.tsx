"use client"

import Image from "next/image"
import TrustOutlineSvg from "../../../public/cart/trust_outline.svg"
import TrustFilledSvg from "../../../public/cart/trust_filled.svg"
import { useState } from "react"

export default function Commitment({
  commitment,
}: {
  commitment: string
}) {
  const [agreed, setAgreed] = useState<boolean>(false)
  const toggle = () => setAgreed(!agreed)
  return (
    <div className="flex flex-row gap-4 items-center text-prple">
      <Image className="cursor-pointer w-6 h-6" src={agreed ? TrustFilledSvg : TrustOutlineSvg} alt="" onClick={toggle}/>
      <p>
        {commitment}
      </p>
    </div>
  )
}
