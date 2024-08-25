import  styled from 'styled-components';

import{mobile} from '../responsive';
const Container = styled.div`
  
flex:1;
margin:3px;
height:70vh;
position : relative;

`;

const Image = styled.img`
width:100%;  
height:100%;
object-fit:cover;
${mobile({height:"30vh"})}

`;
const Title = styled.div`
   ${mobile({marginRight:"50px"})}
  
`;
const Info = styled.h1`
position : absolute;
top : 70%;
left: 30%;
width:100%
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color :white ;
${mobile({marginBottom:"300px"})}
${mobile({top:"10%"})}
${mobile({left:"10%"})}



`;
const Button = styled.button`
    padding :10px;
    font-size:20px;
    background-color :  transparent ;
    cursor : pointer;  
   ${mobile({marginRight:"150px"})}
   ${mobile({marginBottom:"200px"})}
   ${mobile({marginTop:"0px"})}
`;
export const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src = {item.img}/>
      <Info>
          <Title>
            {item.title}
          </Title>
          <Button>SHOP NOW</Button>      
       </Info>
    </Container>
  )
}

export default CategoryItem;
