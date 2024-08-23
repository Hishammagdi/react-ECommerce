import  styled from 'styled-components';


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
`;
const Title = styled.div`
  

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
`;
const Button = styled.button`
    padding :10px;
    font-size:20px;
    background-color :  transparent ;
    cursor : pointer;  
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
