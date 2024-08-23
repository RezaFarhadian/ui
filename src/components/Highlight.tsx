import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export default function Hightlight({ image, label }: {
  image: StaticImageData,
  label: string,
}) {
  return (
    <Link href="" className="
      flex
      flex-col
      gap-4
      items-center
      transition-all
      hover:text-blue
    ">
      <div
        className="
          bg-[url('/highlight_bg.svg')]
          transition-all
          duration-700
          hover:bg-[url('/highlight_hover_bg.svg')]
          bg-no-repeat
          bg-right
          h-[10rem]
          w-[10rem]
          flex
          items-center
          justify-center
        "
      >
        <Image
          src={image}
          alt=""
          width={80}
        />
      </div>
      <div className="
        font-bold
      ">
        {
          label
        }
      </div>
    </Link>
  )
}