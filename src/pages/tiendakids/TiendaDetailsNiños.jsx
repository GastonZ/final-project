import React, { useEffect, useState } from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tiendadetails/Tiendadetails.css";
import { Slider, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import itemsActions from "../../redux/actions/itemsActions";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";
import cartActions from "../../redux/actions/cartActions";

const theme = createTheme({
  palette: {
    primary: {
      light: "#cef10a",
      main: "#cef10a",
      dark: "#cef10a",
      contrastText: "#fff",
    },
  },
});

/* Esta es la tienda de ropa de hombres */

export default function TiendaDetails() {
  async function getItemsInCartMap() {
    await dispatch(getItemsInCart());
  }

  useEffect(() => {
    getItemsInCartMap();
  }, []);

  let { getItemsInCart } = cartActions;

  let dispatch = useDispatch();
  let [filtered, setFiltered] = useState("");
  let { getItems } = itemsActions;

  const { items } = useSelector((state) => state.items);
  let femaleFiltered = items.filter((x) => x.gender === "kid");
  let kidshatsFiltered = femaleFiltered.filter(
    (x) => x.category_id === "hats"
  );
  let femaleJacketFiltered = femaleFiltered.filter((x) => x.category_id === "jacket");
  let femaleShirtFiltered = femaleFiltered.filter((x) => x.category_id === "shirt");

  useEffect(() => {
    dispatch(getItems({ filtered: filtered }));
  }, [filtered]);

  function listen(value) {
    if (value.target.type === "text") {
      setFiltered(value.target.value);
    }
  }

  function addItemToCartBtn(e) {
    console.log(e);
  }


  return (
    <>
      <header className="headerTiendaDetails010"></header>

      <div className="divSlidersCont">
        <ul>Shirts</ul>
        <ul>Jackets</ul>
              <ul>Hats</ul>
      </div>
      <h1 className="sectiontitle">Shirts</h1>
      <main className="mainTiendaDetails010">
        {femaleShirtFiltered.map((x) => {
          return (
            <div
              key={x.title}
              class="card089"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link className="eachpdetailpress" to={`/detailsItem/:${x._id}`}>
                <img src={x.picture_url} alt={x.title} srcset="" />
              </Link>

              <div className="cardTiendaContainer">
                <div className="cardTiendaText">
                  <h6>{x.title}</h6>
                  <h6>Price: ${x.unit_price}</h6>
                </div>

                <div className="cardTiendaButton">
                  {/*                   <button className="chango"></button> */}
                  <AddToCartBtn title={x.title} unit_price={x.unit_price} picture_url={x.picture_url} />
                  <Link to={`/detailsItem/:${x._id}`}>
                    <button className="lupa"></button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>
     
      <h1 className="sectiontitle" id="main2">
        Jackets
      </h1>
      <main className="mainTiendaDetails010">
        {femaleJacketFiltered.map((x) => {
          return (
            <div
              key={x.title}
              class="card089"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link className="eachpdetailpress" to={`/detailsItem/:${x._id}`}>
                <img src={x.picture_url} alt={x.title} srcset="" />
              </Link>

              <div className="cardTiendaContainer">
                <div className="cardTiendaText">
                  <h6>{x.title}</h6>
                  <h6>Price: ${x.unit_price}</h6>
                </div>

                <div className="cardTiendaButton">
                  {/*                   <button className="chango"></button> */}
                  <AddToCartBtn title={x.title} unit_price={x.unit_price} picture_url={x.picture_url} />
                  <Link to={`/detailsItem/:${x._id}`}>
                    <button className="lupa"></button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <h1 className="sectiontitle" id="main2">
        Hats
      </h1>
      <main className="mainTiendaDetails010">
        {kidshatsFiltered.map((x) => {
          return (
            <div
              key={x.title}
              class="card089"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link className="eachpdetailpress" to={`/detailsItem/:${x._id}`}>
                <img src={x.picture_url} alt={x.title} srcset="" />
              </Link>

              <div className="cardTiendaContainer">
                <div className="cardTiendaText">
                  <h6>{x.title}</h6>
                  <h6>Price: ${x.unit_price}</h6>
                </div>

                <div className="cardTiendaButton">
                  {/*                   <button className="chango"></button> */}
                  <AddToCartBtn title={x.title} unit_price={x.unit_price} picture_url={x.picture_url} />
                  <Link to={`/detailsItem/:${x._id}`}>
                    <button className="lupa"></button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>
     
    </>
  );
}
