import React from 'react'
import {NavBar, Footer, ProductGrid} from '../Components';

const ProductPage = ({products}) => {
  return (
    <div>
      <ProductGrid products = {products}/> 
    </div>
  )
}

export default ProductPage