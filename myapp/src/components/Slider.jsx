import React, { useState } from 'react'
import  styled from 'styled-components';
import {ArrowLeft,ArrowRight} from '@mui/icons-material';
import {sliderItems} from '../data.js'
import{mobile} from '../responsive';

const Container = styled.div`
    width : 100%;
    height : 100vh;
    position: relative;
    display:flex;
   ${mobile({display:"none"})}

`;
const Arrow = styled.div`
    width : 50px;
    height:50px ;
    background-color : #fff7f7;
    border-radius : 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top:0;
    bottom:0;
    left:${props => props.direction ==="left" &&"10px"};
    right:${props => props.direction ==="right" &&"10px"};
    margin:auto;
    opacity:0.5;
    z-index:2;
`;
const Wapper = styled.div`
    height : 100;
    display:flex ;
    /*overflow:hidden;*/
    transition: all 2s ease;
    transform : translateX(${(props) =>props.slideIndex * -100}vw);
    
`

const Slide = styled.div`
    width :100vw;
    height:100vh ;
    display:flex ;
    align-items : center;
    flex:1;

    background-color:#${props=>props.bg} ;
`;
const ImgContainer = styled.div`
    height:100%;
    flex:1;

`;

const Body1 = styled.div`
     overflow-x: hidden;
     overflow-y: hidden;

`;

const Image1 = styled.img`
  
  height:100%;
  width : 40vw;
  /*object-fit:cover;*/

`

const InfoContainer = styled.div`   
    flex:1;
    padding:50px;
    width :60vw;
`;
const Title = styled.h1`
    font-size:70px ;
`
const Description = styled.p`
    margin:50px 0px ;
    font-size : 20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding :10px;
    font-size:20px;
    background-color : transparent ;
    cursor : pointer;

`
const Slider = () => {
    const[slideIndex,setSlideIndex]=  useState(0);
   const handelCklick=(direction)=>{
        if(direction==="left") {
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2);
        }
        else{
            setSlideIndex(slideIndex<2?slideIndex+1 : 0);
        }
   }
  return (
    <Container>
    <Body1>
        <Arrow direction ="left" onClick={()=>handelCklick("left")}>
            <ArrowLeft>

            </ArrowLeft>
        </Arrow>

        <Wapper slideIndex = {slideIndex}>
            {sliderItems.map(item=>(
            <Slide bg={item.bg} key = {item.id}>
                <ImgContainer>
                    <Image1 src={item.img} alt="Cover"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.Title}</Title>
                    <Description>{item.Description}</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>

            </Slide>
            
        ))}
        </Wapper>
        <Arrow direction ="right"  onClick={()=>handelCklick("right")}>

            <ArrowRight>

            </ArrowRight>
      </Arrow>
      </Body1>
    </Container>

  )
}

export default Slider
