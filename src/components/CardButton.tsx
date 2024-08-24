export default function CardButton({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="
      bg-gradi
      text-main
      w-full
      text-center
      p-2
      rounded-3xl
      cursor-pointer
    ">
      {children}
    </div>
  )
}
