import Link from "next/link";
import TopNavListItem from "./TopNavListItem";

export default function TopNav() {
  return (
    <ul className="
      flex
      flex-row
      gap-8
      mt-[-30px]
      mr-16
      text-blue
    ">
      <Link href=""><TopNavListItem>تلفن همراه</TopNavListItem></Link>
      <Link href=""><TopNavListItem>لپ تاپ و تبلت</TopNavListItem></Link>
      <Link href=""><TopNavListItem>هندزفری و ساعت</TopNavListItem></Link>
      <Link href=""><TopNavListItem>کامپیوتر و شبکه</TopNavListItem></Link>
      <Link href=""><TopNavListItem>کارکرده(استوک)</TopNavListItem></Link>
      <Link href=""><TopNavListItem>لوازم خانگی</TopNavListItem></Link>
      <Link href=""><TopNavListItem>لوازم خانگی</TopNavListItem></Link>
    </ul>
  )
}
