import React from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tienda/Tienda.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { NavLink,Link } from "react-router-dom";

export default function Tienda() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="mainTienda08" alt="herotienda">
          <CarrouselTienda></CarrouselTienda>
        </header>

        <article className="mainTienda09">
          <div
            className="cardBestSeller19"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {" "}
            <h3 className="subtitle09">Iconic Items & Best Sellers.</h3>
          </div>

          <CarrouselBestSellers></CarrouselBestSellers>
        </article>

            <div className="sectionTienda09">
              <h3 data-aos="fade-right" data-aos-duration="1500">
                {" "}
                <span className="bolder">#</span>Lifestyle
              </h3>

          <Link className="link-shop-women" to="/shop/women">
                <button className="buttonshop08">Shop Now</button>
          </Link>
            </div>
      </motion.div>
    </>
  );
}
