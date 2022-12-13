import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../pages/tienda/Tienda.css";

// import required modules
import { Pagination } from "swiper";

export default function CarrouselBestSellers() {
  return (
    <>
      <div className="cardBestSeller09" data-aos="fade-right" data-aos-duration="2000">
        <img
          src="https://media.discordapp.net/attachments/1019730194984091739/1051979270991392859/image.png?width=1440&height=668"
          alt=""
          srcset=""
        />
        <h3>Men's Apparel</h3>
        <button className="buttonshop09">Shop Now</button>
      </div>
      <div className="cardBestSeller09" data-aos="fade-right" data-aos-duration="2000">
        <img
          src="https://media.discordapp.net/attachments/1019730194984091739/1051979772714024970/image.png?width=1425&height=671"
          alt=""
          srcset=""
        />
        <h3>Women's Apparel</h3>
        <button className="buttonshop09">Shop Now</button>
      </div>
      <div className="cardBestSeller09"data-aos="fade-right" data-aos-duration="2000" >
        <img
          src="https://media.discordapp.net/attachments/1019730194984091739/1051980429479137350/image.png?width=1440&height=625"
          alt=""
          srcset=""
        />
        <h3>Kids’ Apparel</h3>
        <button className="buttonshop09">Shop Now</button>
      </div>

      <div className="cardBestSeller09" data-aos="fade-right" data-aos-duration="2000">
        <img
          src="https://media.discordapp.net/attachments/1019730194984091739/1051986508472651878/Sin_titulo-1.png?width=583&height=671"
          alt=""
          srcset=""
        />
        <h3>Accesories</h3>
        <button className="buttonshop09">Shop Now</button>
      </div>
    </>
  );
}
