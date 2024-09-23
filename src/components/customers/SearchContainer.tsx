import SearchForm from "./SearchForm"
import SearchTabButton from "./SearchTabButton"

export default function SearchContainer() {
  return (
    <div className="
      flex
      flex-col
      gap-4
      items-center
    ">
      <div className="
        flex
        flex-row
        gap-4
      ">
        <SearchTabButton label="جست و جو بر اساس کد ملی" />
        <SearchTabButton label="جست و جو بر اساس شماره پرسنلی" disabled />
        <SearchTabButton label="جست و جو بر اساس نام و نام خانوادگی" disabled />
        <SearchTabButton label="جست و جو بر اساس شماره تماس" disabled />
      </div>
      <SearchForm />
    </div>
  )
}
