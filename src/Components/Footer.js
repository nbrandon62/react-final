import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    padding: 100px;
    background-color: #FFF8E9;
`
const IconContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content:center; 
`
const Icon = styled.div`
    margin: 15px;
`
const CopyrightContainer = styled.div`
  flex: 1;
  justify-content:center;
`
const Copyright = styled.div`
  display:flex;
  justify-content: center;
`

const Footer = () => {
  return (
    <Container>
        <IconContainer>
            <Icon><Facebook /></Icon>
            <Icon><Twitter /></Icon>
            <Icon><Instagram /></Icon>
        </IconContainer> 

        <CopyrightContainer>
            <Copyright> SLAMAZON 2022</Copyright>
        </CopyrightContainer>
    </Container>
  )
}

export default Footer