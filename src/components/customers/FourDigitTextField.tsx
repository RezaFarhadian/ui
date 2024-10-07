export default function fourDigitTextField({
    label,
    placeholder,
    disabled,
    green,
  }: {
    label: string,
    placeholder?: string,
    disabled?: boolean,
    green?: boolean
  }) {
    return (
      <div className={`
        flex
        flex-row
        gap-2
        items-center
        ${ disabled && "opacity-50" }
      `}>
        <label>{label}:</label>
        <input type="text" placeholder={placeholder} className={`
          ${ green ? "border-green" : "border-lightprim" }
          border-[1px]
          rounded-lg
          p-1
          outline-none
          text-center
          w-12
          font-bold
        `} disabled={disabled} />
      </div>
    )
  }
  