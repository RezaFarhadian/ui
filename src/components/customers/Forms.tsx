import DateField from "./DateField";
import Form from "./Form";
import TextField from "./TextField";
import Option from "./Option";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Select from "./Select";
import TwoDigitTextField from "./TwoDigitTextField";
import Checkbox from "./Checkbox";
import Button from "../Button";

export default function Forms() {
  return (
    <section className="border-t-gray border-t-2 w-full">
      <Form name="مشخصات فرد اصلی">
        <TextField label="کد ملی" placeholder="012345678" />
        <TextField label="کد پرسنلی" placeholder="012345678" />
        <TextField label="نام" placeholder="فلان" />
        <TextField label="نام خانوادگی" placeholder="فلانی" />
        <DateField label="تاریخ تولد" />
        <TextField label="محل صدور شناسنامه" placeholder="تهران" />
        <RadioGroup label="وضعیت تاهل">
          <Radio name="married" value="true" label="متاهل" />
          <Radio name="married" value="false" label="مجرد" />
        </RadioGroup>
        <TwoDigitTextField label="تعداد فرزندان" placeholder="04" disabled />
        <DateField label="تاریخ ازدواج" disabled />
        <Select label="استان">
          <Option label={"تهران"} value={"تهران"} />
          <Option label={"اصفهان"} value={"اصفهان"} />
          <Option label={"مشهد"} value={"مشهد"} />
        </Select>
        <TextField label="شهر" placeholder="تهران" />
        <TextField label="کد پستی" placeholder="000000000" />
        <div className="basis-5/12">
          <TextField label="آدرس" placeholder="......" fullWidth/>
        </div>
        <TextField label="تلفن همراه (شبکه)" placeholder="0901-000-0000" />
        <TextField label="تلفن همراه 2" placeholder="0901-000-0000" />
        <TextField label="تلفن همراه 3" placeholder="0901-000-0000" />
      </Form>

      <Form name="مشخصات شغل فرد اصلی">
        <TextField label="سازمان" placeholder="سازمان فلان" />
        <TextField label="شرکت" placeholder="شرکت فلان" />
        <Select label="منطقه">
          <Option label="شرکت یک" value="شرکت یک" />
          <Option label="شرکت دو" value="شرکت دو" />
          <Option label="شرکت سه" value="شرکت سه" />
        </Select>
        <Select label="واحد">
          <Option label={"تهران"} value={"تهران"} />
          <Option label={"اصفهان"} value={"اصفهان"} />
          <Option label={"مشهد"} value={"مشهد"} />
        </Select>
        <TextField label="تلفن داخلی" placeholder="000000" />
        <TextField label="سمت / شغل" placeholder="واحد فلان" />
        <Select label="نوع استخدام">
          <Option label="نوع استخدام یک" value="نوع استخدام یک" />
          <Option label="نوع استخدام دو" value="نوع استخدام دو" />
          <Option label="نوع استخدام سه" value="نوع استخدام سه" />
        </Select>
        <Select label="مقطع تحصیلی">
          <Option label="مقطع تحصیلی یک" value="مقطع تحصیلی یک" />
          <Option label="مقطع تحصیلی دوم" value="مقطع تحصیلی دو" />
          <Option label="مقطع تحصیلی سه" value="مقطع تحصیلی سه" />
        </Select>
        <TextField label="رشته تحصیلی" placeholder="رشته" />
      </Form>

      <Form name="سایر موارد">
        <RadioGroup label="سابقه خرید کالا">
          <Radio name="hasPurchasedProduct" value="true" label="دارد" />
          <Radio name="hasPurchasedProduct" value="false" label="ندارد" />
        </RadioGroup>
        <TextField label={<>جمع خرید <span className="text-blue">کالا</span> تا کنون (تومان)</>} placeholder="250000000" dir="ltr" />
        <Select label="نوع شخصیت">
          <Option label="نوع شخصیت یک" value="نوع شخصیت یک" />
          <Option label="نوع شخصیت دو" value="نوع شخصیت دو" />
          <Option label="نوع شخصیت سه" value="نوع شخصیت سه" />
        </Select>
        <Select label="خوش حسابی">
          <Option label="عالی" value="عالی" />
          <Option label="معمولی" value="معمولی" />
          <Option label="ممنوع المعامله" value="ممنوع المعامله" />
        </Select>
        <RadioGroup label="سابقه خرید بیمه">
          <Radio name="hasPurchasedInsurance" value="true" label="دارد" />
          <Radio name="hasPurchasedInsurance" value="false" label="ندارد" />
        </RadioGroup>
        <TextField label={<>جمع خرید <span className="text-green">بیمه</span> تا کنون (تومان)</>} placeholder="250000000" dir="ltr" />
        <RadioGroup label="صلاحیت ضمانت">
          <Radio name="warrantyQualification" value="true" label="دارد" />
          <Radio name="warrantyQualification" value="false" label="ندارد" />
        </RadioGroup>
        <RadioGroup label="عوضیت در شبکه های اجتماعی">
          <Radio name="onSocials" value="true" label="بله" />
          <Radio name="onSocials" value="false" label="خیر" />
        </RadioGroup>
      </Form>

      <Form name="تنظیمات یادآوری" box>
        <Checkbox color="blue" label="یادآور تاریخ تولد" />
        <Checkbox color="prple" label="یادآور تاریخ ازدواج" />
        <Checkbox color="green" label="یادآور سر رسید بیمه نامه" />
      </Form>

      <Form name={<><span className="text-green">اطلاعات بیمه ای</span></>} topBorder>
        <Select label="نوع وسیله نقلیه" green >
          <Option label="نوع یک" value="نوع یک" />
          <Option label="نوع دو" value="نوع دو" />
          <Option label="نوع سه" value="نوع سه" />
        </Select>
        <TextField label="نام وسیله نقلیه" placeholder="نام ماشین" green />
        <TextField label="شماره موتور" placeholder="00000000" green />
        <TextField label="شماره شاسی" placeholder="000000000000" green />
        <RadioGroup label="بیمه شخص ثالث">
          <Radio name="thirdPartyInsurance" value="true" label="دارد" green />
          <Radio name="thirdPartyInsurance" value="false" label="ندارد" green />
        </RadioGroup>
        <Select label={<>نام شرکت بیمه <span className="text-green">ثالث</span></>} green >
          <Option label="شرکت یک" value="شرکت یک" />
          <Option label="شرکت دو" value="شرکت دو" />
          <Option label="شرکت سه" value="شرکت سه" />
        </Select>
        <DateField green label={<>تاریخ سر رسید بیمه شخص <span className="text-green">ثالث</span></>} />
        <RadioGroup label="بیمه بدنه">
          <Radio name="thirdPartyInsurance" value="true" label="دارد" green />
          <Radio name="thirdPartyInsurance" value="false" label="ندارد" green />
        </RadioGroup>
        <Select label={<>نام شرکت بیمه <span className="text-green">بدنه</span></>} green>
          <Option label="شرکت یک" value="شرکت یک" />
          <Option label="شرکت دو" value="شرکت دو" />
          <Option label="شرکت سه" value="شرکت سه" />
        </Select>
        <DateField green label={<>تاریخ سر رسید بیمه شخص <span className="text-green">بدنه</span></>} />
      </Form>

      <Form name={<><span className="text-green">سایر بیمه‌نامه‌ها</span></>} >
        <>
          <Select label="نوع بیمه" green>
            <Option label="نوع بیمه یک" value="نوع بیمه یک" />
            <Option label="نوع بیمه دو" value="نوع بیمه دو" />
            <Option label="نوع بیمه سه" value="نوع بیمه سه" />
          </Select>

          <Select label="نوع بیمه" green>
            <Option label="شرکت بیمه یک" value="شرکت بیمه یک" />
            <Option label="شرکت بیمه دو" value="شرکت بیمه دو" />
            <Option label="شرکت بیمه سه" value="شرکت بیمه سه" />
          </Select>

          <DateField green label="تاریخ سررسید بیمه نامه" />
        </>

        <>
          <Select label="نوع بیمه" green>
            <Option label="نوع بیمه یک" value="نوع بیمه یک" />
            <Option label="نوع بیمه دو" value="نوع بیمه دو" />
            <Option label="نوع بیمه سه" value="نوع بیمه سه" />
          </Select>

          <Select label="نوع بیمه" green>
            <Option label="شرکت بیمه یک" value="شرکت بیمه یک" />
            <Option label="شرکت بیمه دو" value="شرکت بیمه دو" />
            <Option label="شرکت بیمه سه" value="شرکت بیمه سه" />
          </Select>

          <DateField green label="تاریخ سررسید بیمه نامه" />
        </>

        <>
          <Select label="نوع بیمه" green>
            <Option label="نوع بیمه یک" value="نوع بیمه یک" />
            <Option label="نوع بیمه دو" value="نوع بیمه دو" />
            <Option label="نوع بیمه سه" value="نوع بیمه سه" />
          </Select>

          <Select label="نوع بیمه" green>
            <Option label="شرکت بیمه یک" value="شرکت بیمه یک" />
            <Option label="شرکت بیمه دو" value="شرکت بیمه دو" />
            <Option label="شرکت بیمه سه" value="شرکت بیمه سه" />
          </Select>

          <DateField green label="تاریخ سررسید بیمه نامه" />
        </>

        <>
          <Select label="نوع بیمه" green>
            <Option label="نوع بیمه یک" value="نوع بیمه یک" />
            <Option label="نوع بیمه دو" value="نوع بیمه دو" />
            <Option label="نوع بیمه سه" value="نوع بیمه سه" />
          </Select>

          <Select label="نوع بیمه" green>
            <Option label="شرکت بیمه یک" value="شرکت بیمه یک" />
            <Option label="شرکت بیمه دو" value="شرکت بیمه دو" />
            <Option label="شرکت بیمه سه" value="شرکت بیمه سه" />
          </Select>

          <DateField green label="تاریخ سررسید بیمه نامه" />
        </>
      </Form>

      <Form name="مشخصات همسر">
        <TextField label="کد ملی" placeholder="012345678" />
        <TextField label="کد پرسنلی" placeholder="012345678" />
        <TextField label="نام" placeholder="فلان" />
        <TextField label="نام خانوادگی" placeholder="فلانی" />
        <DateField label="تاریخ تولد" />
        <TextField label="محل صدور شناسنامه" placeholder="تهران" />
        <TextField label="شهر" placeholder="تهران" />
        <TextField label="کد پستی" placeholder="000000000" />
        <div className="basis-5/12">
          <TextField label="آدرس" placeholder="......" fullWidth/>
        </div>
        <TextField label="تلفن همراه (شبکه)" placeholder="0901-000-0000" />
        <TextField label="تلفن همراه 2" placeholder="0901-000-0000" />
        <TextField label="تلفن همراه 3" placeholder="0901-000-0000" />
      </Form>

      <Form name="مشخصات فرزند اول">
        <TextField label="کد ملی" placeholder="012345678" />
        <TextField label="کد پرسنلی" placeholder="012345678" />
        <TextField label="نام" placeholder="فلان" />
        <TextField label="نام خانوادگی" placeholder="فلانی" />
        <DateField label="تاریخ تولد" />
        <TextField label="محل صدور شناسنامه" placeholder="تهران" />
        <RadioGroup label="وضعیت تاهل">
          <Radio name="married" value="true" label="متاهل" />
          <Radio name="married" value="false" label="مجرد" />
        </RadioGroup>
        <DateField label="تاریخ ازدواج" disabled />
        <Select label="استان">
          <Option label={"تهران"} value={"تهران"} />
          <Option label={"اصفهان"} value={"اصفهان"} />
          <Option label={"مشهد"} value={"مشهد"} />
        </Select>
        <TextField label="شهر" placeholder="تهران" />
        <TextField label="کد پستی" placeholder="000000000" />
        <div className="basis-5/12">
          <TextField label="آدرس" placeholder="......" fullWidth />
        </div>
        <TextField label="تلفن همراه (شبکه)" placeholder="0901-000-0000" />
        <TextField label="تلفن همراه 2" placeholder="0901-000-0000" />
        <TextField label="تلفن همراه 3" placeholder="0901-000-0000" />
      </Form>

      <div className="
        w-16
        mt-6
        m-auto
      ">
        <Button title="ذخیره" fullWidth/>
      </div>
    </section>
  )
}
