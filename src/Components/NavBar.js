import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height:  100px;
 `
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`
const Left = styled.div`
  flex:1;
`
const Right = styled.div`
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

        <Left> SLAMAZON </Left>

        <Right>
          <ShoppingCart>
            <Badge badgeContent={10} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </ShoppingCart>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default NavBar