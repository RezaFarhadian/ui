export default function SimpleButton({
  title,
  ...props
}: {
  title: string
}) {
  return (
    <button className="bg-lightprim p-2 pl-10 pr-10 rounded-3xl">{title}</button>
  )
}