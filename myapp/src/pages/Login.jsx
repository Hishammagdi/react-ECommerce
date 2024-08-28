import {React} from 'react'
import  styled from 'styled-components';
import{mobile} from '../responsive';
/*import {BrowserRouter, Routes , Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import { RouterProvider, Outlet } from 'react-router';
*/
import Home from'../pages/Home';
//import { Switch, Route, Redirect ,useNavigate}from "react-router-dom";
//import { useNavigate,Navigate, Outlet}from "react-router-dom";
//import { handleLogin } from './Login';

//import { BrowserRouter,RouterProvider,Route,Routes, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
//import { AssignmentReturnSharp } from '@mui/icons-material';
//import Navbar from './../components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

//import { useNavigate,useLocation}from "react-router-dom";


const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://i.ibb.co/BBJ7PPs/img12.webp");
    background-size:cover ;
    display:flex;
    align-items:center;
    justify-content:center;

`;

const Wapper=styled.div`
    width:20%;
    padding:20px;
    background-color:white;

    ${mobile({width:"75%"})}
    
`;
const Title=styled.h1`
    font-size:25px;
    font-weight:700;
`;
const Form=styled.form`
    display:flex;
    flex-direction:column;
    margin-bottom:10px 0px 0px 0px;  
 
`;
const Input=styled.input`
   flex:1;
    min-width:40%;
    margin : 10px 0px;
    padding : 10px;
`;
const Link=styled.a`
    margin:5px 0px;
    font-size :12px
    text-decoration: underline;
    cursor:pointer;
`;

const Button=styled.button`
    padding :15px 20px;
    font-size:20px;
    width:40%;
    background-color : teal ;
    cursor : pointer;
    color:white;
    border:none;
    margin-bottom:10px;
    &:hover{
        background-color : #f38168
 ;
    }
`;

/*const router = createBrowserRouter(
    createRoutesFromElements(
         <Route path ="/" element = {<RootLayout/>}>
          <Route path="/" element={<Home/>} /> 
          </Route>
    ));
function RootLayout(){
    return(
        <>
        <Login/>
        <Outlet/>
        </>
    )
}    */


/*const handleLogin=( val)=>{   
    console.log({val});
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "./Login.jsx" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    )      
};*/
const Login = () => {
    //let navigate = useNavigate();
   // let navigate = useNavigate();
    //let location = useLocation();
    //let { from } = location.state || { from: { pathname: "./Home.jsx" } };
    /*const handleLogin=()=>{   
        navigate({from});   
    };*/
    const handleLogin=()=>{   
        console.log('pass');
        return(
            <BrowserRouter>
                <Routes>
                    <Route path = "./" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
    
        )      
    };
  return (
    <Container>
        <Wapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "User Name" />
                <Input placeholder = "Password" />
                <Button onclick={handleLogin}>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wapper>
    </Container>
  )
}

export default Login
