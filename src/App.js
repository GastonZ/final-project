import CarDetails from "./pages/CarDetails";
import Tienda from "./pages/tienda/Tienda";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
      <Routes>
        <Route path='details' element={<CarDetails/>} />
        <Route path='shop' element={<Tienda/>} />
      </Routes>
    </>

  );
  
}

export default App;
