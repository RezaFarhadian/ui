import FourDigitTextField from "./FourDigitTextField";
import TwoDigitTextField from "./TwoDigitTextField";

export default function DateField({
  label,
  disabled,
  green,
}: {
  label: string | React.ReactNode,
  disabled?: boolean,
  green?: boolean,
}) {
  return (
    <div className={`
      flex
      flex-row
      gap-2
      items-center
      ${ disabled && "opacity-50" }
    `}>
      <label>{label}: </label>
      <div className="
        flex
        flex-row
        gap-1
      ">
        <TwoDigitTextField label="روز" placeholder="00" disabled={disabled} green={green} />
        <TwoDigitTextField label="ماه" placeholder="00" disabled={disabled} green={green} />
        <FourDigitTextField label="سال" placeholder="1402" disabled={disabled} green={green} />
      </div>
    </div>
  )
}
