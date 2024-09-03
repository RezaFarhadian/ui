import BillFinal from "@/components/cart/BillFinal";
import Deliveree from "@/components/cart/Deliveree";
import PaperContainer2 from "@/components/PaperContainer2";
import PaperLabel2 from "@/components/PaperLabel2";
import { default as SponsorComponent } from "@/components/cart/Sponsor"
import SponsorUpload from "@/components/cart/SponsorUpload";
import TermsOfSponsorship from "@/components/cart/TermsOfSponsorship";
import SponsorshipCommitments from "@/components/cart/SponsorshipCommitments";
import Button from "@/components/Button";

export default function Sponsor() {
  return (
    <PaperContainer2>
      <PaperLabel2>ضمانت کالا</PaperLabel2>

      <div className="
        flex
        flex-row
        justify-between
        w-full
        gap-8
      ">
        <div className="
          basis-8/12
        ">
          <Deliveree disableEdit disableSwitch disablePadding />
          <SponsorComponent altIcon selectOne />
          <TermsOfSponsorship />
          <SponsorshipCommitments />
        </div>
        <div className="
          basis-4/12
        ">
          <BillFinal
            itemsCount={3}
            totalCost={19320000}
            advance={30000000}
            insuranceCost={519000}
            payments={24}
            payment={30000000}
            initialPaymentDate="1402/08/07"
            sponsor="فلان فلانی"
            buyer="فلان فلانی"
            lastPaymentDate="1403/08/07"
          />
          <SponsorUpload />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-4 w-full">
        <div className="basis-1/3"><Button title="انصراف از ضمانت" light fullWidth /></div>
        <div className="basis-1/3"><Button title="پذیرفتن ضمانت" fullWidth /></div>
      </div>
    </PaperContainer2>
  )
}
