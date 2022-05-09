import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 35px;
`
const LeftWrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content; start;
`
const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`
const LeftContainer = styled.div`
  display: flex;  
`
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;

`
const Quantity = styled.div`
  display: flex;
  padding: 0px 15px;  
`
const Price = styled.div`
  display: flex;
  padding: 0px 15px;
`
const Total = styled.div`
  display: flex;
  padding: 0px 15px;
`

const Cart = () => {
  return (
    <Container>
      <LeftWrapper>
        <LeftContainer> My Items </LeftContainer>
      </LeftWrapper>
      
      <RightWrapper>
        <RightContainer>
          <Quantity>Quantity</Quantity>
          <Price>Price</Price>
          <Total>Total</Total>
        </RightContainer>
      </RightWrapper>

    </Container>
  )
}

export default Cart