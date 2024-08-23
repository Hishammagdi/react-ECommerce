import React from 'react'

import  styled from 'styled-components';
import { ShoppingCart,Search,Favorite } from '@mui/icons-material';

const Container = styled.div`
    flex:1;
    margin:5px;
`;
const Circle = styled.div`

`;
const Image  = styled.img`

`;
const Info = styled.div`

`;
const Icon = styled.div`

`;
const Product = ({items}) => {
  return (
    <Container>
      <Circle/>
      <Image src = {items.img} />
      <Info>
        <Icon>
            <ShoppingCart/>
        </Icon>          
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
