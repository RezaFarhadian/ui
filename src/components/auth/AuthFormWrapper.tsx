export default function AuthFormWrapper({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <form className="
      flex
      flex-col
      border-blue
      border-[1px]
      rounded-3xl
      p-8
      gap-4
      w-[70%]
    " {...props}>
      {children}
    </form>
  )
}
