export default function InputField({
  title,
  placeholder,
}: Readonly<{
  title: string,
  placeholder?: string
}>) {
  return (
    <div className="
      flex
      flex-row
      justify-between
      gap-4
    ">
      <label>{title}:</label>
      <input type="text" className="
        outline-none
        rounded-3xl
        bg-lightprim
      " placeholder={placeholder}/>
    </div>
  )
}
