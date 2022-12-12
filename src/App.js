import CarDetails from "./pages/CarDetails";
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AutoToTop from "./components/AutoToTop/AutoToTop";

AOS.init();

function App() {
  return (

    <>
    <AutoToTop/>
      <Routes>
        <Route path='details' element={<CarDetails/>} />
      </Routes>
    </>

  );
  
}

export default App;
