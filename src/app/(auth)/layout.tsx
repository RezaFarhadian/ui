import Image from "next/image"
import Logo from "../../../public/lotus_lg.png"
import "@/app/(root)/globals.css";

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-main flex flex-row m-0">
        <main className="
          basis-3/5
          flex
          flex-col
          items-center
          justify-center
          gap-8
        ">
          {children}
        </main>
        <aside className="
          basis-2/5
          bg-darkprim
          min-h-screen
        ">
          <Image width={300} className="m-auto mt-[30vh]" src={Logo} alt="" />
        </aside>
      </body>
    </html>
  )
}