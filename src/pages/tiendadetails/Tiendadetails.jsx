import React from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tiendadetails/Tiendadetails.css";
import { Slider, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#cef10a',
      main: '#cef10a',
      dark: '#cef10a',
      contrastText: '#fff',
    },
   
  },
});

export default function TiendaDetails() {
  return (
    <>
      <header className="headerTiendaDetails010"></header>

      <article className="titular010TiendaDetails">
    
      </article>

      <main className="mainTiendaDetails010">
          <div className="divSlidersCont">
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label="Search your product"
            variant="outlined"
            color="primary"
            fullWidth="1"
          />
          </ThemeProvider>
     
          <div className="contenedorSlidersx">
          <p>Min: </p>
          <div className="divSliders">
          <ThemeProvider theme={theme}>
            <Slider
              defaultValue={5}
              aria-label="Default"
              valueLabelDisplay="auto"
              color="primary"
            />
              </ThemeProvider>
             
          </div>
          <p>Max: </p>
          <div className="divSliders">
          <ThemeProvider theme={theme}>
            <Slider
              defaultValue={90}
              aria-label="Default"
              valueLabelDisplay="auto"
              color="primary"
            />
              </ThemeProvider>
          </div>
          </div>
        </div>



        {/* //empieza card */}
        <div class="card089"  data-aos="fade-up" data-aos-duration="2000">
          <img
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740521-00-A_0_2000.jpg"
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
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_0_2000.jpg"
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
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1741425-00-A_0_2000.jpg"
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
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1741111-00-A_0_2000.jpg"
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
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/8529100-00-A_0_2000.jpg"
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
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/8764613-00-A_0_2000.jpg"
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
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/8764613-00-A_0_2000.jpg"
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
