import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import AuthPageTitle from "@/components/auth/AuthPageTitle";
import OTPWrapper from "@/components/auth/OTPWrapper";
import Button from "@/components/Button";
import ArrowLeft from "../../../../../public/arrow_left.svg"
import SimpleButton from "@/components/auth/SimpleButton";

export default function OTP() {
  return (
    <>
      <AuthPageTitle>فراموشی رمز عبور</AuthPageTitle>
      <AuthFormWrapper>
        <p>لطفا <b>کد تایید</b> را وارد کنید : </p>
        <OTPWrapper />
        <Button title="ادامه" icon={ArrowLeft} />
        <SimpleButton title="ارسال مجدد کد تایید" />
        <SimpleButton title="ویرایش شماره تلفن" />
      </AuthFormWrapper>
    </>
  )
}