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

  //============== set API key ==================================
    useEffect(()=>{
      localStorage.setItem("apiKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWYwMmEyNTdjYmIxYTAwMTkxOTY1ZmQiLCJ1c2VyTmFtZSI6IkFsaS1HaG9yYmFuaTAzIiwiSVAiOlsiNS4yMTcuMjUyLjIyOCJdLCJlbWFpbCI6IjAzYWxpZ2hvcmJhbmlAZ21haWwuY29tIiwicm9sZSI6ImRldmVsb3BlciIsImFwcE5hbWUiOiJzYXQtcGF5LWRlbW8iLCJpYXQiOjE2NDMxMjk2NTgsImV4cCI6MTY0MzU2MTY1OH0._MiecgihCiuYDZxdGmsxlQ50sBab3X-5QrKNaunSje8")
    },[])
  //============== set API key ==================================

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
