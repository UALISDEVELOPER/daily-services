import React, {useState}  from 'react';
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
                <BottomNavigationAction label="Open Banking" icon={<AccountBalanceIcon/>} onClick={()=> handleLink("/home/")}/>
                <BottomNavigationAction label="GOV" icon={<ContentPasteGoIcon/>}  onClick={()=> handleLink("/home/")} />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>} onClick={()=> handleLink("/home/profile/")}  />
            </BottomNavigation>
        </div>
    );
};

export default PhoneNav;