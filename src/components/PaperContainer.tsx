"use client"

import { usePathname } from "next/navigation"

export default function PaperContainer({
  children,
  label,
  outline,
  disablePadding,
  disableInnerPadding,
  sticky,
  fixed,
  disableOutline,
}: Readonly<{
  children: React.ReactNode,
  label?: React.ReactNode,
  outline?: boolean,
  disablePadding?: boolean,
  disableInnerPadding?: boolean,
  sticky?: boolean,
  fixed?: boolean,
  disableOutline?: boolean
}>) {
  const currentPath = usePathname()
  
  let outlined = outline
  if (currentPath == "/cart/future" && !disableOutline) outlined = true
  return (
    <section className={`
      mt-12
      ${disablePadding ? "" : "pl-12 pr-12"}
      w-full
      ${ sticky ? "sticky top-0" : ""}
      ${ fixed ? "fixed" : ""}
    `}>
      <div className="flex flex-row gap-4 justify-center mb-[-20px]">
        {label}
      </div>
      <section className={`
        border-2
        ${ outlined ? "bg-main" : "bg-light"}
        border-prple
        ${disableInnerPadding ? "p-3" : "p-8"}
        rounded-3xl
      `}>
        {children}
      </section>
    </section>
  )
}
