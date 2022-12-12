import CarDetails from "./pages/CarDetails";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
      <Routes>
        <Route path='details' element={<CarDetails/>} />
      </Routes>
    </>

  );
  
}

export default App;
