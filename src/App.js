import './App.css';
import React, { useEffect, useState } from 'react';
import { HomePage, ProductPage, CartPage, SingleProductPage } from './Pages';
import { ProductGrid, ProductCard, NavBar} from './Components';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {

  const [products, setProductData] = useState([]);

    async function productData(){
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();

      setProductData(data);
  }
   
  useEffect (()=> {
    productData();
  }, [])

  return (
      <div>
        <HomePage />
        <SingleProductPage />
        <ProductPage products = {products}/>
      </div>
  );
}

export default App;
