import React from "react";

export default function Paper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pl-12 pr-12">
      <section className="
        bg-lightprim
        mt-8
        p-12
        rounded-3xl
      ">
        {
          children
        }
      </section>
    </div>
  )
}
