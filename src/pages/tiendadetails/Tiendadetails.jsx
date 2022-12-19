import React, {useEffect, useState} from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tiendadetails/Tiendadetails.css";
import { Slider, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import itemsActions from "../../redux/actions/itemsActions";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
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

/* Esta es la tienda de ropa de hombres */

export default function TiendaDetails() {


  let dispatch = useDispatch()
  let [filtered,setFiltered]=useState('')
  let { getItems } = itemsActions
  
  const { items } = useSelector((state)=> state.items)
  let maleFiltered = items.filter((x)=> x.gender === 'male')

  useEffect(()=>{
    dispatch(getItems({filtered:filtered}))
  },[filtered])

  function listen(value){
    

    if(value.target.type==="text"){
      setFiltered(value.target.value)
    }
  }

  function addItemToCartBtn(e){
    console.log(e);
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



        {/* //empieza card */}
        {
          maleFiltered.map((x)=>{

            return(
              <Link className="eachpdetailpress" to={`/detailsItem/:${x._id}`}>
              <div key={x.name} class="card089"  data-aos="fade-up" data-aos-duration="2000">
              <img
                src={x.image}
                alt={x.name}
                srcset=""
              />
    
              <div className="cardTiendaContainer">
                <div className="cardTiendaText">
                  <h6>{x.name}</h6>
                  <h6>Price: ${x.price}</h6>
                </div>
    
                <div className="cardTiendaButton">
{/*                   <button className="chango"></button> */}
                  <AddToCartBtn name={x.name} price={x.price} image={x.image} />
                  <Link to={`/detailsItem/:${x._id}`}><button  className="lupa"></button></Link>
                </div>
              </div>
            </div>
              </Link>
            )
          })
        }
       
         {/* //termina card */}        
      </main>
    </>
  );
}
