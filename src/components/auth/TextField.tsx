"use client"

import React, { useState } from "react"
import Eye from "../../../public/eye.svg"
import Image from "next/image"

interface TextFieldProps extends React.InputHTMLAttributes<
  HTMLInputElement
> {
  title: string
  placeholder?: string,
  half?: boolean
}

const TextField: React.FC<TextFieldProps> = ({
  title,
  placeholder,
  half,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className={`flex flex-col relative ${ half ? "basis-1/2" : "" }`}>
      <label className="
        absolute
        right-[20px]
        top-[-10px]
        bg-main
        text-darkprim
        pr-[10px]
        pl-[10px]
        rounded-3xl
      ">{title}</label>
      <input
        {...props}
        placeholder={placeholder}
        className={`
          bg-lightprim
          border-2
          border-darkprim
          p-4
          rounded-3xl
          outline-none
        `}
        type={ props.type === "password" && !visible ? "password" : "text" }
      />
      {
        props.type === "password" &&
          <div className={`
            absolute
            left-5
            top-5
            cursor-pointer
            ${ visible ? "opacity-100" : "opacity-50" }
          `} onClick={() => setVisible(!visible)}>
            <Image src={Eye} alt="" />
          </div> 
      }
    </div>
  )
}

export default TextField
