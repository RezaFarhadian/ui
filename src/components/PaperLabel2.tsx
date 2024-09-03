export default function PaperLabel2({ children }: {
  children: React.ReactNode
}) {
  return (
    <label className="
      bg-main text-prple
      border-2
      border-prple
      p-2
      rounded-3xl
      font-bold
      absolute
      top-[5px]
      w-[130px]
      text-center
    ">{children}</label>
  )
}
