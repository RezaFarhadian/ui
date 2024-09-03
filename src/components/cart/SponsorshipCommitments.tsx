import PaperContainer from "../PaperContainer";
import TrustSvg from "../../../public/cart/trust_filled.svg"
import Image from "next/image";
import Commitment from "./Commitment";

export default function SponsorshipCommitments() {
  return (
    <PaperContainer
      label={<span className="mb-6 font-extrabold">شرایط ضمانت</span>}
      outline
      disablePadding
    >
      <div className="flex flex-row gap-2 items-center">
        <div className="basis-1/12">
          <Image src={TrustSvg} alt="" />
        </div>
        <div className="basis-11/12 p-6 flex flex-col gap-6 border-prple border-[2px] rounded-3xl font-bold text-sm">
          <p>
            ضامن گرامی لطفا برای پذیرش ضمانت , تعهدات زیر را انتخاب فرمایید:
          </p>
          <Commitment commitment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون  چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون" />
          <Commitment commitment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون  چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون" />
          <Commitment commitment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون  چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون" />
          <Commitment commitment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون  چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون" />
        </div>
      </div>
    </PaperContainer>
  )
}
