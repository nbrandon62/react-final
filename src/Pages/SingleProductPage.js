import React , { useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from "react-router-dom";



const Container = styled.div`
  margin: 10px;
`
const Wrapper = styled.div`
  padding: 55px;
  display: flex;
`
const ImageContainer = styled.div`
  flex: 2;
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
  const {id} = useParams();
  const [ singleProduct, setSingleProduct] = useState([])
  const [cartItem, setCartItem] = useState([]);


  useEffect(()=>{
    const fetchSingleProduct = async () => {
    try{
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setSingleProduct(data)
    } catch(err) {
      console.log(err)
    }
  }
  fetchSingleProduct()
  }, [])

  const onAdd = (singleProduct) => {
    const exist = cartItem.find((x) => x.id === singleProduct.id);
    if(exist){
      setCartItem(
        cartItem.map((x)=>
        x.id === singleProduct.id ? {...exist, qty: exist.qty +1 } : x
        )
      );
    } else{
      setCartItem([...cartItem, {...singleProduct, qty:1 }])
    }
    console.log("cart contains:", cartItem)
  };

  return (
    <Container>
      <Wrapper>

        <ImageContainer>
          <Image src={singleProduct.image} />
        </ImageContainer>

        <InfoContainer>

          <Title>{singleProduct.title}</Title>
          <Description> {singleProduct.description}</Description>
          <Price> {singleProduct.price}</Price>

          <AddContainer>
              <AmountContainer>
                <RemoveIcon />
                <Amount>1</Amount>
                <AddIcon />
              </AmountContainer>
             <Button onClick={onAdd}>Add To Cart</Button> 
          </AddContainer>

        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default SingleProductPage