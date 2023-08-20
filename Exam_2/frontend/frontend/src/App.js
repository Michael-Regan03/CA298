import logo from './logo.svg';
import './App.css';
import ShowAllCategories from './components/showallcategories';
import ShowProductsByCategory from './components/showproductsbycatagory';
import ShowOrdersByStatus from './components/showordersbystatus';
import DisplayOrderStatus from './components/OrderStatuses';
import ShowCustomer from './components/showcustomer';
import ShowIndividualOrder from './components/showindividulaorder';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowAllCategories />}/>
        <Route path="/showproductsbycategory" element={<ShowProductsByCategory />}/>
        <Route path="/showordersbystatus" element={<ShowOrdersByStatus />}/>
        <Route path="/orderstatuses" element={<DisplayOrderStatus />}/>
        <Route path="/showcustomer" element={<ShowCustomer />}/>
        <Route path="/showindividualorder" element={<ShowIndividualOrder />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

