import React from 'react'
import  styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Footer } from './../components/Footer';
const Container = styled.div`

`;
const Wapper=styled.div`
    padding:20px;
    background-color:white;
`;
const Title=styled.h1`
    font-weight:500;
    text-align:center;
`;
const Bottom=styled.div`
    font-size:25px;
    font-weight:700;
`;
const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    padding :15px 20px;
    font-size:20px;
    cursor : pointer;
    border : ${props =>
    (props.type) ==="filled"&&"none"};
    background-color : ${(props) =>
    props.type ==="filled"? "black" : "transparent"};
    color : ${(props) =>props.type ==="filled"&&"white"};   
    &:hover{
        background-color : #f5dbd5};
`;
const TopTexts=styled.div`

`;
const TopText=styled.span`
  text-decoration: underline;
    cursor:pointer ;
    margin:0px 10px;
`;
const Info = styled.div`

`;
const Summary = styled.div`

`;
export const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
             <Wapper>
                 <Title>
                     YOUR BAG
                 </Title>
                 <Top>
                     <TopButton>CONTINUE SHOPPING</TopButton>
                     <TopTexts>
                       <TopText>Shopping Bag(2)</TopText>
                       <TopText>Your Wish List(0)</TopText>
                     </TopTexts>
                                          
                     <TopButton type="filled">CHECKOUT NOW</TopButton>
                 </Top>
                <Bottom>
                    <Info> info </Info>
                    <Summary> </Summary>
                </Bottom>      
             </Wapper>
            <Footer/>
        </Container>
    )
}
