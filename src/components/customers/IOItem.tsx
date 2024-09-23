import Image, { StaticImageData } from "next/image";

export default function IOItem({
  icon,
  label
}: {
  icon: StaticImageData,
  label: string,
}) {
  return (
    <div className="
      bg-lightprim
      rounded-xl
      p-2
      pr-4
      pl-4
      flex
      flex-row
      items-center
      gap-2
      text-sm
      cursor-pointer
      font-bold
    ">
      <Image src={icon} alt="" />
      {
        label
      }
    </div>
  )
}
