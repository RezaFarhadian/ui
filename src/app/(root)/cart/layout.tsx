import PaperLabel from "@/components/PaperLabel"
import Image from "next/image"
import EmptyCart from "../../../../public/cart/empty.svg"
import Button from "@/components/Button"
import Link from "next/link"
import PaperContainer from "@/components/PaperContainer"
import ProductCard from "@/components/ProductCard"

export default function CartLayout({ children }:
  Readonly<{
    children: React.ReactNode
  }>
) {
  const empty = false

  const TopLabels = empty ?
    <PaperLabel title="سبد خرید" fill /> :
    <>
      <Link href="/cart/main">
        <PaperLabel title="سبد خرید(2 قلم)" path="/cart/main" />
      </Link>
      <Link href="/cart/next">
        <PaperLabel title="سبد خرید بعدی(7 قلم)" path="/cart/next" />
      </Link>
    </>

  return (
    <>
      <PaperContainer label={TopLabels}>
        {empty &&
          <div className="
            flex
            flex-col
            gap-4
            items-center
          ">
            <Image src={EmptyCart} alt="" width={400} />
            <b>سبد خرید شما خالی است!</b>
            <p>
              برای مشاهده تخفیف های امروز روی لینک زیر کلیک کنید
            </p>
            <div className="
              flex
              flex-row
              gap-2
            ">
              <Button title="محصولات پر بازدید" />
              <Button title="تخفیف های امروز" />
              <Button title="بازدید های اخیر شما" />
            </div>
          </div>
        }
        {!empty && children}
      </PaperContainer>

      {
        !empty &&
          <PaperContainer outline label={<PaperLabel fill title="بازدیدهای اخیر" />}>
            <div className="flex flex-row gap-2">
              <Link href=""><ProductCard className="basis-1/6" /></Link>
              <Link href=""><ProductCard className="basis-1/6" /></Link>
              <Link href=""><ProductCard className="basis-1/6" /></Link>
              <Link href=""><ProductCard className="basis-1/6" /></Link>
              <Link href=""><ProductCard className="basis-1/6" /></Link>
              <Link href=""><ProductCard className="basis-1/6" /></Link>
            </div>
          </PaperContainer>        
      }
    </>
  )
}
