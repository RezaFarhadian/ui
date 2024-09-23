export default function TextField({
  label,
  placeholder,
  disabled,
  fullWidth,
  dir,
  green,
}: {
  label: string | React.ReactNode,
  placeholder?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  dir?: string,
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
      <label>{label}:</label>
      <input type="text" placeholder={placeholder} className={`
        ${ green ? "border-green" : "border-lightprim"}
        border-[1px]
        rounded-lg
        p-1
        outline-none
        ${ fullWidth && "w-full"}
      `} disabled={disabled} dir={dir} />
    </div>
  )
}
