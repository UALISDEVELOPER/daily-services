import React, {useEffect, useState}  from 'react';
import { useNavigate, Link } from "react-router-dom";


//MUI
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//MUI icons
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//styles
import "./styles/phoneNav.scss"

const PhoneNav = () => {

    const [value, setValue] = useState(0);

    useEffect(()=>{
        console.log(window.location.pathname);  
        console.log(value);
        if(window.location.pathname ==="/home/mainPage/"){
            setValue(0)
        }else if (window.location.pathname ==="/home/openBanking/"){
            setValue(1)
        }else if (window.location.pathname === "/home/Gov/"){
            setValue(2)
        }else if(window.location.pathname === "/home/profile/"){
            setValue(3)
        }
    },[window.location.pathname])

    const navigate = useNavigate();
    const handleLink = (link) =>{
        navigate(link)
    }

    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className='PhoneNav'
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={()=> handleLink("/home/mainPage/")}/>
                <BottomNavigationAction label="Open Banking" icon={<AccountBalanceIcon/>} onClick={()=> handleLink("/home/openBanking/")}/>
                <BottomNavigationAction label="GOV" icon={<ContentPasteGoIcon/>}  onClick={()=> handleLink("/home/Gov/")} />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>} onClick={()=> handleLink("/home/profile/")}  />
            </BottomNavigation>
        </div>
    );
};

export default PhoneNav;