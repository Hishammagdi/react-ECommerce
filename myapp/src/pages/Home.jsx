import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import  styled from 'styled-components';
import  Categories  from '../components/Categories';



const Container = styled.div`
    background-color:coral;
`;

const  Home= () => {
    return ( 
        <>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
         </>
     );
}
 
export default Home;