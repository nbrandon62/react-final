import React from 'react'
import styled from 'styled-components'
import { SingleProductPage } from '../Pages'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justity-content: center;
    align-items; center;
`
const ProductGrid = ({products}) => {

  const navigate = useNavigate(); 

  const handleClick = (id) => {
    navigate(`/productpage/${id}`)
  }

  return (
    <Container>
         {products.map((product)=> (
          <div item key={product.id}>
            <ProductCard onClick={console.log("something else")} product ={product} />
          </div>
        ))} 
    </Container>

  )
}

export default ProductGrid