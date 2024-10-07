"use client"

import DateField from "./DateField";
import Form from "./Form";
import TextField from "./TextField";
import Option from "./Option";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Select from "./Select";
import TwoDigitTextField from "./TwoDigitTextField";
import Checkbox from "./Checkbox";
import SaveButton from "./SaveButton";
import { useState } from "react";

export default function Forms() {
  const [nationalCode, setNationalCode] = useState<string>()
  const [personnelCode, setPersonnelCode] = useState<string>()
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [dateOfBirth, setDateOfBirth] = useState<string>()
  const [placeOfBirth, setPlaceOfBirth] = useState<string>()
  const [marriage, setMarriage] = useState<string>()
  const [childrens, setChildrens] = useState<number>()
  const [dateOfMarriage, setDateOfMarriage] = useState<string>()
  const [province, setProvince] = useState<string>()
  const [city, setCity] = useState<string>()
  const [postalCode, setPostalCode] = useState<string>()
  const [networkCell, setNetworkCell] = useState<string>()
  const [secondCell, setSecondCell] = useState<string>()
  const [thirdCell, setThirdCell] = useState<string>()

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
          <Radio name="marriage" value="متاهل" label="متاهل" />
          <Radio name="marriage" value="مجرد" label="مجرد" />
        </RadioGroup>
        <TwoDigitTextField label="تعداد فرزندان" placeholder="04" disabled />
        <DateField label="تاریخ ازدواج" disabled />
        <Select label="استان">
          <Option label={"آذربایجان شرقی"} value={"آذربایجان شرقی"} />
          <Option label={"آذربایجان غربی"} value={"آذربایجان غربی"} />
          <Option label={"اردبیل"} value={"اردبیل"} />
          <Option label={"اصفهان"} value={"اصفهان"} />
          <Option label={"البرز"} value={"البرز"} />
          <Option label={"ایلام"} value={"ایلام"} />
          <Option label={"بوشهر"} value={"بوشهر"} />
          <Option label={"تهران"} value={"تهران"} />
          <Option label={"چهارمحال و بختیاری"} value={"چهارمحال و بختیاری"} />
          <Option label={"خراسان جنوبی"} value={"خراسان جنوبی"} />
          <Option label={"خراسان رضوی"} value={"خراسان رضوی"} />
          <Option label={"خراسان شمالی"} value={"خراسان شمالی"} />
          <Option label={"خوزستان"} value={"خوزستان"} />
          <Option label={"زنجان"} value={"زنجان"} />
          <Option label={"سمنان"} value={"سمنان"} />
          <Option label={"سیستان و بلوچستان"} value={"سیستان و بلوچستان"} />
          <Option label={"فارس"} value={"فارس"} />
          <Option label={"قزوین"} value={"قزوین"} />
          <Option label={"قم"} value={"قم"} />
          <Option label={"کردستان"} value={"کردستان"} />
          <Option label={"کرمان"} value={"کرمان"} />
          <Option label={"کرمانشاه"} value={"کرمانشاه"} />
          <Option label={"کهگیلویه و بویراحمد"} value={"کهگیلویه و بویراحمد"} />
          <Option label={"گلستان"} value={"گلستان"} />
          <Option label={"گیلان"} value={"گیلان"} />
          <Option label={"لرستان"} value={"لرستان"} />
          <Option label={"مازندران"} value={"مازندران"} />
          <Option label={"مرکزی"} value={"مرکزی"} />
          <Option label={"هرمزگان"} value={"هرمزگان"} />
          <Option label={"همدان"} value={"همدان"} />
          <Option label={"یزد"} value={"یزد"} />
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
          <Option label={"لاوان"} value={"لاوان"} />
          <Option label={"سیری"} value={"سیری"} />
          <Option label={"خارگ"} value={"خارگ"} />
          <Option label={"بهرگان"} value={"بهرگان"} />
          <Option label={"قشم"} value={"قشم"} />
          <Option label={"کیش"} value={"کیش"} />
          <Option label={"تهران"} value={"تهران"} />
          <Option label={"دفتر اصفهان"} value={"دفتر اصفهان"} />
          <Option label={"دفتر شیراز"} value={"دفتر شیراز"} />
          <Option label={"دفتر لنگه"} value={"دفتر لنگه"} />
          <Option label={"نخیلو"} value={"نخیلو"} />
        </Select>
        <TextField label="تلفن داخلی" placeholder="000000" />
        <TextField label="سمت / شغل" placeholder="واحد فلان" />
        <Select label="نوع استخدام">
          <Option label="رسمی" value="رسمی" />
          <Option label="قراردادی" value="قراردادی" />
          <Option label="پیمانکاری" value="پیمانکاری" />
          <Option label="کارگر رسمی" value="کارگر رسمی" />
          <Option label="سایر" value="سایر" />
        </Select>
        <Select label="مقطع تحصیلی">
          <Option label="کارشناسی" value="کارشناسی" />
          <Option label="کارشناسی ارشد" value="کارشناسی ارشد" />
          <Option label="دکترا" value="دکترا" />
          <Option label="کاردانی" value="کاردانی" />
          <Option label="دیپلم" value="دیپلم" />
          <Option label="زیر دیپلم" value="زیر دیپلم" />
        </Select>
        <TextField label="رشته تحصیلی" placeholder="رشته" />
      </Form>

      <Form name="سایر موارد">
        <RadioGroup label="سابقه خرید کالا">
          <Radio name="purchaseHistory" value="دارد" label="دارد" />
          <Radio name="purchaseHistory" value="ندارد" label="ندارد" />
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
          <Radio name="insurancePurchaseHistory" value="دارد" label="دارد" />
          <Radio name="insurancePurchaseHistory" value="ندارد" label="ندارد" />
        </RadioGroup>
        <TextField label={<>جمع خرید <span className="text-green">بیمه</span> تا کنون (تومان)</>} placeholder="250000000" dir="ltr" />
        <RadioGroup label="صلاحیت ضمانت">
          <Radio name="warrantyQualification" value="دارد" label="دارد" />
          <Radio name="warrantyQualification" value="ندارد" label="ندارد" />
        </RadioGroup>
        <RadioGroup label="عوضیت در شبکه های اجتماعی">
          <Radio name="onSocials" value="بله" label="بله" />
          <Radio name="onSocials" value="خیر" label="خیر" />
        </RadioGroup>
      </Form>

      <Form name="تنظیمات یادآوری" box>
        <Checkbox color="blue" label="یادآور تاریخ تولد" />
        <Checkbox color="prple" label="یادآور تاریخ ازدواج" />
        <Checkbox color="green" label="یادآور سر رسید بیمه نامه" />
      </Form>

      <Form name={<><span className="text-green">اطلاعات بیمه ای</span></>} topBorder>
        <div className="basis-2.5/12">
          <Select label="نوع وسیله نقلیه" green >
            <Option label="نوع یک" value="نوع یک" />
            <Option label="نوع دو" value="نوع دو" />
            <Option label="نوع سه" value="نوع سه" />
          </Select>
        </div>      
        <div className="basis-2.5/12">
          <TextField label="نام وسیله نقلیه" placeholder="نام ماشین" green/>
        </div>
        <div className="basis-3/12">
          <TextField label="شماره موتور" placeholder="00000000" green fullWidth/>
        </div>
        <div className="basis-3/12">
          <TextField label="شماره شاسی" placeholder="000000000000" green fullWidth/>
        </div>
        <RadioGroup label="بیمه شخص ثالث">
          <Radio name="thirdPartyInsurance" value="دارد" label="دارد" green />
          <Radio name="thirdPartyInsurance" value="ندارد" label="ندارد" green />
        </RadioGroup>
        <Select label={<>نام شرکت بیمه <span className="text-green">ثالث</span></>} green >
          <Option label="ایران" value="ایران" />
          <Option label="پارسیان" value="پارسیان" />
          <Option label="سامان" value="سامان" />
          <Option label="پاسارگاد" value="پاسارگاد" />
          <Option label="کارآفرین" value="کارآفرین" />
          <Option label="آسیا" value="آسیا" />
          <Option label="البرز" value="البرز" />
          <Option label="دانا" value="دانا" />
          <Option label="معلم" value="معلم" />
          <Option label="رازی" value="رازی" />
          <Option label="توسعه" value="توسعه" />
          <Option label="سینا" value="سینا" />
          <Option label="ملت" value="ملت" />
          <Option label="دی" value="دی" />
          <Option label="حکمت صبا" value="حکمت صبا" />
          <Option label="نوین" value="نوین" />
          <Option label="میهن" value="میهن" />
          <Option label="کوثر" value="کوثر" />
          <Option label="بیمه ما" value="بیمه ما" />
          <Option label="آرمان" value="آرمان" />
          <Option label="تعاون" value="تعاون" />
          <Option label="سرمد" value="سرمد" />
          <Option label="بیمه اتکایی امین" value="بیمه اتکایی امین" />
          <Option label="حافظ" value="حافظ" />
          <Option label="آسماری" value="آسماری" />
          <Option label="تجارت نو" value="تجارت نو" />
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
          <Option label={"آذربایجان شرقی"} value={"آذربایجان شرقی"} />
          <Option label={"آذربایجان غربی"} value={"آذربایجان غربی"} />
          <Option label={"اردبیل"} value={"اردبیل"} />
          <Option label={"اصفهان"} value={"اصفهان"} />
          <Option label={"البرز"} value={"البرز"} />
          <Option label={"ایلام"} value={"ایلام"} />
          <Option label={"بوشهر"} value={"بوشهر"} />
          <Option label={"تهران"} value={"تهران"} />
          <Option label={"چهارمحال و بختیاری"} value={"چهارمحال و بختیاری"} />
          <Option label={"خراسان جنوبی"} value={"خراسان جنوبی"} />
          <Option label={"خراسان رضوی"} value={"خراسان رضوی"} />
          <Option label={"خراسان شمالی"} value={"خراسان شمالی"} />
          <Option label={"خوزستان"} value={"خوزستان"} />
          <Option label={"زنجان"} value={"زنجان"} />
          <Option label={"سمنان"} value={"سمنان"} />
          <Option label={"سیستان و بلوچستان"} value={"سیستان و بلوچستان"} />
          <Option label={"فارس"} value={"فارس"} />
          <Option label={"قزوین"} value={"قزوین"} />
          <Option label={"قم"} value={"قم"} />
          <Option label={"کردستان"} value={"کردستان"} />
          <Option label={"کرمان"} value={"کرمان"} />
          <Option label={"کرمانشاه"} value={"کرمانشاه"} />
          <Option label={"کهگیلویه و بویراحمد"} value={"کهگیلویه و بویراحمد"} />
          <Option label={"گلستان"} value={"گلستان"} />
          <Option label={"گیلان"} value={"گیلان"} />
          <Option label={"لرستان"} value={"لرستان"} />
          <Option label={"مازندران"} value={"مازندران"} />
          <Option label={"مرکزی"} value={"مرکزی"} />
          <Option label={"هرمزگان"} value={"هرمزگان"} />
          <Option label={"همدان"} value={"همدان"} />
          <Option label={"یزد"} value={"یزد"} />
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

      <SaveButton/>
    </section>
  )
}
