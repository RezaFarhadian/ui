export default function RadioGroup({
  children,
  label,
}: {
  children: React.ReactNode,
  label: string,
}) {
  return (
    <div className="
      flex
      flex-row
      gap-1
      items-center
    ">
      <label>{label}:</label>
      <div className="
        flex
        flex-row
        gap-4
        items-center
      ">
        {children}
      </div>
    </div>
  )
}
