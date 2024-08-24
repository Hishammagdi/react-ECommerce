import React from 'react'
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div ` 

`;
const Wapper = styled.div ` 
    padding:50px;
    display:flex;
`;

const ImgContainer = styled.div ` 
    flex:1;
`;
const Image = styled.img ` 
    width:100%:
    height:90vh;
    object-fit:cover;
`;

const InfoContainer = styled.div ` 
    flex:1;
    padding :0px 50px;
`;
const Title = styled.h1` 
    font-weight:200;
`;
const Description = styled.p ` 
    margin:20px 0px;
`;
const Price = styled.span ` 
    font-weight:200;
    font-size : 40px;
`;

const FilterContainer = styled.div ` 
  width:50%;
  margin : 30px 0px;
  display:flex ;
  justify-content : space-between;
`;
const Filter = styled.div ` 
    display:flex ;
    align-items:center;
`;
const FilterTitle = styled.span ` 
    font-size:30px;
    font-weight:300;
    margin-right:5px;
`;
const FilterColor = styled.div ` 
    width:20px;
    height:20px ;
    border-radius:50%;
    background-color :${props=>props.color};
    margin-left:5px;
    margin-top:8px;
    cursor:pointer;
`;

const FilterSize = styled.select ` 
    margin-left:10px;
    padding:5px;
    margin-top:8px; 
   
    width:70px ;
    border: 3px solid teal;
    cursor : pointer;
    &:hover{
        background-color : #f8f4f4 ;
    }
`;
const FilterSizeOption = styled.option`

  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 3px solid teal;
  cursor : pointer;
    color:black;
    &:hover{
        background-color : #f8f4f4 ;
    }
`;
const AddContainer = styled.div ` 
    width : 50%;
    display:flex;
    align-items:center;
    justify-content : space-between;    
`;
const AmountContainer = styled.div` 
    display:flex;
    align-items:center;
    font-weight:700;
`;
const Amount = styled.span ` 
    width:30px;
    height:30p;
    border-radius:7px;
    border: 2px solid teal;
    display :flex;
    align-items:center;
    justify-content :center;
    margin:0px 5px;   
     
`;
const Button = styled.button ` 
    padding :15px;
    font-size:20px;
    border: 3px solid teal;
    background-color : white ;
    cursor : pointer;
    color:black;
    &:hover{
        background-color : #f8f4f4 ;
    }
`;
export const Product = () => {
    return ( 
        <Container>
            <Navbar/>
            <Announcement/>
            <Wapper>
                <ImgContainer>
                    <Image src = "https://i.ibb.co/Cs46hV8/img10.jpg"/>
                </ImgContainer>
                <InfoContainer>
               
                    <Title>
                      Denim Jumpsuit      
                    </Title>
                    <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                    </Description>     
                    <Price>$ 20 </Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                 color 
                            </FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter >
                            <FilterTitle>
                                    Size 
                            </FilterTitle>
 
                            <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Add/>
                            <Amount> 1 </Amount>
                            <Remove/>
                        </AmountContainer>
                        <Button> ADD TO CART </Button>

                    </AddContainer>
                </InfoContainer>
            </Wapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default Product;