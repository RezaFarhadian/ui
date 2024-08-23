import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import AuthPageTitle from "@/components/auth/AuthPageTitle";
import Button from "@/components/Button";
import TextField from "@/components/auth/TextField";
import ArrowLeft from "../../../../public/arrow_left.svg"

export default function ResetPW() {
  return (
    <>
      <AuthPageTitle>فراموشی رمز عبور</AuthPageTitle>
      <AuthFormWrapper>
        <h4>فراموشی رمز عبور</h4>
        <p>لطفا <b>نام کاربری</b> یا <b>شماره همراه</b> خود را وارد نمایید : </p>
        <TextField title="نام کاربری/شماره تماس" placeholder="" />
        <Button title="ادامه" icon={ArrowLeft} />
      </AuthFormWrapper>
    </>
  )
}
