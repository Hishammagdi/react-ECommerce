import React from 'react'
import  styled from 'styled-components';
import {  } from '@mui/icons-material';

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://i.ibb.co/fDwStFK/img11.webp");
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Wapper=styled.div`
    width:40%;
    padding:20px;
    background-color:white;
`;
const Title=styled.h1`
    font-size:25px;
    font-weight:700;
`;
const Form=styled.form`
    display:flex;
    flex-wrap:wrap;
`;
const Input=styled.input`
   flex:1;
    min-width:40%;
    margin : 20px 10px 0px 0px;
    padding : 10px;
`;
const Agreement=styled.span`
    font-size:12px;
    margin:20px 0px;
`;
const Button=styled.button`
    padding :15px 20px;
    font-size:20px;
    width:40%;
    background-color : teal ;
    cursor : pointer;
    color:white;
    border:none;
    &:hover{
        background-color : #f38168
 ;
    }
    background-size:cover ;

`;
const Register = () => {
  return (
    <Container>
        <Wapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder = "Name" />
                <Input placeholder = "Last Name" />
                <Input placeholder = "User Name" />
                <Input placeholder = "Email"/>
                <Input placeholder = "Password" />
                <Input placeholder = "Confirm Password" />
                <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>

            </Form>
           
        </Wapper>

    </Container>
      
  )
}

export default Register
