import React from 'react'
import { Send } from '@mui/icons-material';
//import Newsletter from './Newsletter';
import  styled from 'styled-components';
import{mobile} from '../responsive';

const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column ;
    ${mobile({overflowX:"hidden"})}

`;
const Title = styled.h1`
    font-size:70px;
    ${mobile({textAlign:"center"})}
    ${mobile({fontSize:"60px"})}


`;
const Description = styled.div`
  font-size:24px;
  font-weight:300;
  margin-bottom:20px;
${mobile({textAlign:"center"})}


`;
const InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color:white;
    display:flex;
    justify-content:center;
    border:1px solid lightgray;
`;
const Input = styled.input`
   border :white;
   align-items : center;
   background-color :white;
   font-size : 25px;
   outline: none;
   flex:8; 
   padding-left:50px;
${mobile({width:"250px"})}

`;

const Button = styled.button`
   border :white;
   flex:1;
   align-items : center;
   background-color :teal;
   cursor:pointer;
    color:white;

`;


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder  ="Your email" />
            <Button>
               <Send/> 
            </Button>

        </InputContainer>

    </Container>
  )
}

export default Newsletter
