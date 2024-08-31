import Button from "@/components/Button";
import Address from "@/components/cart/Address";
import BillFinal from "@/components/cart/BillFinal";
import CartSummary from "@/components/cart/CartSummary";
import Deliveree from "@/components/cart/Deliveree";
import Sponsor from "@/components/cart/Sponsor";

export default function Checkout() {
  return (
    <section className="w-full flex flex-col mt-[-60px]">
      <Deliveree />
      <Address />
      <Sponsor />
      <div className="flex flex-row justify-between gap-12">
        <div className="basis-8/12">
          <CartSummary />
        </div>
        <div className="basis-4/12">
          <BillFinal
            itemsCount={3}
            totalCost={19320000}
            advance={30000000}
            insuranceCost={519000}
            payments={24}
            payment={30000000}
            initialPaymentDate="1402/08/07"
            sponsor="فلان فلانی"
          />
        </div>
      </div>
      <div className="
        flex
        flex-row
        justify-between
        mt-8
      ">
        <Button title="بازگشت به مرحله قبلی" light />
        <Button title="ثبت نهایی سفارش" />
      </div>
    </section>
  )
}
