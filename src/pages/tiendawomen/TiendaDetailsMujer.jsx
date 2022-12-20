import React, {useEffect, useState} from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tiendadetails/Tiendadetails.css";
import { Slider, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import itemsActions from "../../redux/actions/itemsActions";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";

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



/* Esta es la tienda de ropa de mujeres */

export default function TiendaDetailsWomen() {


  let dispatch = useDispatch()
  let [filtered,setFiltered]=useState('')
  let { getItems } = itemsActions
  
  const { items } = useSelector((state)=> state.items)
  let femaleFiltered = items.filter((x)=> x.gender === 'female')

  useEffect(()=>{
    dispatch(getItems({filtered:filtered}))
  },[filtered])

  function listen(value){
    

    if(value.target.type==="text"){
      setFiltered(value.target.value)
    }
  }



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
            onChange={listen}
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

        {/* <div className="banner"  data-aos="fade-down" data-aos-duration="2000">
           <img src="https://media.discordapp.net/attachments/763661782555426817/1052683529626075207/Pngtreeblack_and_white_icons_of_7554658.png?width=931&height=524" alt="" srcset="" />
         
      
         <h1 data-aos="fade-up" data-aos-duration="2000">#HighQualityClothes</h1>
        </div> */}

        {/* //empieza card */}

        {
          femaleFiltered.map((x)=>{

          return(
            
            <div class="card089"  data-aos="fade-up" data-aos-duration="2000">
            <Link className="eachpdetailpress" to={`/detailsItem/:${x._id}`}>
            <img
              src={x.picture_url}
              alt=""
              srcset=""
            />
            </Link>

            <div className="cardTiendaContainer">
              <div className="cardTiendaText">
                <h6>{x.title}</h6>
                <h6>Price: ${x.unit_price}</h6>
              </div>

             <div className="cardTiendaButton">
             <AddToCartBtn title={x.title} unit_price={x.unit_price} picture_url={x.picture_url} />
                <Link to={`/detailsItem/:${x._id}`}><button  className="lupa"></button></Link>
              </div>
            </div>
          </div>
            )
          })
        }
        
         {/* //termina card */}
      </main>
    </>
  );
}
