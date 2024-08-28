import  React from 'react';
import styled from 'styled-components';
//import Navbar from './Navbar';
import {Search,ShoppingCart} from '@mui/icons-material';
//import {} from '@mui/icons-material';

import Badge from '@mui/material/Badge';
//import { Search } from '@material-ui/icons';
import{mobile} from '../responsive';
const Container = styled.div `
   height : 60px;
   color: black;
    ${mobile({height:"50px"})}
   ${mobile({padding:"20px"})}
   
    flex:1;
   `
;
const Wapper = styled.div `
   padding : 5px 10px;
   background-color :white;
    display:flex;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}

   `

;
const SearchContiner = styled.div    `
   border : 0.5px solid lightgray;
   display : flex;
   align-items : center;
    margin-left:20px;
    padding:5px;
    margin-TOP:10px;
   ${mobile({marginLeft:"0px"})}

   `

;
const Input = styled.input `
border :white;
   display : flex;
   align-items : center;
   background-color :white;
   font-size : 15px;
   outline: none;
   ${mobile({width:"50px"})}

   `;
const Logo = styled.h1`
height:10px;
margin-top :0.5px;
margin-left :70px;
${mobile({fontSize:"15px"})}
${mobile({marginLeft:"0px"})}
${mobile({marginTop:"20px"})}

`;

const Left = styled.div`   `
;
const Language = styled.span`
    font-size :16px;
    cursor : pointer;
    margin-top :17px;
    ${mobile({display:"none"})}

`;
const Center = styled.div `
   flex:1;
   text-align:center;
   
   `
;
const Right = styled.div `
   flex:1;
   display : flex;
   text-align:center;
   margin-top :15px;
   margin-right :15px;
   justify-content: flex-end;
   `
;
const MenuItem = styled.div`
    font-size: 14px;
    cursor : pointer;
    margin-left :25px;`;

const Navbar  = () => {
    return (
        <Container>
            <Wapper>
                <Language>EN</Language>
                <SearchContiner>
                    <Input placeholder = "Search"/>
                    <Search style ={{color:"gray" ,fontSize:20 }}/>
                </SearchContiner>
                <Left></Left>
                <Center><Logo>SHPPING.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SGIN IN</MenuItem>    
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                       
                        <ShoppingCart/>
                        </Badge>
                    </MenuItem>    

                </Right> 
            </Wapper>
              
        </Container>

      );
}
 
export default Navbar;