import React from 'react'
import  styled from 'styled-components';
import{mobile} from '../responsive';

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://i.ibb.co/BBJ7PPs/img12.webp");
    background-size:cover ;
    display:flex;
    align-items:center;
    justify-content:center;

`;

const Wapper=styled.div`
    width:20%;
    padding:20px;
    background-color:white;

    ${mobile({width:"75%"})}
    
`;
const Title=styled.h1`
    font-size:25px;
    font-weight:700;
`;
const Form=styled.form`
    display:flex;
    flex-direction:column;
    margin-bottom:10px 0px 0px 0px;  
 
`;
const Input=styled.input`
   flex:1;
    min-width:40%;
    margin : 10px 0px;
    padding : 10px;
`;
const Link=styled.a`
    margin:5px 0px;
    font-size :12px
    text-decoration: underline;
    cursor:pointer;
`;
const Button=styled.button`
    padding :15px 20px;
    font-size:20px;
    width:40%;
    background-color : teal ;
    cursor : pointer;
    color:white;
    border:none;
    margin-bottom:10px;
    &:hover{
        background-color : #f38168
 ;
    }
`;
const Login = () => {
  return (
    
    <Container>
        <Wapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "User Name" />
                 <Input placeholder = "Password" />
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
           
        </Wapper>

    </Container>
  )
}

export default Login
