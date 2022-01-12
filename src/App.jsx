import Home from "./pages/home";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Register from "./pages/register";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/register' element={<Register />} />
         <Route path='/login' element={<Login />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/product/:productId' element={<Product />} />
         <Route path='/productlist' element={<ProductList />} />
    </Routes>
   </BrowserRouter>
  
  );
};

export default App;