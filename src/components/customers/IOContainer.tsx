import IO from "@/components/customers/IO";
import PlusSvg from "../../../public/customers/plus.svg"
import ShareSvg from "../../../public/customers/share.svg"
import UserSvg from "../../../public/customers/user.svg"
import ExcelPng from "../../../public/customers/excel.png"
import AccessPng from "../../../public/customers/access.png"
import PDFPng from "../../../public/customers/pdf.png"
import IOItem from "@/components/customers/IOItem";

export default function IOContainer() {
  return (
    <div className="
      flex
      flex-row
      justify-between
      w-full
    ">
      <IO label="ورودی" icon={PlusSvg}>
        <IOItem icon={UserSvg} label="تک نفری" />
        <IOItem icon={ExcelPng} label="گروهی Excel"/>
        <IOItem icon={AccessPng} label="گروهی Access" />
      </IO>
      <IO label="خروجی" icon={ShareSvg}>
        <IOItem icon={ExcelPng} label="خروجی Excel"/>
        <IOItem icon={AccessPng} label="خروجی Access" />
        <IOItem icon={PDFPng} label="خروجی PDF" />
      </IO>
    </div>
  )
}
