import CustomersLabel from "@/components/customers/CustomersLabel";
import IOContainer from "@/components/customers/IOContainer";
import SearchContainer from "./SearchContainer";
import Forms from "./Forms";

export default function CustomersContainer() {
  return (
    <section className="
      bg-white
      mt-12
      ml-12
      mr-12
      p-6
      pr-12
      pl-12
      flex
      flex-col
      gap-16
      items-center
      rounded-3xl
    ">
      <CustomersLabel />
      <IOContainer />
      <SearchContainer />
      <Forms />
    </section>
  )
}
