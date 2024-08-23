import Image from "next/image"
import MobileIcon from "../../public/mobile.png"
import TelephoneIcon from "../../public/telephone.png"
import EmailIcon from "../../public/email.png"
import WhatsappIcon from "../../public/whatsapp.png"
import EetaIcon from "../../public/eeta.png"
import TelegramIcon from "../../public/telegram.png"
import InstagramIcon from "../../public/instagram.png"
import LinkedinIcon from "../../public/linkedin.png"
import Link from "next/link"

export default function BottomContact() {
  return (
    <div className="
      basis-1/3
      flex
      flex-col
      items-center
    ">
      <div className="
        border-[1px]
        border-lightprim
        rounded-2xl
        p-2
      ">ارتباط با ما</div>
      <div className="
        border-[1px]
        border-lightprim
        rounded-2xl
        p-2
        w-80
        flex
        flex-col
      ">
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={MobileIcon}
            alt=""
            width={30}
          /> 09012345678
        </Link>
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={TelephoneIcon}
            alt=""
            width={30}
          /> 02112345678
        </Link>
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={EmailIcon}
            alt=""
            width={30}
          /> kalalotus@gmail.com
        </Link>
      </div>

      <div className="
        border-[1px]
        border-lightprim
        rounded-2xl
        p-2
      ">شبکه‌های اجتماعی</div>
      <div className="
        border-[1px]
        border-lightprim
        rounded-2xl
        p-2
        w-80
        flex
        flex-col
      ">
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={WhatsappIcon}
            alt=""
            width={30}
          /> 09012345678
        </Link>
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={EetaIcon}
            alt=""
            width={30}
          /> eitaa
        </Link>
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={TelegramIcon}
            alt=""
            width={30}
          /> telegram@
        </Link>
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={InstagramIcon}
            alt=""
            width={30}
          /> instagram@
        </Link>
        <Link href="" className="flex flex-row-reverse items-center gap-2">
          <Image
            src={LinkedinIcon}
            alt=""
            width={30}
          /> linkedin@
        </Link>
      </div>
    </div>
  )
}
