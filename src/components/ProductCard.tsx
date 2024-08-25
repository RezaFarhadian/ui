import Image from "next/image"
import Compare from "../../public/compare.svg"
import iPhone from "../../public/iphone.png"
import Dot from "./Dot"
import Battery from "../../public/cart/battery.svg"
import Memory from "../../public/cart/memory.svg"
import Processor from "../../public/cart/processor.svg"
import Size from "../../public/cart/size.svg"
import CardButton from "./CardButton"

export default function ProductCard({ className }: {className:any}) {
  return (
    <div className={`
      ${className}
      p-2
      bg-lightprim
      rounded-3xl
      relative
      flex
      flex-col
      items-center
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
        w-full
        text-sm
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
        text-xs
        w-full
      ">
        <div>5%</div>
        <div className="flex flex-row gap-2 items-center">مقایسه <Image src={Compare} alt="" /></div>
      </div>
      <div className="mt-4">
        <Image src={iPhone} alt="" width={150} />
      </div>
      <div className="flex flex-col gap-1 absolute top-[100px] right-[30px]">
        <Dot color="#462697" />
        <Dot color="#000000" />
        <Dot color="#00FF29" />
        <Dot color="#FF0000" />
      </div>
      <div className="flex flex-row-reverse gap-4 items-center justify-center font-bold mt-4 text-xs">
        <div className="gap-2 flex flex-col items-center justify-center">
          <Image src={Battery} alt="" width={15} />
          <span className="text-xs">5000</span>
        </div>
        <div className="gap-2 flex flex-col items-center justify-center">
          <Image src={Processor} alt="" width={15} />
          <span>64</span>
        </div>
        <div className="gap-2 flex flex-col items-center justify-center">
          <Image src={Size} alt="" width={15} />
          <span>6.5</span>
        </div>
        <div className="gap-2 flex flex-col items-center justify-center">
          <Image src={Memory} alt="" width={15} />
          <span>256</span>
        </div>
      </div>
      <div className="text-center flex flex-col gap-4 mt-4">
        <h2 className="font-bold text-sm">Iphone 13 pro plus</h2>
        <p className="text-xs">گوشی موبایل مدل آیفون 13 پرو </p>
        <p className="text-xs">ظرفیت 512 گیگابایت رم 12 گیگ ...</p>
        <div className="
          flex
          flex-row
          font-bold
          text-[10px]
        ">
          <span className="text-blue font-bold text-sm">۲۵۰٬۰۰۰٬۰۰۰تومان</span>
          <span className="line-through">۲۵۰٬۰۰۰٬۰۰۰تومان</span>
        </div>
        <CardButton>افزودن به سبد خرید</CardButton>
      </div>
    </div>
  )
}
