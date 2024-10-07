export default function Radio({
  label,
  name,
  value,
  green,
}: {
  label: string,
  name: string,
  value: string,
  green?: boolean,
}) {
  return (
    <div className="
      flex
      flex-row
      gap-1
      items-center
    ">
      <input type="radio" name={name} value={value} className={`
        ${green ? "accent-green" : ""}
        h-6
        w-6
      `} />
      <label>{label}</label>
    </div>
  )
}
