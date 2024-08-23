import Image from "next/image";
import LoginIcon from "../../public/login_icon.svg"
import LoginHoverIcon from "../../public/login_hover_icon.svg"
import RegisterIcon from "../../public/register_icon.svg"
import RegisterHoverIcon from "../../public/register_hover_icon.svg"
import Link from "next/link";

export default function UserActions() {
  return (
    <div
      className="
        flex
        flex-row
        cursor-pointer
      "
    >
      <Link
        href="/login"
        className="
          bg-gradi
          p-4
          text-lightprim
          flex
          flex-row
          gap-2
          rounded-r-3xl
          items-center
          fill-green
        "
      >
        <div>
          <Image
            src={LoginIcon}
            alt=""
          />
        </div>
        ورود
      </Link>
      <Link
        href="/register"
        className="
          bg-lightprim
          text-blue
          p-4
          flex
          flex-row
          gap-2
          rounded-l-3xl
          items-center
        "
      >
        <Image
          src={RegisterIcon}
          alt=""
        />
        ثبت نام
      </Link>
    </div>
  )
}
