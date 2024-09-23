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
      gap-2
      items-center
    ">
      <input type="radio" name={name} value={value} className={ green ? "accent-green" : ""} />
      <label>{label}</label>
    </div>
  )
}
