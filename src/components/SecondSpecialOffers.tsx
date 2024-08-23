import Image from "next/image";
import SpecialAndroid from "../../public/special_android.png"
import SpecialPros from "../../public/special_pros.png"
import ViewButton from "./ViewButton";

export default function SecondSpecialOffers() {
  return (
    <div className="flex flex-row gap-4 mt-6 p-12">
      <div className="basis-1/2 relative">
        <Image src={SpecialAndroid} alt="" />
        <div className="absolute right-[40px] bottom-[30px]">
          <ViewButton />
        </div>
      </div>
      <div className="basis-1/2 relative">
        <Image src={SpecialPros} alt="" />
        <div className="absolute left-[40px] bottom-[20px]">
          <ViewButton invert/>
        </div>
      </div>
    </div>
  )
}
