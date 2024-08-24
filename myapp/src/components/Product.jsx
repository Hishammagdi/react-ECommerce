import React from 'react'

import  styled from 'styled-components';
import { ShoppingCart,Search,Favorite } from '@mui/icons-material';

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position :absolute;
    top :0;
    left:0;
    z-index:3;
    align-items:center;
    justify-content:center;
    display:flex ;
    background-color:rgba(0,0,0,0.2);
    transition:all 1s ease;
`;

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#F0F8FF;
    position:relative;
    &:hover ${Info}{
     opacity:1 ;
    }
`;
const Circle = styled.div`
    width : 200px;
    height:20px ;
    border-radius:50%;
    background-color:white;
    position:absolute;

`;
const Image  = styled.img`
    height:75% ;
    z-index:2;
`;

const Icon = styled.div`
    width:40px;
    height:40px ;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white ;
    margin:10px;
    transition:all 1s ease;
    &:hover{
     background-color :#FAEBD7  ;
     transform :scale(1.1);
     cursor:pointer;
    }
`;
const Product =( {item})=>   {
  return (
    <Container>
      
      <Image src = {item.img} />
      <Info>
        <Icon>
            <ShoppingCart/>
        </Icon>                  
        <Icon>

            <Search/>
        </Icon>          
        <Icon>

            <Favorite/>
        </Icon>          
        
      </Info>
    </Container>
  )
}

export default Product
