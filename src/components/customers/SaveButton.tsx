export default function SaveButton({
  disabled,
}: {
  disabled?: boolean
}) {
  return (
    <div className={`
      w-16
      mt-6
      m-auto
      ${ disabled && "opacity-50" }
    `}>
      <button className="
        bg-blue
        rounded-3xl
        text-white
        text-2xl
        p-4
        font-bold
      " disabled={disabled}>
        ذخیره
      </button>
    </div>
  )
}
