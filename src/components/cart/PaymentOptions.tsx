import Image, { StaticImageData } from "next/image";
import Switch from "../Switch";
import Check from "../Check";

export default function PaymentOption({
  title,
  img,
}: {
  title: string,
  img: StaticImageData
}) {
  return (
    <div
      className="
        w-full
        h-[100px]
        bg-lightprim
        border-[1px]
        border-prple
        rounded-3xl
        flex
        flex-row
        items-center
        gap-4
        p-8
      "
    >
      <Check size="sm" />
      <Image src={img} alt="" />
      <div className="flex flex-col gap-2">
        <div className="text-md text-blue font-bold">{title}</div>
        <div className="text-sm">پرداخت آنلاین از طریق کلیه کارت های عضو شتاب</div>
      </div>
    </div>
  )
}
