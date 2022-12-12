import React from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tienda/Tienda.css";

export default function Tienda() {
  return (
    <>
      <header className="mainTienda08" alt="herotienda">
        <CarrouselTienda></CarrouselTienda>
      </header>

      <article className="mainTienda09">
        <h3 className="subtitle09">Iconic Items & Best Sellers</h3>
        <CarrouselBestSellers></CarrouselBestSellers>
        </article>

      
    </>
  );
}
