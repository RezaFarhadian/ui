import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import AuthPageTitle from "@/components/auth/AuthPageTitle";
import Button from "@/components/Button";
import TextArea from "@/components/auth/TextArea";
import TextField from "@/components/auth/TextField";
import ArrowLeft from "../../../../../public/arrow_left.svg"

export default function Profile() {
  return (
    <>
      <AuthPageTitle>اطلاعات کاربر</AuthPageTitle>
      <AuthFormWrapper>
        <h4>ثبت اطلاعات کاربر</h4>
        <p>لطفا <b>اطلاعات</b> خود را وارد نمایید : </p>
        <TextField title="کد ملی" placeholder="کد ملی به عنوان نام کاربری استفاده میشود" />
        <div className="flex flex-row gap-2">
          <TextField title="نام" half />
          <TextField title="نام خانوادگی" half />
        </div>
        <div className="flex flex-row gap-2">
          <TextField title="کد پرسنلی" placeholder="مخصوص کارمند سازمان ها" half />
          <TextField title="نام سازمان یا شرکت" half />
        </div>
        <div className="flex flex-row gap-2">
          <TextField title="استان" half />
          <TextField title="شهر" half />
        </div>
        <TextArea title="آدرس" />
        <div className="flex flex-row gap-2">
          <TextField title="کد پستی" half />
          <TextField title="تاریخ تولد" half />
        </div>
        <TextField type="password" title="رمز عبور جدید" placeholder=""/>
        <TextField type="password" title="تکرار رمز عبور جدید" placeholder=""/>
        <Button icon={ArrowLeft} title="ادامه" />
      </AuthFormWrapper>
    </>
  )
}
