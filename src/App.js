import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//components
import Home from './components/layout/Home/Home';
import Signup from './components/register/Signup';
import Login from './components/register/Login';

//styles
import "./styles/app.scss"


function App() {

  //===============login client test======================

    const navigate = useNavigate()

    useEffect(()=>{
      !localStorage.length && navigate("/Login" ,{replace : true})
    },[])
  //===============login client test======================

  return (
    <>
      <Routes>
        <Route path="/home//*" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
