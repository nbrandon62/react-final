import './App.css';
import React, { useEffect, useState } from 'react';
import { HomePage, ProductPage, CartPage, SingleProductPage } from './Pages';
import { ProductGrid, ProductCard, NavBar, Cart, Footer} from './Components';
import { Routes, Route } from 'react-router-dom';


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
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productpage" element={<ProductPage products={products} />} />
        <Route path="/productpage/:id" element={<SingleProductPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
