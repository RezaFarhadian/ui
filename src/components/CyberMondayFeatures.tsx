import Image from "next/image";
import CyberMondayTitle from "../../public/cybermonday_title.png"
import Shans from "../../public/shans.png"
import OffHeadphone from "../../public/off_headphone.png"
import OffMobile from "../../public/off_mobile.png"
import OffLaptop from "../../public/off_laptop.png"
import ViewButton from "./ViewButton";

export default function CyberMondayFeatures() {
  return (
    <div className="
      flex
      flex-col
      items-center
      relative
    ">
      <Image
        src={CyberMondayTitle}
        alt=""
        className="z-10"
      />
      <div className="
        w-[500px]
        h-[40px]
        bg-lightprim
        absolute
        top-[120px]
        z-0
        rounded-3xl
      "></div>
      <div className="
        flex
        flex-row
        flex-wrap
        gap-4
        items-center
        justify-center
      ">
        <div>
          <Image src={Shans} width={600} alt="" />
        </div>
        <div className="relative">
          <Image src={OffHeadphone} width={600} alt="" />
          <div className="absolute left-[60px] bottom-[25px]">
            <ViewButton/>
          </div>
        </div>
        <div className="relative">
          <Image src={OffMobile} width={600} alt="" />
          <div className="absolute right-[50px] bottom-[25px]">
            <ViewButton/>
          </div>
        </div>
        <div className="relative">
          <Image src={OffLaptop} width={600} alt="" />
          <div className="absolute left-[60px] bottom-[25px]">
            <ViewButton invert/>
          </div>
        </div>
      </div>
    </div>
  )
}
