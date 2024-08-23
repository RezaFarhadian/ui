import Image from "next/image"
import ArrowUp from "../../public/arrow_up.svg"
import Link from "next/link"

export default function BackToTop() {
  return (
    <Link href="#">
      <div className="
        p-4
        bg-lightprim
        text-blue
        mt-4
        w-[180px]
        rounded-l-3xl
        flex
        flex-row
        justify-center
        gap-4
      ">
        <Image src={ArrowUp} alt="" width={25}/> بازگشت به بالا
      </div>
    </Link>
  )
}
