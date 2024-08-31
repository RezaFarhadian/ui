import TrashSvg from "../../../../public/cart/trash.svg"
import Button from "@/components/Button";
import OutlinePlusSvg from "../../../../public/cart/outline-plus.svg"
import ForwardSvg from "../../../../public/cart/forward.svg"
import KalaLotus from "@/components/KalaLotus";
import BillDraft from "@/components/cart/BillDraft";
import HowToPay from "@/components/cart/HowToPay";
import CartItem from "@/components/cart/CartItem";

const CartItemsProps = {
  no: 1,
  imgUrl: "/iphone.png",
  quantity: 1,
  inColors: true,
  availableColors: [{
    name: "بنفش",
    code: "#462697",
  }, {
    name: "سیاه",
    code: "#000000",
  }, {
    name: "سبز",
    code: "#00FF29",
  }, {
    name: "قرمز",
    code: "#FF0000",
  }],
  defaultColor: {
    name: "بنفش",
    code: "#462697",
  },
  title: "گوشی موبایل ایفون 13 ظرفیت 256 گیگ رم 8 گیگ",
  merchantName: <KalaLotus />,
  warrantied: true,
  warrantyMonths: 18,
  warrantyBy: <KalaLotus />,
  inStock: true,
  discounted: true,
  discount: 600000,
  beforeDiscount: 13129000,
  afterDiscount: 13129000,
  insured: true,
  insurer: "بیمه یک ساله سامان",
  insuranceCost: 958000,
  hideActionButtons: true,
  invert: false,
}

export default function Cart() {
  return (
    <div className="relative">
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
          <CartItem {...CartItemsProps} />
          <CartItem {...CartItemsProps} />
        </div>
        <div className="basis-4/12 flex flex-col items-center w-full font-bold">
          <Button outline title="انتقال تمام کالاها به سبد خرید بعدی" icon={ForwardSvg} />
          <div className="sticky top-0 w-full">
            <BillDraft
              itemsCount={3}
              initialCost={13129000}
              insuranceCost={519000}
              lotusDiscount={139000}
              finalCost={13129000}
            />
            <HowToPay />
          </div>
        </div>
      </div>
    </div>
  )
}
