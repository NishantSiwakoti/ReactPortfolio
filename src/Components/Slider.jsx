import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import a from "../assets/images/1.png";
import b from "../assets/images/2.png";
import c from "../assets/images/3.png";
import d from "../assets/images/4.png";
import e from "../assets/images/5.png";
import f from "../assets/images/6.png";
import g from "../assets/images/7.png";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={a} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={e} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={f} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;