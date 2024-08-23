import Image from "next/image"
import Compare from "../../public/compare.svg"
import iPhone from "../../public/iphone.png"
import Dot from "./Dot"
import Battery from "../../public/cart/battery.svg"
import Memory from "../../public/cart/memory.svg"
import Processor from "../../public/cart/processor.svg"
import Size from "../../public/cart/size.svg"

export default function ProductCard({ className }: {className:any}) {
  return (
    <div className={`
      ${className}
      p-4
      bg-lightprim
      rounded-3xl
      relative
    `}>
      <div className="
        border-dashed
        border-b-2
        border-blue
        flex
        flex-row
        justify-between
        text-blue
        font-bold
      ">
        <span>سایبر ماندی</span>
        <span>08:33:55</span>
      </div>
      <div className="
        flex
        flex-row
        justify-between
        mt-4
        font-bold
        text-blue
        text-sm
      ">
        <div>5%</div>
        <div className="flex flex-row">مقایسه <Image src={Compare} alt="" /></div>
      </div>
      <div className="mt-8">
        <Image src={iPhone} alt="" />
      </div>
      <div className="flex flex-col gap-2 absolute top-[110px]">
        <Dot color="#462697" />
        <Dot color="#000000" />
        <Dot color="#00FF29" />
        <Dot color="#FF0000" />
      </div>
      <div className="flex flex-row-reverse gap-4 items-center justify-center font-bold mt-4 text-xs">
        <div className="flex flex-col items-center justify-center">
          <Image src={Battery} alt="" width={20} />
          <span>5000</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={Processor} alt="" width={20} />
          <span>64</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={Size} alt="" width={20} />
          <span>6.5</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={Memory} alt="" width={20} />
          <span>256</span>
        </div>
      </div>
    </div>
  )
}
