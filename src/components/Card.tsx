import Image from "next/image"
import Compare from "../../public/compare.svg"
import CardButton from "./CardButton"

export default function Card({
  title,
  englishTitle,
  features,
  cost,
  costBeforeDiscount,
  discountInPercent,
  image,
  invert
}: {
  title: string,
  englishTitle: string,
  features: string,
  cost: number,
  costBeforeDiscount: number,
  discountInPercent: number,
  image: string,
  invert?: boolean
}) {
  return (
    <div className={`
      flex
      flex-col
      gap-2
      bg-lightprim
      ${ invert ? "bg-main" : "bg-lightprim" }
      rounded-3xl
      items-center
      p-4
      pl-6
      pr-6
    `}>
      <p className="
        border-b-2
        border-dashed
        border-blue
        text-blue
        text-center
        w-full
        font-extrabold
      ">
        سایبر ماندی
      </p>
      <div className={`
        ${ invert ? "bg-lightprim" : "bg-main" }
        w-full
        flex
        flex-col
        items-center
        rounded-3xl
        relative
      `}>
        <div className={`
          absolute
          left-1
          rounded-3xl
          top-2
          flex
          flex-row
          text-blue
          ${ invert ? "bg-main" : "bg-lightprim" }
          p-1
          text-sm
        `}>
          مقایسه <Image
            src={Compare} alt="" width={14}
          />
        </div>
        <div className={`
          absolute
          right-1
          top-2
          rounded-3xl
          text-blue
          ${ invert ? "bg-main" : "bg-lighprim" }
          p-1
          font-bold
        `}>{discountInPercent}%</div>
        <Image src={image} width={205} height={205} alt="" />
      </div>
      <h2 className="font-bold text-lg">{englishTitle}</h2>
      <p>{title}</p>
      <p>{features}</p>
      <div className="
        flex
        flex-row
        justify-between
        gap-8
        font-bold
      ">
        <span className="text-blue">{cost.toLocaleString("fa-IR")}تومان</span>
        <span className="line-through">{costBeforeDiscount.toLocaleString("fa-IR")}تومان</span>
      </div>
      <CardButton>مشاهده همه محصولات</CardButton>
    </div>
  )
}
