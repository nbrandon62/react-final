import React from 'react'
import styled from 'styled-components'
import { SingleProductPage } from '../Pages'
import ProductCard from './ProductCard'


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justity-content: center;
    align-items; center;
`
const ProductGrid = ({products}) => {

  console.log("products are:", {products});

  return (
    <Container>
         {products.map((product)=> (
          <div item key={product.id}>
            <ProductCard product ={product} />
          </div>
        ))} 
    </Container>

  )
}

export default ProductGrid