import React from 'react'
import styled from 'styled-components'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import {jumboItems} from "../Utils/data"; 
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px; 
    background-color: white;
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "20px"};
    right: ${props=> props.direction === "right" && "20px"};
    margin: auto;
    z-index: 2; 
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.jumboIndex * -100}vw);
    transition: all 1s ease;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;

`
const ImageContainer = styled.img`
    height: 100%;
    flex: 1;
    margin-left: 5rem;
`
// const Image = styled.div`
//     height: 80%;
// `
const InfoContainer = styled.div`
    flex: 1;
    margin-left: 10rem;  
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p `
    font-size: 20px ;
    margin: 50px 0px;
    letter-spacing: 1px;
`


const Jumbotron = () => {
    const [jumboIndex, setJumboIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setJumboIndex(jumboIndex > 0 ? jumboIndex -1 : 2); 
        } else{
            setJumboIndex(jumboIndex < 2 ? jumboIndex +1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction = "left" onClick = {() => handleClick("left")}>
            <ArrowCircleLeftOutlinedIcon /> 
        </Arrow>
         
        {/* This is the first slide in the jumbotron */}
        <Wrapper jumboIndex = { jumboIndex }>
            {jumboItems.map(item=>(
              <Slide>
                <ImageContainer>{/* {item.img} */}</ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                </InfoContainer>
              </Slide>
            ))}  
        </Wrapper>

        <Arrow direction = "right" onClick = {() => handleClick("right")}>
            <ArrowCircleRightOutlinedIcon /> 
        </Arrow>
    </Container>

    )
}

export default Jumbotron