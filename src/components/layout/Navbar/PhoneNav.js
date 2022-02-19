import React, {useState}  from 'react';

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
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Open Banking" icon={<AccountBalanceIcon/>} />
                <BottomNavigationAction label="GOV" icon={<ContentPasteGoIcon/>}   />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>}   />
            </BottomNavigation>
        </div>
    );
};

export default PhoneNav;