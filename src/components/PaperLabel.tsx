"use client"

import { usePathname } from "next/navigation"

export default function PaperLabel({
  title,
  path,
  fill
}: Readonly<{
  title: string,
  path?: string,
  fill?: boolean
}>) {
  const pathname: any = usePathname()
  if (pathname === "/cart" || pathname === "/cart/future") {
    return (
      <label className={`
        ${ pathname == path ? "bg-prple text-main" : (fill ? "bg-lightprim text-prple" : "bg-main text-prple")}
        border-2
        border-prple
        p-2
        rounded-3xl
        font-bold
        ${path?.length ? "cursor-pointer" : "" }
      `}>
        {title}
      </label>
    )
  } else {
    return (
      <></>
    )
  }
}
