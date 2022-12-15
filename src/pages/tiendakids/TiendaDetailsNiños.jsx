import React from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tiendadetails/Tiendadetails.css";

export default function TiendaDetailsKids() {
  return (
    <>
      <header className="headerTiendaDetails010"></header>

      <article className="titular010TiendaDetails">
    
      </article>

      <main className="mainTiendaDetails010">
        {/* <div className="banner"  data-aos="fade-down" data-aos-duration="2000">
           <img src="https://media.discordapp.net/attachments/763661782555426817/1052683529626075207/Pngtreeblack_and_white_icons_of_7554658.png?width=931&height=524" alt="" srcset="" />
         
      
         <h1 data-aos="fade-up" data-aos-duration="2000">#HighQualityClothes</h1>
        </div> */}
        {/* //empieza card */}
        <div class="card089"  data-aos="fade-up" data-aos-duration="2000">
          <img
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1753970-00-A_1_2000.jpg"
            alt=""
            srcset=""
          />

          <div className="cardTiendaContainer">
            <div className="cardTiendaText">
              <h6>Grey-B Sockets</h6>
              <h6>Price: $10</h6>
            </div>

            <div className="cardTiendaButton">
              <button className="chango"></button>
              <button className="lupa"></button>
            </div>
          </div>
        </div>
         {/* //termina card */}
           {/* //empieza card */}
        <div class="card089"  data-aos="fade-up" data-aos-duration="2000">
          <img
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1740410-00-A_0_2000.jpg"
            alt=""
            srcset=""
          />

          <div className="cardTiendaContainer">
            <div className="cardTiendaText">
              <h6>Grey-B Sockets</h6>
              <h6>Price: $10</h6>
            </div>

            <div className="cardTiendaButton">
              <button className="chango"></button>
              <button className="lupa"></button>
            </div>
          </div>
        </div>
         {/* //termina card */}
           {/* //empieza card */}
        <div class="card089"  data-aos="fade-up" data-aos-duration="2000">
          <img
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/1742694-00-A_1_2000.jpg"
            alt=""
            srcset=""
          />

          <div className="cardTiendaContainer">
            <div className="cardTiendaText">
              <h6>Grey-B Sockets</h6>
              <h6>Price: $10</h6>
            </div>

            <div className="cardTiendaButton">
              <button className="chango"></button>
              <button className="lupa"></button>
            </div>
          </div>
        </div>
         {/* //termina card */}

      
        
        
      </main>
    </>
  );
}
