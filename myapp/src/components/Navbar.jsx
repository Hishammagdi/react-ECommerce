import  React, { Component } from 'react';
import styled from 'styled-components';
//import Navbar from './Navbar';
import {Search} from '@mui/icons-material';
//import { Search } from '@material-ui/icons';

const Container = styled.div 
   `
   height : 100px;
   color: palevioletred;

   `
;
const Wapper = styled.div 
   `
   padding : 5px 10px;
   background-color :white;
    display:flex;
    justify-content: space-between;
   `

;
const SearchContiner = styled.div 
   `
   border : 0.5px solid lightgray;
   display : flex;
   align-items : center;
    margin-left:25px;
    padding:5px;
   `

;
const Input = styled.input 
   `border :none;
   display : flex;
   align-items : center;
   background-color :white;
   
   `
;
const Logo = styled.h2`
height:5px;
margin-top :0.5px
` 

const Left = styled.div 
   `
   `
;
const Language = styled.span`
    font-size :14px;
    cursor : pointer;
`;
const Center = styled.div 
   `
   flex:1;
   text-align:center;
   `
;
const Right = styled.div 
   `
   `
;
const Navbar  = () => {
    return (
        <Container>
            <Wapper>
                <Language>EN</Language>
                <SearchContiner>
                    <Input/>
                    <Search/>
                </SearchContiner>
                <Left></Left>
                <Center><Logo>Hisham.</Logo></Center>
                <Right>Right</Right> 
            </Wapper>
              
        </Container>

      );
}
 
export default Navbar;