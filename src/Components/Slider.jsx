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
import ma from "../assets/images/ma.png";
import mb from "../assets/images/mb.png";
import mc from "../assets/images/mc.png";
import md from "../assets/images/md.png";
import me from "../assets/images/me.png";
import se from "../assets/images/fa.png";
import fc from "../assets/images/fc.png";
import fe from "../assets/images/fe.png";
import ff from "../assets/images/ff.png";
import fg from "../assets/images/fg.png";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import a4 from "../assets/images/a4.png";
import a5 from "../assets/images/a5.png";

const Slider = ({ type }) => {
  return (
    <>
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
      {type === "projects" && (
        <div>
          <div>
            <h1 className="text-2xl md:text-2xl text-[#35d16e] text-center mt-5 font-bold mb-5">
              2. MovieMadHouse
            </h1>
          </div>
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
                <img src={ma} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mb} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mc} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={md} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={me} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h1 className="text-2xl md:text-2xl text-[#35d16e] text-center mt-5 font-bold mb-5">
              3. ZAPMovies
            </h1>
          </div>
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
                <img src={se} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={fc} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={fe} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ff} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={fg} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h1 className="text-2xl md:text-2xl text-[#35d16e] text-center mt-5 font-bold mb-5">
              4. Portfolio Site
            </h1>
          </div>
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
                <img src={a1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={a2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={a3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={a4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={a5} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
