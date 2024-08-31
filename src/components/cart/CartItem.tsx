"use client"

import PaperContainer from "../PaperContainer";
import ItemNumber from "./ItemNumber";
import Image from "next/image"
import PlusSvg from "../../../public/cart/plus.svg"
import MinusSvg from "../../../public/cart/minus.svg"
import TrashSvg from "../../../public/cart/trash.svg"
import ArrowDownSvg from "../../../public/cart/arrow-down.svg"
import Dot from "../Dot";
import PriceLabel from "./PriceLabel";
import ZemanatSvg from "../../../public/cart/zemanat.svg"
import GreenTrashSvg from "../../../public/cart/green_trash.svg"
import Button from "../Button";
import ForwardSvg from "../../../public/cart/forward.svg"
import { useState } from "react";
import Modal from "../Modal";

export default function CartItem({
  no,
  imgUrl,
  quantity,
  inColors,
  availableColors,
  defaultColor,
  title,
  merchantName,
  warrantied,
  warrantyMonths,
  warrantyBy,
  inStock,
  discounted,
  discount,
  beforeDiscount,
  afterDiscount,
  insured,
  insurer,
  insuranceCost,
  hideActionButtons,
  invert,
}: Readonly<{
  no: number,
  imgUrl: string,
  quantity: number,
  inColors?: boolean
  availableColors?: {
    name: string,
    code: string,
  }[],
  defaultColor?: {
    name: string,
    code: string,
  },
  title: string,
  merchantName?: React.ReactNode | string,
  warrantied?: boolean,
  warrantyMonths?: number,
  warrantyBy: React.ReactNode | string,
  inStock: boolean
  discounted: boolean,
  discount: number,
  beforeDiscount: number,
  afterDiscount: number,
  insured: boolean,
  insurer: string,
  insuranceCost: number,
  hideActionButtons?: boolean,
  invert?: boolean,
}>) {
  const [modal, setModal] = useState<boolean>(false)
  const onClose = () => setModal(false)
  return (
    <PaperContainer disablePadding outline={!invert} disableOutline={invert}>
      <ItemNumber num={no} />
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
          <Image src={imgUrl} alt="" width={200} height={200} />
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
                  <span className="font-bold">{quantity.toLocaleString("fa")}</span>
                </div>
                <Image src={MinusSvg} alt="" width={15} />
                <Image src={TrashSvg} alt="" width={15} />
              </div>
              {
                inColors && <>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xs font-bold">رنگ انتخابی: </p>
                    <div className="flex flex-row gap-2 items-center">
                      <Dot color={defaultColor!.code}></Dot>
                      <span style={{ color: defaultColor!.code }}>{defaultColor!.name}</span>
                    </div>
                  </div>
                  <div className="bg-lightprim flex flex-row items-center rounded-3xl justify-center">
                    <span className="opacity-50 text-black text-sm">انتخاب رنگ دیگر</span>
                    <Image src={ArrowDownSvg} alt="" />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    {
                      availableColors!.map((color) =>
                        <Dot key={color.name} color={color.code} />
                      )
                    }
                  </div>
                </>
              }
            </div>
          </PaperContainer>
        </div>
        <div className="basis-9/12">
          <PaperContainer disableInnerPadding disablePadding>
            <div className="flex flex-col gap-4">
              <h2 className="text-blue font-bold text-lg">
                {title}
              </h2>
              <p>
                فروشگاه: {merchantName}
              </p>
              {
                warrantied &&
                  <p className="flex flex-row gap-2">
                  <Image src={ZemanatSvg} alt="" /> <span>{warrantyMonths?.toLocaleString("fa")}</span> ماه ضمانت نامه <span>{warrantyBy}</span>
                </p>
              }
              <p className="text-prple text-sm font-bold">
                {inStock ? "موجود در انبار" : "ناموجود"}
              </p>
              { discounted &&
                <div className="
                  flex
                  flex-row
                  gap-2
                  items-center
                ">
                  <PriceLabel price={`${discount.toLocaleString("fa")} تومان تخفیف`} />
                  <div className="opacity-50 line-through">
                    {beforeDiscount.toLocaleString("fa")} تومان
                  </div>
                  <div className="
                    text-blue
                    font-bold
                    text-lg
                  ">
                    {afterDiscount.toLocaleString("fa")} تومان
                  </div>
                </div>
              }
            </div>
          </PaperContainer>
          {
            insured &&
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
                  <div className="bg-main cursor-pointer rounded-3xl text-green p-2 flex flex-row items-center justify-center gap-2 text-sm">
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
                  <div>{insurer}</div>
                  <div className="text-lg font-bold text-green">
                    {insuranceCost.toLocaleString("fa")} تومان
                  </div>
                  <div className="text-xs cursor-pointer" onClick={() => {
                    setModal(true)
                  }}>
                    جزییات
                  </div>
                </div>
              </section>
          }
          {
            modal && <Modal onClose={onClose}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد </Modal>
          }
          {
            !hideActionButtons &&
              <div className="
                flex
                flex-row
                justify-around
                mt-4
              ">
                <Button title="حذف کالا از سبد خرید" icon={TrashSvg} light />
                <Button title="انتقال کالا به سبد خرید بعدی" icon={ForwardSvg} light />
              </div>
          }
        </div>
      </div>
    </PaperContainer>
  )
}
