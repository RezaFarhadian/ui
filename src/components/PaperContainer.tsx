export default function PaperContainer({
  children,
  label,
  outline,
}: Readonly<{
  children: React.ReactNode,
  label: React.ReactNode,
  outline?: boolean
}>) {
  return (
    <section className="pl-12 pr-12 mt-12">
    <div className="flex flex-row gap-4 justify-center mb-[-20px]">
      {label}
    </div>
    <section className={`
      border-2
      ${ outline ? "bg-main" : "bg-light"}
      border-prple
      p-8
      rounded-3xl
    `}>
      {children}
    </section>
  </section>
  )
}
