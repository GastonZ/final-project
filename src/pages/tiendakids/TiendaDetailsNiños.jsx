import React from "react";
import { Link } from 'react-router-dom';
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tiendadetails/Tiendadetails.css";
import { createTheme } from '@mui/material/styles';
import { Slider, TextField, ThemeProvider } from "@mui/material";
import itemsActions from "../../redux/actions/itemsActions";
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
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


/* Esta es la tienda de ropa de niños */


export default function TiendaDetailsKids() {
  let { getItems } = itemsActions
  const dispatch = useDispatch()
  let [filtered,setFiltered]=useState('')
  const { items } = useSelector((state)=> state.items)
  let itemsFiltered = items.filter(items=>items.gender.includes("kid"))

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
      <div className="divSlidersCont" >
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








        
        
        {itemsFiltered.map((x)=>{
return(

        <div key={x.title} class="card089"  data-aos="fade-up" data-aos-duration="2000">
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
              <h6>${x.unit_price}</h6>
            </div>

            <div className="cardTiendaButton">
              <AddToCartBtn name={x.title} price={x.unit_price} image={x.picture_url} />
              <Link to={`/detailsItem/:${x._id}`}><button  className="lupa"></button></Link>
            </div>
          </div>
        </div>
)
        })}

         {/* //termina card */}
           {/* //empieza card */}
       
         {/* //termina card */}

      
        
        
      </main>
    </>
  );
}
