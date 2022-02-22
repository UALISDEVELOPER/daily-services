import React, {useEffect, useState} from 'react';
import {Routes , Route} from "react-router-dom";

//navbar components
import MainNavBar from '../Navbar/MainNavBar';
import PhoneNav from '../Navbar/PhoneNav';

//components
import Profile from '../profile/Profile';
import MainPage from './MainPage';

//style
import "./style/home.scss"

const Home = () => {

    const [screenWidth , setScreenWidth] = useState(true);

    useEffect(()=>{
        console.log(window.innerWidth);
        setScreenWidth(window.innerWidth);
    },[])

    return (
        <div className="Home-container">
            {
                screenWidth > 600 ?
                <div>
                <MainNavBar/>
                <br/><br/><br/><br/>
                </div>
                :
                <PhoneNav/>
            }
            <Routes>
                <Route path="/profile/" element={<Profile/>}/>
                <Route path="/mainPage/" element={<MainPage/>}/>
            </Routes>
        </div>
    );
};

export default Home;