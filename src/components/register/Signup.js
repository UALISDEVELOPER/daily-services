import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

//MUI
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';



//MUI icons
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

//styles 
import "./styles/signup.scss"

//validator
import { signupValidate } from "./SignupValidate"

//===============MUI snackBar ======================
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
//===============MUI snackBar ======================

const Signup = () => {

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

    const [signupData, setSignupData] = useState({
        name: "" ,
        email: "" ,
        password: "",
    })

    const valueHandler = (event) =>{
        setSignupData({
            ...signupData,
            [event.target.name] : event.target.value
        })
    }

    const [focused , setFocused] = useState({
        name : false,
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
        setError(signupValidate(signupData))
        ///validator
        console.log(signupData);
    },[signupData])

    const sendData = () =>{
        setLoading(true);

        if(error.name || error.email || error.password){
            console.log("fail");
            setSnackBar({...snackBar, message : "Fill out the form", severity: "error"})
            setOpen(true);
            setLoading(false);
        }else{
            console.log("sending");
            axios.post("https://api.freerealapi.com/auth/register" , signupData)
                .then(response =>{
                    console.log(response);
                    if(response.data.status === 201){
                        setSnackBar({...snackBar, message :"Your account has been created successfully, now you can login" , severity: "success" , autoHideDuration : 20000})
                        setOpen(true);
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
        <Grid container className='signup-container'>
            <Grid xs={0} sm={3} md={4}></Grid>
            <Grid xs={12} sm={6} md={4}>
                <Grid xs={12} className='signupBox'>
                    <div className='signup-header'>
                        <p className='heading-text'>Welcome</p>
                        <p className='signup-text'>Signup here</p>
                        <Avatar sx={{ bgcolor: deepPurple[500] }} className='avatar'>
                            <AssignmentIndIcon/>
                        </Avatar>
                    </div>
                    <TextField
                        type="name"
                        label="name"
                        variant="standard"
                        fullWidth
                        id="name-input"
                        className="input-fields"
                        name="name"
                        value={signupData.name}
                        onChange={valueHandler}
                        onBlur={focuseHandler}

                    />
                    {error.name && focused.name && <span>{error.name}</span>}
                    <TextField
                        type="email"
                        label="email"
                        variant="standard"
                        fullWidth
                        id="email-input"
                        className="input-fields"
                        name="email"
                        value={signupData.email}
                        onChange={valueHandler}
                        onBlur={focuseHandler}
                    />
                    {error.email && focused.email && <span>{error.email}</span>}
                    <TextField
                        type="password"
                        label="password"
                        variant="standard"
                        fullWidth
                        id="password-input"
                        className="input-fields"
                        name="password"
                        value={signupData.password}
                        onChange={valueHandler}
                        onBlur={focuseHandler}
                    />
                    {error.password && focused.password && <span>{error.password}</span>}
                    <Grid xs={12}>
                        <button onClick={sendData}>Signup</button>
                        <p className='link'><Link to="/Login">Already have an Account ? Login</Link></p>
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
            {/* //=============Progress====================== */}
            {loading &&
                    <Grid container className='loaderContainer'>
                        <Grid xs={4}></Grid>
                        <Grid xs={4}>
                            <div className='loaderDiv'>
                                <div className='loader-inner-div'>
                                    <CircularProgress/>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={4}></Grid>
                    </Grid>
                        
                    }
            {/* //=============Progress====================== */}
        </Grid>

    );
};

export default Signup;