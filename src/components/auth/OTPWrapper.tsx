import OTPDigit from "./OTPDigit";

export default function OTPWrapper() {
  return (
    <div className="
      flex
      flex-row
      gap-8
    ">
      <OTPDigit />
      <OTPDigit />
      <OTPDigit />
      <OTPDigit />
    </div>
  )
}
