import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

//MUI
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';


//MUI icons
import VpnKeyIcon from '@mui/icons-material/VpnKey';

//styles
import "./styles/login.scss"

//validator
import {loginValidate} from "./LoginValidate"

//===============MUI snackBar ======================
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
//===============MUI snackBar ======================

const Login = () => {
    const navigate = useNavigate()

    //===================SnachBar====================

    const [open, setOpen] = useState(false);

    const [snackBar , setSnackBar] = useState({
        message :"" ,
        severity : "",
        autoHideDuration : 6000
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    //===================SnachBar====================

    const [loading , setLoading] = useState(false);

    const [loginData, setLoginData] = useState({
        email: "" ,
        password: ""
    })

    const valueHandler = (event) =>{
        setLoginData({
            ...loginData,
            [event.target.name] : event.target.value
        })
    }

    const [focused , setFocused] = useState({
        email : false,
        password : false ,
    });

    const focuseHandler = (event) =>{
        setFocused({
            ...focused,
            [event.target.name] : true ,
        })
    }

    const [error, setError] = useState({});

    useEffect(()=>{
        setError(loginValidate(loginData))
        //validator
        console.log(loginData);
    },[loginData])

    const sendData = () =>{
        setLoading(true);

        if(error.name || error.email || error.password){
            console.log("fail");
            setSnackBar({...snackBar, message : "Fill out the form", severity: "error"})
            setOpen(true);
            setLoading(false);
        }else{
            console.log("sending");
            axios.post("https://api.freerealapi.com/auth/login" , loginData)
                .then(response =>{
                    console.log(response);
                    if(response.data.status === 200){
                        localStorage.setItem("user", loginData.email)
                        localStorage.setItem("pass", loginData.password)
                        navigate("/home" , {replace : true})
                        setLoading(false);
                    }else{
                        setSnackBar({...snackBar, message :"Something went wrong" , severity: "warning" , autoHideDuration : 20000})
                        setOpen(true);
                        setLoading(false);
                    }
                })
                .catch(error=> {
                    console.log(error.response)
                    setSnackBar({...snackBar, message : error.response.data.message , severity: "error" , autoHideDuration : 10000})
                    setOpen(true);
                    setLoading(false);
                })
        }
    }

    return (
            <Grid container className='login-container'>
                {/* //=============Progress====================== */}
                    {loading &&
                        <Grid xs={12}>
                            <LinearProgress />
                        </Grid>
                    }
                {/* //=============Progress====================== */}
                <Grid xs={0} sm={3} md={4}></Grid>
                <Grid xs={12} sm={6} md={4}>
                    <Grid xs={12} className='loginBox'>
                        <div className='login-header'>
                            <p className='heading-text'>Welcome back</p>
                            <p className='login-text'>Login here</p>
                            <Avatar sx={{ bgcolor: deepPurple[500] }} className='avatar'>
                                <VpnKeyIcon/>
                            </Avatar>
                        </div>
                        <TextField
                            type="email"
                            label="email"
                            variant="standard"
                            fullWidth
                            id="email-input"
                            className="input-fields"
                            name="email"
                            value={loginData.email}
                            onChange={valueHandler}
                            onBlur={focuseHandler}
                        />
                        {error.email && focused.email && <span>{error.email}</span>}
                        <TextField
                            type="password"
                            label="password"
                            variant="standard"
                            fullWidth
                            id="email-input"
                            className="input-fields"
                            name="password"
                            value={loginData.password}
                            onChange={valueHandler}
                            onBlur={focuseHandler}
                        />
                        {error.password && focused.password && <span>{error.password}</span>}
                        <Grid xs={12}>
                            <button onClick={sendData}>Login</button>
                            <p className='link'><Link to="/Signup">Dont have an Account ? Signup</Link></p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={0} sm={3} md={4}></Grid>

                {/* //================SnackBar============================= */}
                <Snackbar open={open} autoHideDuration={snackBar.autoHideDuration} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={snackBar.severity} sx={{ width: '90%' }} >
                        {snackBar.message}
                    </Alert>
                </Snackbar>
                {/* //================SnackBar============================= */}
            </Grid>
    );
};

export default Login;