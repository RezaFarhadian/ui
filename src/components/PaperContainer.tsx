export default function PaperContainer({
  children,
  label,
  outline,
  disablePadding,
  disableInnerPadding,
}: Readonly<{
  children: React.ReactNode,
  label?: React.ReactNode,
  outline?: boolean,
  disablePadding?: boolean,
  disableInnerPadding?: boolean,
}>) {
  return (
    <section className={`
      mt-12
      ${disablePadding ? "" : "pl-12 pr-12"}
    `}>
      <div className="flex flex-row gap-4 justify-center mb-[-20px]">
        {label}
      </div>
      <section className={`
        border-2
        ${ outline ? "bg-main" : "bg-light"}
        border-prple
        ${disableInnerPadding ? "p-3" : "p-8"}
        rounded-3xl
      `}>
        {children}
      </section>
    </section>
  )
}
