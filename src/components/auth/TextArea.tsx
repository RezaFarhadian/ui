import React, { useState } from "react"

interface TextAreaProps extends React.InputHTMLAttributes<
  HTMLInputElement
> {
  title: string
  placeholder?: string,
}

const TextArea: React.FC<TextAreaProps> = ({
  title,
  placeholder,
}) => {
  return (
    <div className="flex flex-col relative">
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
      <textarea
        placeholder={placeholder}
        className={`
          bg-lightprim
          border-2
          border-darkprim
          p-4
          rounded-3xl
          outline-none
        `}
      ></textarea>
    </div>
  )
}

export default TextArea
