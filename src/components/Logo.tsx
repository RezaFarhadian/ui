import Image from "next/image";
import TopLogo from "../../public/top_logo.png"
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={TopLogo}
        alt=""
      />
    </Link>
  )
}
