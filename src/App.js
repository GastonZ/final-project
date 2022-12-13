import CarDetails from "./pages/CarDetails";
import Tienda from "./pages/tienda/Tienda";
import TiendaDetails from "./pages/tiendadetails/Tiendadetails";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import NavbarResponsive from "./components/Navbar/NavbarResponsive";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AutoToTop from "./components/AutoToTop/AutoToTop";

AOS.init();

function App() {
 
 
 
  return (

    <>
<NavbarResponsive/>
    <AutoToTop/>
      <Routes>
       
        <Route path='details' element={<CarDetails/>} />
        <Route path="/"  element={<Home/>}></Route>
        <Route path='shop' element={<Tienda/>} />
        <Route path='shoppin' element={<TiendaDetails/>} />
      </Routes>
 
<Footer/>
    </>
  );
  
}

export default App;
