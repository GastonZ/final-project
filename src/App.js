import CarDetails from "./pages/CarDetails";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'

AOS.init();

function App() {
 
 
 
  return (

    <>

      <Routes>
       
        <Route path='details' element={<CarDetails/>} />
        <Route path="/"  element={<Home/>}></Route>
      </Routes>
 
<Footer></Footer>
    </>
  );
  
}

export default App;
