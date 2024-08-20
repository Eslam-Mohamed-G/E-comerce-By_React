
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './comonents/Navbar';
import ProductsList from './comonents/ProductsList';
import Slider from './comonents/Slider';
import About from './comonents/About';
import Details from './comonents/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<><Slider /><ProductsList /></>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='product/:productId' element={<Details/>}></Route>
        </Routes>
      
      
    </div>
  );
}

export default App;
