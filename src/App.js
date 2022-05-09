import './App.css';
import React, { useEffect, useState } from 'react';
import { HomePage, ProductPage, CartPage, SingleProductPage } from './Pages';
import { ProductGrid, ProductCard} from './Components';


function App() {

  const [products, setProductData] = useState([]);
  // console.log ("products are: ", products )

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
      <ProductGrid products = {products} />
    </div>


  );
}

export default App;
