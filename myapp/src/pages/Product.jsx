import React from 'react'
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';

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
 
`;
const FilterTitle = styled.span ` 
 
`;
const FilterColor = styled.div ` 
 
`;
const FilterSizeOption = styled.option ` 
 
`;
const FilterSize = styled.select ` 
 
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
                        <Filter>
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
                </InfoContainer>
            </Wapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default Product;