import Button from "@/components/Button";
import PlusSvg from "../../../../../public/cart/plus.svg"
import TrashSvg from "../../../../../public/cart/trash.svg"
import ForwardLightSvg from "../../../../../public/cart/forward_light.svg"
import PriceLabel from "@/components/cart/PriceLabel";
import KalaLotus from "@/components/KalaLotus";
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
  invert: true,
}

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
        <CartItem {...CartItemsProps} />
        <CartItem {...CartItemsProps} />
      </div>
    </div>
  )
}
