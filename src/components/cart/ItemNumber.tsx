export default function ItemNumber({ num }: {
  num: number
}) {
  return (
    <div className="
      bg-lightprim
      text-blue
      w-[25px]
      h-[25px]
      rounded-[50%]
      text-center
      font-extrabold
    ">
      {num}
    </div>
  )
}
