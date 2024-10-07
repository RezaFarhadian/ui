export default function Form({
  name,
  children,
  box,
  topBorder,
}: {
  name: string | React.ReactNode,
  children: React.ReactNode,
  box?: boolean,
  topBorder?: boolean,
}) {
  return (
    <div className={`
      border-b-[1px]
      border-b-lightprim
      pb-12
      mt-8
      flex
      flex-col
      gap-8
      ${ box && "border-[1px] border-lightprim p-4 pb-4 rounded-3xl" }
      ${ topBorder && "border-t-[1px] border-t-lightprim pt-12"}
    `}>
      <label className="text-blue text-lg">{name}: </label>
      <div className="
        flex
        flex-row
        flex-wrap
        gap-4
        justify-between
      ">
        {children}
      </div>
    </div>
  )
}
