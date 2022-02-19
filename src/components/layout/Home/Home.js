import React, {useEffect, useState} from 'react';
//components
import MainNavBar from '../Navbar/MainNavBar';
import PhoneNav from '../Navbar/PhoneNav';

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
            lksdflsdflskl
        </div>
    );
};

export default Home;