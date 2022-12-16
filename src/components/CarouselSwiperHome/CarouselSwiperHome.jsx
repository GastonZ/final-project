import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import car1 from "./bugatti1.png"
import car2 from "./bugatti2.png"
import car3 from "./bugatti3.png"
import car4 from "./bugatti4.png"

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Nav } from "react-bootstrap";
// ..
AOS.init();
export default function CarouselSwiperHome() {
  return (
    <>
    <h2 data-aos="fade-right" data-aos-duration="1000" className="findYourPerfect">Find your perfect <span className="spancito88">model</span></h2>


<Swiper

  slidesPerView={3}
  spaceBetween={10}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }}
  modules={[Pagination]}
  className="mySwiperrino"
>
  <SwiperSlide className="swiperiper"><img className="swiper-imge" src={car1} alt="" /></SwiperSlide>
  <SwiperSlide className="swiperiper"><img className="swiper-imge" src={car2} alt="" /></SwiperSlide>
  <SwiperSlide className="swiperiper"><img className="swiper-imge" src={car4} alt=""/></SwiperSlide>
  <SwiperSlide className="swiperiper"><img className="swiper-imge" src={car3} alt="" /></SwiperSlide>
  <SwiperSlide className="swiperiper">
    <img className="swiper-imge" src={car1} alt="" />
  </SwiperSlide>
  <div className="custom-shape-divider-top-1670874572">
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
</svg>
</div>


</Swiper>
    </>
  );
}
