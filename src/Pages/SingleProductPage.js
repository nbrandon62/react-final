import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Container = styled.div`
  margin: 10px;
`;
const Wrapper = styled.div`
  padding: 55px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 2;
  height: 80vh;
  width: 350px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.div`
  font-weight: 200;
  font-size: 45px;
`;
const Description = styled.div`
  margin: 20px 0px;
  font-size: 16px;
  display: flex;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 28px;
  display: flex;
  justify-content: end;
  width: 90%;
  margin: 15px 0px;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 40px;
  height: 33px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 10px;
`;
const CartButton = styled.button`
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;

const ShopButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 90%;
`;
const ShopButton = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;

const SingleProductPage = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setSingleProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleProduct();
  }, []);

  // this is the add to cart button function

  // const onAdd = (singleProduct) => {
  //   const exist = cartItem.find((x) => x.id === singleProduct.id);
  //   if (exist) {
  //     setCartItem(
  //       cartItem.map((x) =>
  //         x.id === singleProduct.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItem([...cartItem, { ...singleProduct, qty: 1 }]);

  //     let cart = JSON.stringify([...cartItem, { ...singleProduct, qty: 1 }]);
  //     localStorage.setItem("cart", cart);
  //   }
  //   console.log("cart contains:", cartItem);
  // };

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={singleProduct.image} />
        </ImageContainer>

        <InfoContainer>
          <Title>{singleProduct.title}</Title>
          <Description> {singleProduct.description}</Description>
          <Price>$ {singleProduct.price}</Price>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <CartButton onClick={() => addToCart({ singleProduct })}>
              Add To Cart
            </CartButton>
          </AddContainer>

          <ShopButtonContainer>
            <Link to="/productpage">
              <ShopButton> Keep Shopping </ShopButton>
            </Link>
          </ShopButtonContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProductPage;
