import Image from "next/image"
import InstantDelivery from "../../public/special_instant_delivery.png"
import Gurantee from "../../public/special_gurantee.png"
import Headphones from "../../public/special_headphone.png"
import ViewButton from "./ViewButton"

export default function SpecialOffers() {

  return (
    <div className="flex flex-row gap-4 mt-6 p-12">
      <div className="basis-1/2 relative">
        <Image src={Gurantee} alt=""/>
        <div className="absolute bottom-[80px] left-[50px]">
          <ViewButton invert/>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-between relative">
        <div>
          <Image src={Headphones} alt="" />
          <div className="absolute top-[120px] left-[20px]">
            <ViewButton />
          </div>
        </div>
        <div>
          <Image src={InstantDelivery} alt="" />
          <div className="absolute bottom-[30px] right-[50px]">
            <ViewButton invert/>
          </div>
        </div>
      </div>
    </div>
  )
}
