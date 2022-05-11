import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const Container = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 275px;
  height: 350px;
  flex-direction: column;
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  height: 85%;
  padding: 0px 6px;
  border: 1px solid #ECEDEE;
`
const Image = styled.img`
  width: 85%;
  height: 80%;
  object-fit: contain;
`
const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:start;
  flex: 1;
  width: 85%;
  margin: 0px 0px;
`
const Description = styled.div`
  display:flex;
  flex: 1;
  justify-content: start;
  align-items: center;
  font-size: 14px;
`
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:;
  flex: 1;
  width: 85%;
  margin: 0px 0px;
`
const Price = styled.div`
  display:flex;
  flex: 1;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  color: #B4B6B8;
`

const ProductCard = ({ product , id }) => {
  
  const navigate = useNavigate(); 

  const handleClick = (id) => {
    navigate(`/productpage/${id}`)
  }

  return (
  <Container onClick={()=>handleClick(id)}>

    <ImageContainer>
      <Image src={product.image} />
    </ImageContainer>

    <DescriptionContainer>
      <Description>
         {product.title}
      </Description>
    </DescriptionContainer>

    <PriceContainer>
      <Price>
        $ {product.price}
      </Price>
    </PriceContainer>
  </Container>

  )
}

export default ProductCard