import React,{ Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import TrendingProducts from './TrendingProducts/TrendingProducts';
import SearchPage from './SearchPage/SearchPage';
import ProductDetails from './ProductDetails/ProductDetails';
import NavBar from './NavBar/NavBar';
import Cart from './Cart/Cart';


export default class App extends Component {
  render() {
    return (<>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/products' element={<TrendingProducts/>}/>
                    <Route path='/products/search' element={<SearchPage/>}/>
                    <Route path='/products/details/' element={<ProductDetails/>}/>
                    <Route path='/cart' element={<Cart/>}/>

                    <Route path='*' element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
  };
};
