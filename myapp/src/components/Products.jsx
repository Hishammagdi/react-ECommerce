import React from 'react'

import {popularProducts} from '../data.js'
import  styled from 'styled-components';


import Product from './Product';


const Container = styled.div`
    padding : 20px;
    display : flex;
`;


 const Products = () => {
  return (
    <Container>
      {popularProducts.map((items)=>(
          <Product item = {items} key={items.id} />
      ))}
    </Container>
  )
}

export default Products;
