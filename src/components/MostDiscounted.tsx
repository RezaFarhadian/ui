import Card from "./Card";
import Paper from "./Paper";
import Title from "./Title";

export default function MostDiscounted() {
  return (
    <Paper>
      <Title>تخفیف‌دارها</Title>
      <div className="
        mt-10
        flex
        flex-row
        gap-[100px]
      ">
        <div className="basis-1/3">
          <Card
            title="گوشی موبایل مدل آیفون 13 پرو "
            englishTitle="Iphone 13 pro plus"
            features="ظرفیت 512 گیگابایت رم 12 گیگ ..."
            cost={250000000}
            costBeforeDiscount={250000000}
            discountInPercent={5}
            image="/cybermonday_iphone.png"
            invert
          />
        </div>
        <div className="basis-1/3">
          <Card
            title="گوشی موبایل مدل آیفون 13 پرو "
            englishTitle="Iphone 13 pro plus"
            features="ظرفیت 512 گیگابایت رم 12 گیگ ..."
            cost={250000000}
            costBeforeDiscount={250000000}
            discountInPercent={5}
            image="/cybermonday_iphone.png"
            invert
          />
        </div>
        <div className="basis-1/3">
          <Card
            title="گوشی موبایل مدل آیفون 13 پرو "
            englishTitle="Iphone 13 pro plus"
            features="ظرفیت 512 گیگابایت رم 12 گیگ ..."
            cost={250000000}
            costBeforeDiscount={250000000}
            discountInPercent={5}
            image="/cybermonday_iphone.png"
            invert
          />
        </div>
      </div>
    </Paper>
  )
}
