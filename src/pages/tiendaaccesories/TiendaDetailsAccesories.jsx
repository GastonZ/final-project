import React from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tiendadetails/Tiendadetails.css";
import itemsActions from "../../redux/actions/itemsActions";
import { useDispatch,useSelector } from "react-redux";
import { Slider, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useEffect,useState } from "react";
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





export default function TiendaDetailsAccesories() {
  let [filtered,setFiltered]=useState('')
   let { getItems } = itemsActions
  const dispatch = useDispatch()
  
  const { items } = useSelector((state)=> state.items)
  let itemsFiltered = items.filter(items=>items.gender.includes("none"))
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
        </div>  */}
        {/* //empieza card */}
        {itemsFiltered.map((x)=>{
return(

        <div key={x._id} class="card089" data-aos="fade-up" data-aos-duration="2000">
          <img
            src={x.image}
            alt=""
            srcset=""
          />

          <div className="cardTiendaContainer">
            <div className="cardTiendaText">
              <h6>{x.name}</h6>
              <h6>${x.price}</h6>
            </div>

            <div className="cardTiendaButton">
              <button className="chango"></button>
              <button className="lupa"></button>
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
