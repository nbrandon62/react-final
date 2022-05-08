import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height:  100px;
  background-color: #DAEDFF;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  margin: 15px;
  align-items: center;
`
const Logo = styled.div`
  flex:1;
`
const CartWrapper = styled.div`
  flex:1;
  text-align: end;
`
const ShoppingCart = styled.div`
  font-size: 20px;
  cursor: pointer;
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>

        <Logo> SLAMAZON </Logo>

        <CartWrapper>
          <ShoppingCart>
            <Badge badgeContent={10} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </ShoppingCart>
        </CartWrapper>

      </Wrapper>
    </Container>
  )
}

export default NavBar