export default function checkbox({
  onChange,
  color,
  label,
}: {
  onChange?: (e: any) => void,
  color: string,
  label: string,
}) {
  let bg
  let border
  let afterBg
  switch (color) {
    case "green":
      bg = "peer-checked:bg-green"
      border = "border-green"
      afterBg = "after:bg-green"
      break
    case "prple":
      bg = "peer-checked:bg-prple"
      border = "border-prple"
      afterBg = "after:bg-prple"
      break
    case "blue":
      bg = "peer-checked:bg-blue"
      border = "border-blue"
      afterBg = "after:bg-blue"
      break
  }

  return (
    <label className="
      inline-flex
      items-center
      cursor-pointer
      gap-2
    ">
      <div>
        {label}:
      </div>
      <input type="checkbox" className="
        sr-only
        peer
      " onChange={onChange} />
      <div className={`
        relative
        w-11
        h-6
        bg-white
        border-2
        ${border}
        rounded-full
        peer
        peer-checked:after:translate-x-full
        peer-checked:after:start-[6px]
        rtl:peer-checked:after:-translate-x-full
        peer-checked:after:bg-white
        ${bg}
        after:content-['']
        after:absolute
        after:top-0.5
        after:start-[2px]
        ${afterBg}
        after:rounded-full
        after:h-4
        after:w-4
        after:transition-all
      `}></div>
    </label>
  )
}
