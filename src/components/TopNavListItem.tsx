import React from "react";

export default function TopNavListItem({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <li className="
      p-2
      border-blue
      rounded-3xl
      hover:border-[1px]
    ">
      {
        children
      }
    </li>
  )
}
