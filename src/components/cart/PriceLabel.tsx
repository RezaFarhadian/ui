export default function PriceLabel({
  price,
  color
}: Readonly<{
  price: string,
  color?: string
}>) {
  const defaultColor = color || "prple"
  return (
    <div className={`
      rounded-3xl
      bg-${defaultColor}
      text-main
      p-2
      text-center
      inline
    `}>
      {price}
    </div>
  )
}
