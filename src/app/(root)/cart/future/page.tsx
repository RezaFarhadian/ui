import Image from "next/image"
import Button from "@/components/Button";
import PlusSvg from "../../../../../public/cart/plus.svg"
import TrashSvg from "../../../../../public/cart/trash.svg"
import ForwardLightSvg from "../../../../../public/cart/forward_light.svg"
import PriceLabel from "@/components/cart/PriceLabel";
import PaperContainer from "@/components/PaperContainer";
import Dot from "@/components/Dot";
import KalaLotus from "@/components/KalaLotus";
import ItemNumber from "@/components/cart/ItemNumber";
import MinusSvg from "../../../../../public/cart/minus.svg"
import ArrowDownSvg from "../../../../../public/cart/arrow-down.svg"
import ZemanatSvg from "../../../../../public/cart/zemanat.svg"
import GreenTrashSvg from "../../../../../public/cart/green_trash.svg"

export default function Future() {
  return (
    <div className="pl-16 pr-16 pt-8">
      <div className="flex flex-row items-center gap-2">
        <b>سبد خرید بعدی </b>
        <span className="text-prple">7 قلم کالا</span>
        <PriceLabel color="blue" price="جمع قیمت کالاها: 9.550.000 تومان" />
      </div>
      <div className="flex flex-row gap-2 justify-between mt-12">
        <Button icon={PlusSvg} title={"افزودن کالای دیگر به این سبد"} light />
        <Button icon={TrashSvg} title={"حذف تمامی کالاها از این سبد "} light />
        <Button icon={ForwardLightSvg} title="انتقال تمام کالاها به سبد خرید اصلی" />
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <PaperContainer disablePadding disableOutline>
          <ItemNumber num={1} bgWhite />
          <div className="
            flex
            flex-row
            w-full
            gap-6
          ">
            <div className="
              basis-3/12
              flex
              flex-col
            ">
              <Image src="/iphone.png" alt="" width={200} height={200} />
              <PaperContainer disablePadding disableInnerPadding outline>
                <div className="
                  flex
                  flex-col
                  gap-2
                ">
                  <div className="
                    flex
                    flex-row
                    gap-1
                    bg-lightprim
                    items-center
                    rounded-3xl
                    justify-center
                    p-2
                  ">
                    <span className="text-xs font-bold">تعداد: </span>
                    <Image src={PlusSvg} alt="" width={15} />
                    <div className="
                      bg-main
                      rounded-3xl
                      h-5
                      w-5
                      p-2
                      flex-row
                      flex
                      justify-center
                      items-center
                    ">
                      <span className="font-bold">1</span>
                    </div>
                    <Image src={MinusSvg} alt="" width={15} />
                    <Image src={TrashSvg} alt="" width={15} />
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xs font-bold">رنگ انتخابی: </p>
                    <div className="flex flex-row gap-2 items-center">
                      <Dot color="#462697"></Dot>
                      <span style={{ color: "#462697" }}>بنفش</span>
                    </div>
                  </div>
                  <div className="bg-lightprim flex flex-row items-center rounded-3xl">
                    <span className="opacity-50 text-black text-sm">انتخاب رنگ دیگر</span>
                    <Image src={ArrowDownSvg} alt="" />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <Dot color="#462697" />
                    <Dot color="#000000" />
                    <Dot color="#00FF29" />
                    <Dot color="#FF0000" />
                  </div>
                </div>
              </PaperContainer>
            </div>
            <div className="basis-9/12">
              <PaperContainer disableInnerPadding disablePadding>
                <div className="flex flex-col gap-4">
                  <h2 className="text-blue font-bold text-lg">
                    گوشی موبایل ایفون 13 ظرفیت 256 گیگ رم 8 گیگ
                  </h2>
                  <p>
                    فروشگاه: <KalaLotus />
                  </p>
                  <p className="flex flex-row gap-2">
                    <Image src={ZemanatSvg} alt="" /> 18 ماه ضمانت نامه <span><KalaLotus /></span>
                  </p>
                  <p className="text-prple text-sm font-bold">
                    موجود در انبار
                  </p>
                  <div className="
                    flex
                    flex-row
                    gap-2
                  ">
                    <PriceLabel price="600.000 تومان تخفیف" />
                    <div className="opacity-50 line-through">13.129.000 تومان</div>
                      <div className="
                        text-blue
                        font-bold
                        text-lg
                      ">
                        13.129.000 تومان
                      </div>
                    </div>
                  </div>
              </PaperContainer>
            <section className={`
                border-2
                bg-greenLight
                border-green
                p-8
                rounded-3xl
                mt-8
              `}>
                <div className="
                  flex
                  flex-row
                  justify-between
                  items-center
                ">
                  <div className="text-sm">بیمه: </div>
                  <div className="bg-main rounded-3xl text-green p-2 flex flex-row items-center justify-center gap-2 text-sm">
                    <Image src={GreenTrashSvg} alt="" /> حذف بیمه
                  </div>
                </div>
                <div className="
                  flex
                  flex-row
                  justify-between
                  items-center
                  mt-4
                ">
                  <div>بیمه یک ساله سامان</div>
                  <div className="text-lg font-bold text-green">
                    958.000 تومان
                  </div>
                  <div className="text-xs">
                    جزییات
                  </div>
                </div>
              </section>
              {/*<div className="
                flex
                flex-row
                justify-around
                mt-4
              ">
                <Button title="حذف کالا از سبد خرید" icon={TrashSvg} light />
                <Button title="انتقال کالا به سبد خرید بعدی" icon={ForwardSvg} light />
              </div>*/}
            </div>
          </div>
        </PaperContainer>
        <PaperContainer disablePadding disableOutline>
          <ItemNumber num={2} bgWhite />
          <div className="
            flex
            flex-row
            w-full
            gap-6
          ">
            <div className="
              basis-3/12
              flex
              flex-col
            ">
              <Image src="/iphone.png" alt="" width={200} height={200} />
              <PaperContainer disablePadding disableInnerPadding outline>
                <div className="
                  flex
                  flex-col
                  gap-2
                ">
                  <div className="
                    flex
                    flex-row
                    gap-1
                    bg-lightprim
                    items-center
                    rounded-3xl
                    justify-center
                    p-2
                  ">
                    <span className="text-xs font-bold">تعداد: </span>
                    <Image src={PlusSvg} alt="" width={15} />
                    <div className="
                      bg-main
                      rounded-3xl
                      h-5
                      w-5
                      p-2
                      flex-row
                      flex
                      justify-center
                      items-center
                    ">
                      <span className="font-bold">1</span>
                    </div>
                    <Image src={MinusSvg} alt="" width={15} />
                    <Image src={TrashSvg} alt="" width={15} />
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xs font-bold">رنگ انتخابی: </p>
                    <div className="flex flex-row gap-2 items-center">
                      <Dot color="#462697"></Dot>
                      <span style={{ color: "#462697" }}>بنفش</span>
                    </div>
                  </div>
                  <div className="bg-lightprim flex flex-row items-center rounded-3xl">
                    <span className="opacity-50 text-black text-sm">انتخاب رنگ دیگر</span>
                    <Image src={ArrowDownSvg} alt="" />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <Dot color="#462697" />
                    <Dot color="#000000" />
                    <Dot color="#00FF29" />
                    <Dot color="#FF0000" />
                  </div>
                </div>
              </PaperContainer>
            </div>
            <div className="basis-9/12">
              <PaperContainer disableInnerPadding disablePadding>
                <div className="flex flex-col gap-4">
                  <h2 className="text-blue font-bold text-lg">
                    گوشی موبایل ایفون 13 ظرفیت 256 گیگ رم 8 گیگ
                  </h2>
                  <p>
                    فروشگاه: <KalaLotus />
                  </p>
                  <p className="flex flex-row gap-2">
                    <Image src={ZemanatSvg} alt="" /> 18 ماه ضمانت نامه <span><KalaLotus /></span>
                  </p>
                  <p className="text-prple text-sm font-bold">
                    موجود در انبار
                  </p>
                  <div className="
                    flex
                    flex-row
                    gap-2
                  ">
                    <PriceLabel price="600.000 تومان تخفیف" />
                    <div className="opacity-50 line-through">13.129.000 تومان</div>
                      <div className="
                        text-blue
                        font-bold
                        text-lg
                      ">
                        13.129.000 تومان
                      </div>
                    </div>
                  </div>
              </PaperContainer>
            <section className={`
                border-2
                bg-greenLight
                border-green
                p-8
                rounded-3xl
                mt-8
              `}>
                <div className="
                  flex
                  flex-row
                  justify-between
                  items-center
                ">
                  <div className="text-sm">بیمه: </div>
                  <div className="bg-main rounded-3xl text-green p-2 flex flex-row items-center justify-center gap-2 text-sm">
                    <Image src={GreenTrashSvg} alt="" /> حذف بیمه
                  </div>
                </div>
                <div className="
                  flex
                  flex-row
                  justify-between
                  items-center
                  mt-4
                ">
                  <div>بیمه یک ساله سامان</div>
                  <div className="text-lg font-bold text-green">
                    958.000 تومان
                  </div>
                  <div className="text-xs">
                    جزییات
                  </div>
                </div>
              </section>
              {/*<div className="
                flex
                flex-row
                justify-around
                mt-4
              ">
                <Button title="حذف کالا از سبد خرید" icon={TrashSvg} light />
                <Button title="انتقال کالا به سبد خرید بعدی" icon={ForwardSvg} light />
              </div>*/}
            </div>
          </div>
        </PaperContainer>
      </div>
    </div>
  )
}
