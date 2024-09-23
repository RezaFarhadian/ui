"use client"

export default function Select({
  children,
  label,
  green,
}: {
  children: React.ReactNode,
  label: string | React.ReactNode,
  green?: boolean,
}) {
  return (
    <div className="
      flex
      flex-row
      gap-2
      items-center
      basis-3/12
    ">
      <label>{label}:</label>
      <select className={`
        ${ green ? "border-green" : "border-lightprim"}
        border-[1px]
        rounded-lg
        p-1
        outline-none
        appearance-none
        bg-[url('/customers/arrow_down.svg')]
        bg-no-repeat
        bg-left
        w-full
      `} value="" onChange={() => {}}>
        <option value="" disabled>انتخاب کنید</option>
        {children}
      </select>
    </div>
  )
}
