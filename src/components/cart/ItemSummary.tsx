import Image from "next/image";
import Dot from "../Dot";

export default function ItemSummary({
  no,
  title,
  color,
  quantity,
  insurance,
}: {
  no: number,
  title: string,
  color: {
    code: string,
    name: string
  },
  quantity: number,
  insurance: boolean,
}) {
  return (
    <div className="
      flex
      flex-col
      items-center
      gap-4
    ">
      <div className="
        rounded-full
        w-8
        h-8
        border-blue
        border-2
        text-center
        font-bold
      ">
        {no}
      </div>
      <div className="
        border-blue
        border-2
        bg-lightprim
        rounded-3xl
        p-4
        flex
        flex-col
        items-center
      ">
        <Image src="/iphone.png" alt="" width={200} height={200} />
        <p className="text-blue font-bold">{title}</p>
        <div className="flex flex-row gap-2 items-center">
          <span>تعداد: </span>
          <div className="
            bg-main
            rounded-3xl
            h-5
            w-5
            p-2
            flex-row
            flex
            justify-center
            items-center
          ">
            <span className="font-bold">{quantity.toLocaleString("fa")}</span>
          </div>
          <Dot color={color.code}></Dot>
          <span style={{ color: color.code }}>{color.name}</span>
        </div>
        {
          insurance &&
            <div className="text-green">دارای بیمه لوتوس</div>
        }
      </div>
    </div>
  )
}
