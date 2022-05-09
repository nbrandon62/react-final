import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
  margin: 10px;
`
const Wrapper = styled.div`
  padding: 55px;
  display: flex;
`
const ImageContainer = styled.div`
  flex: 2;
  background: black; 
  height: 500px;
  width: 350px;
`
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit:cover;
`
const InfoContainer = styled.div` 
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.div`
  font-weight: 200;
  font-size: 45px;
`
const Description = styled.div`
  margin: 20px 0px;
  font-size: 16px;
  display: flex;
`
const Price = styled.div`
  font-weight: 100;
  font-size: 28px;
  display: flex;
  justify-content: end;
  width: 90%;
  margin: 15px 0px;
` 
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px;
  cursor: pointer;
`
const Amount = styled.span`
  width: 40px;
  height: 33px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 10px;
`
const Button = styled.button`
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer; 
`
// const RemoveIcon = styled.div`
//   cursor: pointer;
// `
// const AddIcon = styled.div`
//   cursor: pointer;
// `

const SingleProductPage = () => {
  return (
    <Container>
        
      <Wrapper>
        <ImageContainer>

        </ImageContainer>

        <InfoContainer>
          {/* These are place holders for API info: title, description, and price */}
          <Title>BackPack</Title>
          <Description> basdkjcbaklbdflabfahjf</Description>
          <Price> 1000</Price>

          {/* This is the container for the add to cart button. needs useState functionality */}
          <AddContainer>
              <AmountContainer>
                <RemoveIcon />
                <Amount>1</Amount>
                <AddIcon />
              </AmountContainer>
             <Button>Add To Cart</Button> 
          </AddContainer>

        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default SingleProductPage