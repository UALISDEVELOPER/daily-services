import React from 'react';
import { useNavigate } from "react-router-dom"

// MUI 
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { deepPurple , pink} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';


//MUI Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';


//styles
import "./style/profile.scss"

const Profile = () => {

    const navigate = useNavigate();

    const logoutHandler = () =>{
        localStorage.clear();
        navigate("/Login", {replace : true})
    }
    const createAccountHandler = () =>{
        navigate("/Signup")
    }
    return (
        <Grid container spacing={1} className='profile-container'>
            <Grid xs={0} sm={3} md={4}></Grid>
            <Grid xs={12} sm={6} md={4}>
                <Grid container className='profileBox'>
                    <Grid container className='profile-heading-div'>
                        <Grid xs={12}  className="avatarGrid">
                            <Avatar sx={{ bgcolor: deepPurple[500] }} className='avatar'>
                                {/* {localStorage.getItem("user").split("")[0].toLocaleUpperCase()} */}
                            </Avatar>
                        </Grid>
                        <Grid xs={12} className='emailGrid'>
                            <Typography variant="p" gutterBottom component="div">
                                {/* {localStorage.getItem("user")} */}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container className='profileBody'>
                        <Grid container className='credit-Grid'>
                            <Grid xs={6}>Credit :</Grid>
                            <Grid xs={6}>200$
                                <Tooltip title="Increase credit" arrow>
                                    <AddIcon className='addIcon' color="secondary" />
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <Grid container className='pass-Grid'>
                            <Grid xs={6}>Account password :</Grid>
                            <Grid xs={6}>
                                    {/* {localStorage.getItem("pass")} */}
                                <Tooltip title="Change password" arrow>
                                    <EditIcon className='editIcon' color="secondary" />
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <Grid container className='logout-Grid'>
                            <Grid xs={12}>
                                <button onClick={logoutHandler}>Logout</button>
                            </Grid>
                            <Grid xs={12}>
                           
                            </Grid>
                        </Grid>
                        <Grid container className='createAccount-Grid'>
                            <Grid xs={12}>
                                <button onClick={createAccountHandler}>Create new account</button>
                            </Grid>
                            <Grid xs={12}>
                           
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={0} sm={3} md={4}></Grid>
        </Grid>
    );
};

export default Profile;