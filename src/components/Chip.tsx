import Link from "next/link"

export default function Chip({
  label,
  href
}: {
  label: string,
  href: string,
}) {
  return (
    <Link href={href}>
      <div className="p-4 bg-main rounded-2xl text-center">
        {label}
      </div>
    </Link>
  )
}