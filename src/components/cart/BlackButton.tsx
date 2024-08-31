import { StaticImageData } from "next/image";
import Image from "next/image"

export default function BlackButton({ label, icon }: {
  label: string,
  icon: StaticImageData
}) {
  return (
    <div className="
      rounded-3xl
      border-black
      border-[1px]
      p-2
      flex
      flex-row
      items-center
      gap-3
    ">
      <Image src={icon} alt="" />
      {label}
    </div>
  )
}