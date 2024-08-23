import React from "react"
import Image, { StaticImageData } from "next/image"

interface ButtonProps extends React.ButtonHTMLAttributes<
  HTMLButtonElement
> {
  title: string
  icon?: StaticImageData
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  ...props
}) => {
  return (
    <button {...props} className="
      flex
      flex-row
      gap-2
      justify-center
      items-center
      bg-blue
      text-main
      disabled:bg-[#0000004D]
      rounded-3xl
      p-2
    ">
      { icon && <Image src={icon} alt="" width={20}/> }
      {title}
    </button>
  )
}

export default Button
