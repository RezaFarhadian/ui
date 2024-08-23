import Chip from "./Chip";

export default function MobilesBy() {
  return (
    <div className="flex flex-row gap-8 pl-12 pr-12 mt-12">
      <div className="basis-1/2 bg-lightprim rounded-3xl p-8">
        <p className="text-blue font-extrabold text-lg">گوشی بر اساس قیمت</p>
        <div className="flex flex-row flex-wrap gap-4 items-center justify-center mt-8">
          <div className="basis-1/4"><Chip href="#" label="گوشی ساده" /></div>
          <div className="basis-1/4"><Chip href="#" label="تا 15 میلیون" /></div>
          <div className="basis-1/4"><Chip href="#" label="تا 30 میلیون" /></div>
          <div className="basis-1/4"><Chip href="#" label="تا 20 میلیون" /></div>
          <div className="basis-1/4"><Chip href="#" label="تا 50 میلیون" /></div>
          <div className="basis-1/4"><Chip href="#" label="تا 75 میلیون" /></div>
        </div>
      </div>
      <div className="basis-1/2 bg-lightprim rounded-3xl p-8">
        <p className="text-blue font-extrabold text-lg">گوشی بر اساس ویژگی</p>
        <div className="flex flex-row flex-wrap gap-4 items-center justify-center mt-8">
          <div className="basis-1/4"><Chip href="#" label="گیمینگ" /></div>
          <div className="basis-1/4"><Chip href="#" label="دوربین" /></div>
          <div className="basis-1/4"><Chip href="#" label="5G" /></div>
          <div className="basis-1/4"><Chip href="#" label="باتری "/></div>
          <div className="basis-1/4"><Chip href="#" label="ضد آب" /></div>
          <div className="basis-1/4"><Chip href="#" label="شارژ فوری "/></div>
        </div>
      </div>
    </div>
  )
}
