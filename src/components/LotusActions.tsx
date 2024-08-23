import Image from "next/image";
import Link from "next/link";
import LotusAction from "../../public/lotus_action.png"

export default function LotusActions() {
  return (
    <div className="flex flex-row gap-4">
      <Link href="">
        <div className="
          flex
          flex-row
          gap-4
          bg-[#F0D800]
          p-4
          rounded-full
        ">
          <div
            className="
              flex
              flex-col
              text-center
            "
          >
            <div>ورود به خدمات سلامت</div>
            <b>Life Lotus</b>
          </div>
          <Image
            className="w-auto"
            src={LotusAction}
            alt=""
            width={45}
          />
        </div>
      </Link>
      <Link href="">
        <div className="
          flex
          flex-row
          gap-4
          bg-[#5ACA9C]
          p-4
          rounded-full
        ">
          <div
            className="
              flex
              flex-col
              text-center
            "
          >
            <div>ورود به خدمات بیمه</div>
            <b>Bime Lotus</b>
          </div>
          <Image
            className="w-auto"
            src={LotusAction}
            alt=""
            width={45}
          />
        </div>
      </Link>
    </div>
  )
}