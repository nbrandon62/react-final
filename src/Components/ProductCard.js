import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  height=100%;
  flex:1;
  margin: 10px;
  background-color: #4285F4;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 400px;
`
const Wrapper = styled.div`
  flex: 1;

`
const Image = styled.div`
  height:80%;
`

const DescriptionContainer = styled.div`
  flex: 1
  display: flex;
  justify-content:center;
`
const Description = styled.div`
  display:flex;
  justify-content: center;
`

const ProductCard = ({ item }) => {
  return (
  <Wrapper>

    <ImageContainer>
      <ImageContainer>{/* <Image src={item.image} />  */}</ImageContainer>
    </ImageContainer>

    <DescriptionContainer>
      <Description> {item.title}</Description>
    </DescriptionContainer>

  </Wrapper>

  )
}

export default ProductCard