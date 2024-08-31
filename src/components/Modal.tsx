import Image from "next/image"
import CloseSvg from "../../public/cart/close.svg"

export default function Modal({
  children,
  onClose,
}: Readonly<{
  children: React.ReactNode,
  onClose: () => void
}>) {
  return (
    <div className="
      fixed
      z-50
      inset-0
      bg-gray-900
      bg-opacity-60
      overflow-x-hidden
      h-full
      w-full
      px-4
      backdrop-blur
    ">
      <div className="
        relative
        top-20
        mx-auto
        shadow-xl
        rounded-md
        bg-main
        max-w-2xl
      ">
        <div className="
          absolute
          top-8
          right-8
          cursor-pointer
        " onClick={onClose}>
          <Image src={CloseSvg} alt="" width={30} />
        </div>
        <div className="
          overflow-y-hidden
          p-[80px]
          text-center
        ">
          <p>
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}
