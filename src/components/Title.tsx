export default function Title({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="
      bg-gradi
      text-main
      text-center
      rounded-3xl
      p-4
      text-lg
      font-bold
    ">
      {children}
    </div>
  )
}