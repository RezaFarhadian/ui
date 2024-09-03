import PaymentMellatSvg from "../../../../../public/cart/payment_mellat.svg"
import PaymentOption from "@/components/cart/PaymentOptions";
import PaymentTejaratPng from "../../../../../public/cart/payment_tejarat.png"
import PaymentSamanPng from "../../../../../public/cart/payment_saman.png"
import PaymentMelli from "../../../../../public/cart/payment_melli.png"
import PaymentZarinPng from "../../../../../public/cart/payment_zarin.png"
import PaymentOptionContainer from "@/components/cart/PaymentOptionContainer";
import Button from "@/components/Button";
import PaperLabel2 from "@/components/PaperLabel2";
import PaperContainer2 from "@/components/PaperContainer2";

export default function Payment() {
  return (
    <PaperContainer2>
      <PaperLabel2>
        پرداخت
      </PaperLabel2>
      
      <PaymentOptionContainer title="انتخاب درگاه پرداخت">
        <PaymentOption title="پرداخت آنلاین(درگاه بانک ملت)" img={PaymentMellatSvg} />
        <PaymentOption title="پرداخت آنلاین(درگاه بانک سامان )" img={PaymentTejaratPng} />
        <PaymentOption title="پرداخت آنلاین(درگاه بانک تجارت)" img={PaymentSamanPng} />
        <PaymentOption title="پرداخت آنلاین(درگاه بانک ملی)" img={PaymentMelli} />
      </PaymentOptionContainer>

      <PaymentOptionContainer title="انتخاب روش‌های دیگر">
        <PaymentOption title="پرداخت کارت به کارت(زرین پال)" img={PaymentZarinPng} />
        <PaymentOption title="پرداخت کارت به کارت(زرین پال)" img={PaymentZarinPng} />
      </PaymentOptionContainer>
      <div className="flex flex-row justify-between mt-4 w-full">
        <div className="basis-1/3"><Button title="بازگشت به مرحله قبلی" light fullWidth /></div>
        <div className="basis-1/3"><Button title="پرداخت" fullWidth /></div>
      </div>
    </PaperContainer2>
  )
}
