export default function SearchTabButton({ label, disabled }: {
  label: string,
  disabled?: boolean
}) {
  return (
    <div className={`
      border-blue
      border-[1px]
      rounded-lg
      p-2
      cursor-pointer
      ${ disabled ?
        "opacity-50 text-gray" :
        "opacity-100 text-blue"
      }
    `}>
      {
        label
      }
    </div>
  )
}
