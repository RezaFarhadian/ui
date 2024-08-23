import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import AuthPageTitle from "@/components/auth/AuthPageTitle";
import Button from "@/components/Button";
import TextField from "@/components/auth/TextField";
import ArrowLeft from "../../../../../public/arrow_left.svg"

export default function Set() {
  return (
    <>
      <AuthPageTitle>فراموشی رمز عبور</AuthPageTitle>
      <AuthFormWrapper>
        <h4>فراموشی رمز عبور</h4>
        <p>لطفا <b>رمز جدید</b> خود را وارد نمایید:</p>
        <TextField type="password" title="رمز عبور جدید" placeholder=""/>
        <TextField type="password" title="تکرار رمز عبور جدید" placeholder=""/>
        <Button title="ادامه" icon={ArrowLeft}></Button>
      </AuthFormWrapper>
    </>
  )
}