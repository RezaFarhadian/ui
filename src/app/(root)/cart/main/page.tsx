import ItemNumber from "@/components/cart/ItemNumber";
import PaperContainer from "@/components/PaperContainer";
import Image from "next/image"
import PlusSvg from "../../../../../public/cart/plus.svg"
import MinusSvg from "../../../../../public/cart/minus.svg"
import TrashSvg from "../../../../../public/cart/trash.svg"
import Dot from "@/components/Dot";
import ArrowDownSvg from "../../../../../public/cart/arrow-down.svg"
import Button from "@/components/Button";
import OutlinePlusSvg from "../../../../../public/cart/outline-plus.svg"
import ForwardSvg from "../../../../../public/cart/forward.svg"
import DiscountCode from "@/components/cart/DiscountCode";
import Switch from "@/components/Switch";
import KalaLotus from "@/components/KalaLotus";
import ZemanatSvg from "../../../../../public/cart/zemanat.svg"

export default function MainCart() {
  return (
    <div>
      <p>
        <b className="font-extrabold">سبد خرید</b>
        <span className="text-sm font-bold text-prple">2 قلم کالا</span>
      </p>
      <div className="
        flex
        flex-row
        gap-4
        mt-6
      ">
        <div className="basis-8/12">
          <div className="flex flex-row justify-between">
            <Button title="افزودن کالای دیگر به سبد خرید " icon={OutlinePlusSvg} />
            <Button title="حذف تمامی کالاها از سبد خرید" outline icon={TrashSvg}/>
          </div>
          <PaperContainer disablePadding outline>
            <ItemNumber num={1} />
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
                      <div className="
                        rounded-3xl
                        bg-prple
                        text-main
                        w-[200px]
                        text-center
                      ">
                        600.000 تومان تخفیف
                      </div>
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
                      <div className="bg-main rounded-3xl text-green p-2">
                        حذف بیمه
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
                  <div className="
                    flex
                    flex-row
                    justify-around
                    mt-4
                  ">
                    <Button title="حذف کالا از سبد خرید" icon={TrashSvg} outline />
                    <Button title="انتقال کالا به سبد خرید بعدی" icon={ForwardSvg} outline />
                  </div>
              </div>
            </div>
          </PaperContainer>
          <PaperContainer disablePadding outline>
            <ItemNumber num={2} />
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
                      <div className="
                        rounded-3xl
                        bg-prple
                        text-main
                        w-[200px]
                        text-center
                      ">
                        600.000 تومان تخفیف
                      </div>
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
                      <div className="bg-main rounded-3xl text-green p-2">
                        حذف بیمه
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
                  <div className="
                    flex
                    flex-row
                    justify-around
                    mt-4
                  ">
                    <Button title="حذف کالا از سبد خرید" icon={TrashSvg} outline />
                    <Button title="انتقال کالا به سبد خرید بعدی" icon={ForwardSvg} outline />
                  </div>
              </div>
            </div>
          </PaperContainer>
        </div>
        <div className="basis-4/12 flex flex-col items-center w-full font-bold">
          <Button outline title="انتقال تمام کالاها به سبد خرید بعدی" icon={ForwardSvg} />
          <PaperContainer disableInnerPadding disablePadding outline label={<span className="mb-6">صورت حساب</span>}>
            <p className="
              mt-4
              text-center
              text-prple
              text-sm
            ">3 قلم کالا</p>
            <div className="flex flex-col gap-4 text-sm mt-4">
              <div className="
                flex
                flex-row
                justify-between
              ">
                <div>قیمت کالاها</div>
                <div>13.129.000 تومان</div>
              </div>
              <div className="
                flex
                flex-row
                justify-between
              ">
                <div>بسته‌بندی و ارسال</div>
                <div>رایگان</div>
              </div>
              <div className="
                flex
                flex-row
                justify-between
                text-[#16742A]
                border-b-[1px]
                border-blue
                pb-4
              ">
                <div>بیمه</div>
                <div>519.000 تومان</div>
              </div>
              <div className="
                flex
                flex-row
                justify-between
                text-prple
              ">
                <div>تخفیف <KalaLotus /></div>
                <div>139.000 تومان</div>
              </div>
              <div className="
                flex
                flex-row
                justify-between
              ">
                <div>کد تخفیف مشتری</div>
                <div><DiscountCode /></div>
              </div>
              <div className="
                border-b-[1px]
                border-blue
                pb-6
              ">
                <Button color="prple" fullWidth title="اعمال تخفیف" />
              </div>
              <div className="
                flex
                flex-row
                justify-between
                font-extrabold
                text-blue
              ">
                <div>مبلغ قابل پرداخت (نقدی)</div>
                <div>13.129.000 تومان</div>
              </div>
            </div>
          </PaperContainer>
          <PaperContainer disableInnerPadding disablePadding outline label={<span className="mb-6">نحوه پرداخت</span>}>
            <p className="text-xs font-bold">
              لطفا نحوه پرداخت را انتخاب کنید: 
            </p>
            <div className="
              flex 
              flex-row
              items-start
              justify-center
              gap-2
              mt-4
              border-b-[1px]
              border-blue
              pb-2
            ">
              <div>نقدی</div>
              <div><Switch /></div>
              <div className="
                text-blue
              ">قسطی</div>
            </div>
            <div className="flex flex-col text-sm mt-4">
              <div className="
                flex
                flex-row
                justify-between
              ">
                <div>مقدار پیش پرداخت: </div>
                <div>
                  <input type="text" className="
                    outline-none
                    bg-lightprim
                    rounded-lg
                    text-center
                  " dir="ltr" placeholder="30 000 000" /> تومان
                </div>
              </div>
              <div className="flex flex-col gap-4 text-sm mt-4">
                <div className="
                  flex
                  flex-row
                  justify-between
                  border-b-[1px]
                  border-blue
                ">
                  <div>تعداد اقساط: </div>
                  <div className="
                    flex
                    flex-row
                    gap-2
                    justify-center
                    items-center
                  ">
                    <Image src={PlusSvg} alt="" width={20}/>
                    <div className="border-[1px] border-lightprim rounded-lg p-1">24</div>
                    <Image src={MinusSvg} alt="" width={20}/>
                    <div>ماه</div>
                  </div>
                </div>
                <div className="
                  flex
                  flex-row
                  justify-between
                ">
                  <div>مبلغ قسط ماهیانه: </div>
                  <div className="flex flex-row gap-2">
                    <div className="bg-prple rounded-3xl text-main pr-2 pl-2" dir="ltr">30 000 000</div>
                    <div>تومان</div>
                  </div>
                </div>
                <div className="
                  flex
                  flex-row
                  justify-between
                ">
                  <div>سود سفارش: </div>
                  <div className="flex flex-row gap-2">
                    <div className="bg-prple rounded-3xl text-main pr-2 pl-2 text-xs font-medium" dir="ltr">30 000 000</div>
                    <div>تومان</div>
                  </div>
                </div>
                <div className="
                  flex
                  flex-row
                  justify-between
                ">
                  <div>تاریخ پرداخت قسط اول: </div>
                  <div className="bg-prple rounded-3xl text-main pr-2 pl-2 text-xs font-medium" dir="ltr">30 000 000</div>
                </div>
                <Button color="blue" fullWidth title="تایید و ادامه سفارش" />
              </div>
            </div>
          </PaperContainer>
        </div>
      </div>
    </div>
  )
}
