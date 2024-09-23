import Image, { StaticImageData } from "next/image";

export default function IO({
  label,
  icon,
  children
}: {
  label: string,
  icon: StaticImageData,
  children: React.ReactNode
}) {
  return (
    <div className="
      border-blue
      border-[1px]
      rounded-xl
      flex
      flex-row
      relative
      justify-center
    ">
      <label className="
        bg-blue
        text-white
        rounded-3xl
        p-2
        pr-4
        pl-4
        flex
        flex-row
        gap-2
        items-center
        text-sm
        absolute
        top-[-20px]
        font-bold
      ">
        <Image src={icon} alt="" width={15} />
        {label}
      </label>
      <div className="
        flex
        flex-row
        gap-4
        pt-6
        pr-12
        pl-12
        pb-4
      ">
        {
          children
        }
      </div>
    </div>
  )
}
