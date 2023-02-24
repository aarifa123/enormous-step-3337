
import { ButtonGroup } from '@chakra-ui/react';
import './App.css';
import Buttongroup from './components/Buttongroup';
import Home from './pages/Home';
import Productlist from './pages/Productlist';

import SingleProduct from "./pages/SingleProduct"

function App() {
  return (
    <div className="App">
      <Home/> 
    {/* <Productlist/> */}
    <SingleProduct/>
    {/* <Buttongroup/> */}
    </div>
  );
}

export default App;
