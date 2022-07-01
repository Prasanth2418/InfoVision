import './App.css';
import MenuPage from './Pages/MenuPage/MenuPage';
import {Routes,Route} from "react-router-dom"
import Lunch from './Pages/MenuPage/Lunch';
import BreakFast from './Pages/MenuPage/BreakFast';
import Snacks from './Pages/MenuPage/Snacks';
import Dinner from './Pages/MenuPage/Dinner';
import NavBar from './Components/Common/NavBar';
import Cart from './Pages/Cart/Cart';
import HomeScreen from './Pages/HomePage/HomeScreen';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/MenuPage" element={<MenuPage/>}/>
     <Route path="/Breakfast" element={<BreakFast/>}/>
     <Route path="/Lunch" element={<Lunch/>}/>
     <Route path="/Snacks" element={<Snacks/>}/>
     <Route path="/Dinner" element={<Dinner/>}/>
     <Route path="/cart" element={<Cart/>}/>
    
    </Routes>
    </>
  );
}

export default App;
