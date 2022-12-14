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

export default function CarrouselTienda() {
  const navigate = useNavigate()
  function toShopMen(){
    navigate("/shop/men")
  }
  function toShopAccesories(){
    navigate("/shop/accesories")
  }

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
{/*         <SwiperSlide>
          <div className="contenedorTienda08">

            <h1 className="titulo1shop" href="#" >
              Wall Connector
            </h1>
            <h2 className="titulo2shop">The most convenient way to charge</h2>
            <button className="buttonshop08" onClick={toShopAccesories}>Shop Now</button>
          </div>

          <img
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Wall_Connector_banner_web.jpg"
            alt="carrouselImg01"
            className="imagenCarrousel"
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="contenedorTienda08" >
            <h1 className="titulo1shop" href="#" >
              Chill Collection
            </h1>
            <h2 className="titulo2shop">Premium Confort for Any Season</h2>
            <button className="buttonshop08" onClick={toShopMen}>Shop Now</button>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/1019371264860770376/1053764450852806727/Chill_banner_web.jpg"
            alt="carrouselImg02"
            className="imagenCarrousel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="contenedorTienda08"  >
            <h1 className="titulo1shop" href="#"  >
              Weather Interior
            </h1>
            <h2 className="titulo2shop" >Maximum protection and durability</h2>
            <button className="buttonshop08" onClick={toShopAccesories}>Shop Now</button>
          </div>
          <img
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_Floormats_banner_web.jpg"
            alt="carrouselImg03"
            className="imagenCarrousel"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
