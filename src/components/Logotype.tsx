import Link from "next/link";

export default function Logotype() {
  return (
    <Link href="/" className="text-3xl">
      <span className="font-extrabold text-blue">کالا </span>
      <span className="text-red font-bold">لوتوس</span>
    </Link>
  )
}