import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../pages/tienda/Tienda.css";

// import required modules
import { Pagination } from "swiper";
import { useNavigate } from "react-router";

export default function CarrouselBestSellers() {
  const navigate = useNavigate();
  function toShopMen() {
    navigate("/shop/men");
  }

  const toShopWomen = () => navigate("/shop/women");
  const toShopKids = () => navigate("/shop/kids");
  const toShopAccesories = () => navigate("/shop/accesories");
  return (
    <>
      <div
        className="cardBestSeller09"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img
          src="https://media.discordapp.net/attachments/1019730194984091739/1051979270991392859/image.png?width=1440&height=668"
          alt=""
          srcset=""
        />
        <h3>Men's Apparel</h3>

        <button className="buttonshop09" onClick={toShopMen}>
          Shop Now
        </button>
      </div>
      <div
        className="cardBestSeller09"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img
          src="https://media.discordapp.net/attachments/1019730194984091739/1051979772714024970/image.png?width=1425&height=671"
          alt=""
          srcset=""
        />
        <h3>Women's Apparel</h3>
        <button className="buttonshop09" onClick={toShopWomen}>
          Shop Now
        </button>
      </div>
      <div
        className="cardBestSeller09"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img
          src="https://media.discordapp.net/attachments/1019371264860770376/1053736372265033820/kid.jpg?width=428&height=428"
          alt=""
          srcset=""
        />
        <h3>Kids’ Apparel</h3>
        <button className="buttonshop09" onClick={toShopKids}>
          Shop Now
        </button>
      </div>

      <div
        className="cardBestSeller09"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img
          src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1538901-00-A_1_2000.jpg"
          alt=""
          srcset=""
        />
        <h3>Accesories</h3>
        <button className="buttonshop09" onClick={toShopAccesories}>
          Shop Now
        </button>
      </div>
    </>
  );
}
