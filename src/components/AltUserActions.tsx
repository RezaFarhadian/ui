import Image from "next/image"
import LoginAltIcon from "../../public/login_alt_icon.svg"
import Link from "next/link"

export default function AltUserActions() {
  return (
    <div className="
      basis-1/3
      flex
      flex-col
      items-center
      gap-4
    ">
      <Link href="" className="
        flex
        flex-row
        gap-2
        bg-lightprim
        text-blue
        items-center
        rounded-2xl
        p-3
      ">
        <Image
          src={LoginAltIcon}
          alt=""
        />
        <span>ورود نمایندگان</span>
      </Link>
      <Link href="" className="
        flex
        flex-row
        gap-2
        bg-lightprim
        text-blue
        items-center
        rounded-2xl
        p-3
      ">
        <Image
          src={LoginAltIcon}
          alt=""
        />
        <span>ورود بازاریابان</span>
      </Link>
    </div>
  )
}
