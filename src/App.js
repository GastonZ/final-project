import CarDetails from "./pages/CarDetails";
import Tienda from "./pages/tienda/Tienda";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import NavbarResponsive from "./components/Navbar/NavbarResponsive";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AutoToTop from "./components/AutoToTop/AutoToTop";
import SignIn from "./pages/signin/SignIn";
import BackToTop from './components/BackToTop/BackToTop'

AOS.init();

function App() {
 
 
 
  return (

    <>
<NavbarResponsive/>
    <AutoToTop/>
    <BackToTop/>
      <Routes>
       
        <Route path='details/:id' element={<CarDetails/>} />
        <Route path="/"  element={<Home/>}></Route>
        <Route path='shop' element={<Tienda/>} />
        <Route path='signin' element={<SignIn/>} />
      </Routes>
 
<Footer/>
    </>
  );
  
}

export default App;
