import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";

//styles
import "./styles/mainNav.scss"

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { deepOrange } from '@mui/material/colors';

//MUI icons
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//icon
import menuIcon from "./styles/img/menu-icon/1x/menu.png";

//logo
import Logo from "./styles/img/Logo/logo.png"


const MainNavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    const goToProfile = () =>{
        navigate("/home/profile/");
        handleCloseUserMenu();
    }

    const logoutHandler = () =>{
        localStorage.clear();
        navigate("/Login", {replace : true})
    }

    return (
        <div>
            <AppBar position="static" className="appBar">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={Logo} alt='logo' className='logo'/>
                        
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                            <img src={menuIcon} alt='menu icon'/>
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                            <MenuItem onClick={handleCloseNavMenu} >
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Open Banking</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">GOV</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={Logo} alt='logo' className='logo'/>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            className='menuItem'
                        >
                            <Link to="/home/mainPage/" className='main-menu-link'>
                                Home
                            </Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            className='menuItem'
                        >
                            <Link to="/home/openBanking/" className='main-menu-link'>
                                Open Banking
                            </Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            className='menuItem'
                        >
                            <Link to="/home/Gov/" className='main-menu-link'>
                                GOV
                            </Link>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profile">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                            sx={{ bgcolor: deepOrange[500] }}
                            alt="Remy Sharp"
                        >
                            {/* {localStorage.getItem("user").split("")[0].toLocaleUpperCase()} */}
                            
                        </Avatar>
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        <MenuItem onClick={goToProfile}>
                                <AccountCircleIcon/>
                                <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                        <MenuItem onClick={logoutHandler}>
                                <LogoutIcon/>
                                <Typography textAlign="center">Log out</Typography>
                        </MenuItem>
                        </Menu>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MainNavBar;