import React from 'react'
import { useState, useEffect } from "react";


export default function ProductData() {
  const [products, setProductData] = useState([]);
  console.log ("products is: ", products )
  
  useEffect (()=> {
    productData();
  }, [])

    async function productData(){
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();

      setProductData(data);
  }
  //structured the useEffect this way because in my beginner JavaScript-trained eyes <br>
  //this is easier to read than the async function nested inside of the useEffect function.


  return (
    <div> Here is a backpack: {products.id} </div>
  ) 
}

