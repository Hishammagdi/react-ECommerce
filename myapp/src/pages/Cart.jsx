import React from 'react'
import  styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Footer } from './../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import{mobile} from '../responsive';

const Container = styled.div`

`;
const Wapper = styled.div`
    padding:20px;
    background-color:white;
    ${mobile({padding : "10px" })}
`;
const Title=styled.h1`
    font-weight:500;
    text-align:center;
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
        ${mobile({margin:"10px"})}

`;
const TopTexts=styled.div`
    ${mobile({display : "none" })}


`;
const TopText=styled.span`
  text-decoration: underline;
    cursor:pointer ;
    margin:0px 10px;
`;
const Bottom=styled.div`
    ${mobile({flexDirection : "column" })}
    display:flex ;
    justify-content:space-between;
`;
const Info = styled.div`
        flex:3;
`

const Product = styled.div`
        display:flex;
        justify-content:space-between;
        ${mobile({flexDirection : "column"  ,overflow: "auto"})};
`;
const ProductDetail = styled.div`
        flex:2;
        display:flex;
`;
const Image = styled.img`
        width:200px;
        height:200px;
`;
const Details = styled.div`
        padding:20px;
        display:flex ;
        flex-direction:column ;
        justify-content:space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;     
    background-color :${props=> props.color} ;
`;
const PriceDetail = styled.div`
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

`;
const ProductAmountContainer = styled.div`
       display:flex ;
       align-items:center;
       margin-right:500px;
       margin-bottom:20px;
    ${mobile({marginLeft : "520px" ,marginBottom : "0px" })}

`;
const ProductAmount = styled.div`
        font-size:30px;
        margin:5px;

`;
const ProductPrice = styled.div`
        font-size:30px;
       margin-right:500px;
       font-weight:200;
    ${mobile({margin: "20px",marginBottom : "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
        flex:1;
        border:0.5px solid lightgray;
        border-radius:10px;
        padding:20px;
        height:40vh ;
    ${mobile({marginTop : "10px" })}
        
`;
const SummaryTitle = styled.h1`
        font-weight:200;
`;
const SummaryItem = styled.div`
  margin:30px 0px ;
  display:flex ;
  justify-content:space-between;
  font-weight:${props =>props.type ==="total" &&"500"};
  font-size:${props =>props.type ==="total" &&"24px"};
  
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
     padding :15px 20px;
    font-size:20px;
    width:70%;
    background-color : teal ;
    cursor : pointer;
    color:white;
    border:none;
    margin-bottom:10px;
    &:hover{
        background-color : #f38168
 ;
    }
    ${mobile({width:"75%"})}
    
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
                    <Info> 
                        <Product>
                            <ProductDetail>
                                <Image src = "https://i.ibb.co/yX5jk3m/img13-avif.png"/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 93813718293
                                </ProductId>
                                <ProductColor color="black" />
                                <ProductSize>
                                    <b>Size:</b> 37.5
                                </ProductSize>
                            </Details>
                           
                            </ProductDetail>
                            <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 30
                            </ProductPrice>
                            </PriceDetail>
    
                        </Product>   
                        
                        <Hr />

                        <Product>
                            <ProductDetail>
                                <Image src = "https://i.ibb.co/tHWBs6V/img14.png"/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b>HAKURA T-SHIRT
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 9381376555
                                </ProductId>
                                <ProductColor color="gray" />
                                <ProductSize>
                                    <b>Size:</b> XL
                                </ProductSize>
                            </Details>
                           
                            </ProductDetail>
                            <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 20
                            </ProductPrice>
                            </PriceDetail>
                        </Product>     
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
   
                    </Summary>
                </Bottom>      
             </Wapper>
            <Footer/>
        </Container>
    )
}
