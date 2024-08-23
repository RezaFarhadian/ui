import Image from "next/image";
import FooterLogo from "../../public/footer_logo.png"
import Enamad from "../../public/enamaad.png"
import Samandehi from "../../public/samandehi.png"
import Link from "next/link";

export default function BottomAbout() {
  return (
    <div className="
      basis-1/3
      mt-8
    ">
      <Link href="" className="
        flex
        flex-row
        gap-4
      ">
        <h1 className="text-2xl">درباره لوتوس کالا</h1>
        <Image
          src={FooterLogo}
          alt=""
          width={150}
        />
      </Link>
      <p className="text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
      </p>
      <div className="
        flex
        flex-row
        items-center
        justify-center
      ">
        <Link href="">
          <Image
            src={Enamad}
            alt=""
          />
        </Link>
        <Link href="">
          <Image
            src={Samandehi}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
