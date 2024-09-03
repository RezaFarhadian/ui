import PaperContainer from "../PaperContainer";
import MelliPlaceholder from "../../../public/cart/melli_placeholder.png"
import Image from "next/image";
import Button from "../Button";
import BlackButton from "./BlackButton";
import UploadSvg from "../../../public/cart/upload.svg"
import InfoTipSvg from "../../../public/cart/info_tip.svg"

export default function SponsorUpload() {
  return (
    <PaperContainer
      disableInnerPadding
      disablePadding
      outline
      label={<span className="mb-6 font-extrabold">احراز هویت ضامن</span>}
    >
      <div className="flex flex-col gap-4 items-center">
        <Image src={MelliPlaceholder} alt="" />
        <BlackButton label="بارگزاری تصویر کارت ملی" icon={UploadSvg} />
        <div className="flex flex-row items-center gap-4">
          <Image src={InfoTipSvg} alt="" />
          <p className="opacity-60 text-sm">بارگذاری تصویر کارت ملی برای احراز هویت ضامن 
          و پذیرفتن ضمانت الزامی است.</p>
        </div>
      </div>
    </PaperContainer>
  )
}
