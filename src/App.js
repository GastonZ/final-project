import CarDetails from "./pages/CarDetails";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
 
 
 
  return (

    <>

      <Routes>
       
        <Route path='details' element={<CarDetails/>} />
        <Route path="/"  element={<Home/>}></Route>
      </Routes>
    </>

  );
  
}

export default App;
