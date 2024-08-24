import React from "react"
import Image, { StaticImageData } from "next/image"

interface ButtonProps extends React.ButtonHTMLAttributes<
  HTMLButtonElement
> {
  title: string
  icon?: StaticImageData
  outline?: boolean
  color?: string
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  outline,
  color,
  fullWidth,
  ...props
}) => {
  const c = color || "blue"
  return (
    <button {...props} className={`
      flex
      ${ fullWidth ? "w-full" : ""}
      flex-row
      gap-2
      justify-center
      items-center
      ${outline ? `bg-transparent text-${c} border-2 border-${c}` : `bg-${c} text-main`}
      disabled:bg-[#0000004D]
      rounded-3xl
      p-2
    `}>
      { icon && <Image src={icon} alt="" width={20}/> }
      {title}
    </button>
  )
}

export default Button
