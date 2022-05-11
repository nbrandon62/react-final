import React , {useContext} from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { DataContext } from '../Context/DataContext'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justity-content: center;
    align-items; center;
`
const ProductGrid = () => {
  const { productData } = useContext(DataContext);

  return (
    <Container>
         {productData.map((product, index)=> (
          <div key={index}>
            <ProductCard product={product} id={product.id} />
          </div>
        ))} 
    </Container>

  )
}

export default ProductGrid