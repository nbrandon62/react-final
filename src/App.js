import './App.css';
import React, { useEffect, useState } from 'react';
import { HomePage, ProductPage, CartPage, SingleProductPage } from './Pages';
import { ProductGrid, ProductCard, NavBar, Cart, Footer} from './Components';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/productpage/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
