import React from 'react'
import styled from 'styled-components'
import { jumboItems } from '../Utils/data'
import ProductCard from './ProductCard'


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap; 
`
const ProductGrid = () => {
  return (
    <Container>
        {jumboItems.map(item=>(
            <ProductCard item={item} key={item.id}/>
        ))}
    </Container>

  )
}

export default ProductGrid