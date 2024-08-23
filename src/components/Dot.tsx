export default function Dot({ color }: {
  color: string
}) {
  return (
    <div className={`
      w-[10px]
      h-[10px]
      rounded-[50%]
      inline-block
    `} style={{backgroundColor: color}}></div>
  )
}
