import React, {useEffect, useState} from 'react';
import {Routes , Route} from "react-router-dom";

//navbar components
import MainNavBar from '../Navbar/MainNavBar';
import PhoneNav from '../Navbar/PhoneNav';

//components
import Profile from '../profile/Profile';
import MainPage from './MainPage';
import OpenBanking from '../../services/OpenBanking';
import Gov from '../../services/Gov';

//style
import "./style/home.scss"

const Home = () => {

    const [screenWidth , setScreenWidth] = useState(true);

    useEffect(()=>{
        setScreenWidth(window.innerWidth);
    },[])

    return (
        <div className="Home-container">
            {
                screenWidth > 600 ?
                <div>
                <MainNavBar/>
                <br/><br/><br/><br/><br/>
                </div>
                :
                <div>
                    <br/>
                    <PhoneNav/>
                </div>
            }
            <Routes>
                <Route path="/profile/" element={<Profile/>}/>
                <Route path="/mainPage/" element={<MainPage/>}/>
                <Route path="/openBanking//*" element={<OpenBanking/>}/>
                <Route path="/Gov//*" element={<Gov/>}/>
            </Routes>
        </div>
    );
};

export default Home;