import Button from "../Button";
import PaperContainer from "../PaperContainer";
import ItemSummary from "./ItemSummary";
import ArrowLeftSvg from "../../../public/cart/arrow_left.svg"
import Image from "next/image";

export default function CartSummary() {
  return (
    <PaperContainer
      disableInnerPadding
      disablePadding
      outline
      label={<span className="mb-6 font-extrabold">خلاصه سفارش</span>}
    >
      <div className="flex flex-row gap-4">
        <ItemSummary no={1} title="iphon 13 pro" color={{ name: "بنفش", code: "#462697" }} quantity={1} insurance/>
        <ItemSummary no={2} title="iphon 13 pro" color={{ name: "بنفش", code: "#462697" }} quantity={1} insurance/>
        <ItemSummary no={3} title="iphon 13 pro" color={{ name: "بنفش", code: "#462697" }} quantity={1} insurance/>
        <ItemSummary no={4} title="iphon 13 pro" color={{ name: "بنفش", code: "#462697" }} quantity={1} insurance/>
      </div>
      <br />
      <div className="flex flex-row justify-between">
        <Button light title="بازگشت/ویرایش" />
        <div className="flex flex-row gap-4 items-center opacity-60">
          نمایش بیشتر
          <Image src={ArrowLeftSvg} alt="" />
        </div>
      </div>
    </PaperContainer>
  )
}