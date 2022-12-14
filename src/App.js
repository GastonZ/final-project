import CarDetails from "./pages/CarDetails";
import Tienda from "./pages/tienda/Tienda";
import TiendaDetails from "./pages/tiendadetails/Tiendadetails";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import NavbarResponsive from "./components/Navbar/NavbarResponsive";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AutoToTop from "./components/AutoToTop/AutoToTop";
import SignIn from "./pages/signin/SignIn";
import BackToTop from './components/BackToTop/BackToTop'
import { useDispatch, useSelector } from "react-redux";
import usersActions from "./redux/actions/userAction";
import React, {useEffect} from "react"

AOS.init();

function App() {

  let { enterAgain } = usersActions
  let dispatch = useDispatch()

 
  let { logged } = useSelector(store => store.usuario)

  async function enterAgainToken(){
    let token = JSON.parse(localStorage.getItem("token"))
    if (token){
     await dispatch(enterAgain(token.token.user))
    }
  }
    useEffect(  ()=>{
   enterAgainToken()
    },[])
 
  return (

    <>
<NavbarResponsive/>
    <AutoToTop/>
    <BackToTop/>
      <Routes>
       
        <Route path='details/:id' element={<CarDetails/>}  />
        <Route path="/"  element={<Home/>}></Route>
        <Route path='shop' element={<Tienda/>} />
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route path='shoppin' element={<TiendaDetails/>} />
        <Route path='signin' element={<SignIn/>} />
      </Routes>
 
<Footer/>
    </>
  );
  
}

export default App;
