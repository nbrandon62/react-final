import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
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

const CartPage = () => {

  

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

    <div>
      {/* {cartItem.length === 0 && <div>Cart is empty</div> } */}
    </div>

    </Container>
  )
}

export default CartPage