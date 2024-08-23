import Image from "next/image";
import BannerItems from "../../public/banner_items.png"
import LotusActions from "./LotusActions";

export default function MainBanner() {
  return (
    <div
      className="
        bg-gradi
        p-6
        flex
        flex-row-reverse
        items-end
      "
    >
      <Image
        src={BannerItems}
        alt=""
        width={800}
        priority
      />
      <LotusActions />
    </div>
  )
}
