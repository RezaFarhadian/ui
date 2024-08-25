export default function ItemNumber({ num, bgWhite }: {
  num: number,
  bgWhite?: boolean
}) {
  return (
    <div className={`
      ${ bgWhite ? "bg-main" : "bg-lightprim" }
      text-blue
      w-[25px]
      h-[25px]
      rounded-[50%]
      text-center
      font-extrabold
    `}>
      {num}
    </div>
  )
}
