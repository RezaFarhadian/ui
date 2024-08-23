import Image from "next/image"
import ArrrowLeft from "../../../../public/arrow_left.svg"
import TextField from "@/components/auth/TextField"
import Button from "@/components/Button"
import AuthPageTitle from "@/components/auth/AuthPageTitle"
import AuthFormWrapper from "@/components/auth/AuthFormWrapper"

export default function Register() {
  return (
    <>
      <AuthPageTitle>ثبت نام</AuthPageTitle>
      <AuthFormWrapper>
        <h4>ثبت نام</h4>
        <p>لطفا <b className="font-extrabold">شماره تلفن</b> همراه خود را وارد نمایید :</p>
        <TextField dir="ltr" title="تلفن همراه" placeholder="09134567899" />
        <Button title="ادامه" icon={ArrrowLeft} />
      </AuthFormWrapper>
    </>
  )
}
