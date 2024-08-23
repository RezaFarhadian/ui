export default function AuthPageTitle({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h1 className="font-bold text-4xl text-blue">{children}</h1>
  )
}
