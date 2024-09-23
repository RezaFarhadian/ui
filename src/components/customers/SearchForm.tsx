import Image from "next/image"
import SearchSvg from "../../../public/customers/search.svg"

export default function SearchForm() {
  return (
    <div className="
      border-black
      border-[1px]
      rounded-full
      flex
      flex-row
      justify-between
      p-2
      items-center
      w-[80%]
    ">
      <div>
        <Image src={SearchSvg} alt="" width={20} />
      </div>
      <div className="basis-9/12">
        <input type="text" className="
          outline-none
          bg-transparent
          w-full
          placeholder-black
        " placeholder="کد ملی مورد نظر خود را تایپ کنید ..."/>
      </div>
      <div>
        <button className="
          bg-blue
          text-white
          rounded-full
          p-2
          pr-8
          pl-8
        ">
          جست‌وجو کنید
        </button>
      </div>
    </div>
  )
}
