
import './App.css';
import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
 
} from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';
function App() {
  return (
    <>
    <Router>
    <Routes>

      <Route exact path="/" element={<Home/>}></Route>
   
      <Route exact path="/cart" element={<Cart/>}></Route>
    </Routes>
   </Router>
    </>
  );
}

export default App;
