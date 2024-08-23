import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import AuthPageTitle from "@/components/auth/AuthPageTitle";
import Button from "@/components/Button";
import TextField from "@/components/auth/TextField";
import ArrowLeft from "../../../../public/arrow_left.svg"

export default function Login() {
  return (
    <>
      <AuthPageTitle>ورود</AuthPageTitle>
      <AuthFormWrapper>
        <h4>ورود</h4>
        <p>لطفا <b>اطلاعات</b> خود را وارد نمایید :</p>
        <TextField title="نام کاربری" placeholder="کد ملی به عنوان نام کاربری استفاده می شود" />
        <TextField title="رمز عبور" placeholder="" />
        <Button title="ادامه" icon={ArrowLeft} />
      </AuthFormWrapper>
    </>
  )
}
