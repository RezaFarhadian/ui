"use client"

import HighlightsMobile from "../../public/highlight_mobile.png"
import HighlightsLavazem from "../../public/highlight_lavazem.png"
import HighlightsComputer from "../../public/highlight_computer.png"
import HighlightsLaptop from "../../public/highlight_laptop.png"
import HighlightsHeadphone from "../../public/highlight_headphone.png"
import HighlightsDorbin from "../../public/highlight_dorbin.png"
import HighlightsSaat from "../../public/highlight_saat.png"
import HighlightsKhonegi from "../../public/highlight_khonegi.png"
import Hightlight from "./Highlight"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Image from "next/image"
import SlidePrev from "../../public/highlight_slide_prev.svg"
import SlideNext from "../../public/highlight_slide_next.svg"
import { useState } from "react"

export default function Highlights() {
  const [swiper, setSwiper] = useState<any>()
  return (
    <div className="
      flex
      flex-row
      items-center
      pr-4
      pl-4
      mt-12
    ">
      <div className="cursor-pointer" onClick={() => {
        swiper.slideTo(0);
      }}>
        <Image
          src={SlideNext}
          alt=""
        />
      </div>
      <Swiper
        slidesPerView={7}
        className="w-[90vw]"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <SwiperSlide><Hightlight image={HighlightsMobile} label="موبایل" /></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsLavazem} label="لوازم جانبی" /></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsComputer} label="کامپیوتر" /></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsLaptop} label="لپ تاپ"/></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsHeadphone} label="هدفون"/></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsDorbin} label="دوربین"/></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsSaat} label="ساعت هوشمند"/></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsKhonegi} label="لوازم خانگی"/></SwiperSlide>
        <SwiperSlide><Hightlight image={HighlightsMobile} label="استوک" /></SwiperSlide>
      </Swiper>
      <div className="cursor-pointer" onClick={() => {
        swiper.slideTo(7);
      }}>
        <Image
          src={SlidePrev}
          alt=""
        />
      </div>
    </div>
  )
}
