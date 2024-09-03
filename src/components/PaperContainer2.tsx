export default function PaperContainer2({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-[-60px] relative pt-5 flex flex-col items-center">
      {children}
    </div>
  )
}
