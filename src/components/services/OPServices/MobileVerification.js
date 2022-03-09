import React, {useEffect, useState}  from 'react';
import axios from 'axios';

//MUI 
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

//MUI snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//styles
import "./styles/mobileverification.scss";

//icon 
import logo from "./styles/img/logo.png";


//===============MUI snackBar ======================
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
//===============MUI snackBar ======================

const MobileVerification = () => {

    //===================snackBar====================

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

    //===================snackBar====================

    //===============taken data from server =================

    const [takenData, setTakenData] = useState(false)

    //===============taken data from server =================

    const [data , setData] = useState("");
    
    const valueHandler = (event) =>{
        setData({
            ...data,
            [event.target.name] : event.target.value,
        });
    }


    const sendData = () =>{

        const refreshApiURL = "https://micro.satpay.ir/api/oauth/refresh-token";
        const RefreshAPIkey = {
            refreshAPIkey :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWYwMmEyNTdjYmIxYTAwMTkxOTY1ZmQiLCJ1c2VyTmFtZSI6IkFsaS1HaG9yYmFuaTAzIiwiSVAiOlsiNS4yMTcuMjUyLjIyOCJdLCJlbWFpbCI6IjAzYWxpZ2hvcmJhbmlAZ21haWwuY29tIiwicm9sZSI6ImRldmVsb3BlciIsImFwcE5hbWUiOiJzYXRwYXktdGVzdCIsImlhdCI6MTY0MzEyOTc4NiwiZXhwIjoyNDIwNzI5Nzg2fQ.tYQ3vh0leS8QnvvvR4J8B_KE8-l4EV3-4bN4dc9XvR8"
        };


        const URL = "https://micro.satpay.ir/api/open-banking/v1/shahkar/inquiry";
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem("apiKey"), 
                'appname': 'satpay-test', 
            }
        }
        axios.post(URL , data, config)
            .then(response =>{
                console.log(response);
                console.log(response.data.description.shahkarInquiry.result);
                setTakenData(response.data.description.shahkarInquiry.result)
            })
            .catch(error => {
                console.log(error.response);
                if(error.response.status === 401){
                    axios.post(refreshApiURL, RefreshAPIkey)
                        .then(response =>{
                            localStorage.setItem("apiKey" , response.data.description.APIkey.APIkey);
                            sendData();
                        })
                }else if (error.response.status === 422){
                    setSnackBar({...snackBar, message : "Check out the form" , severity: "error" , autoHideDuration : 20000})
                    setOpen(true);
                }else{
                    setSnackBar({...snackBar, message : error.response.data.description.message , severity: "error" , autoHideDuration : 20000})
                    setOpen(true);
                }
            })
    }

    const hey = () =>{
        console.log(new Date().getTime());
        const d = new Date().setFullYear(2012)
        console.log(d);
        console.log(new Date().getTime());
    }

    return (
        <Grid container spacing={2} className='mobile-container'>
            <Grid xs={0} sm={1} md={3}></Grid>
            <Grid xs={12} sm={10} md={6}>
                <Grid container className='mobile-box'>
                    <Grid container className='intro-Grid'>
                        <Grid xs={8} sm={9} >
                            <p onClick={hey}>This service shows inquiry of tax code </p>
                        </Grid>
                        <Grid xs={4} sm={3} >
                            <div className='img-div'>
                                <img src={logo} alt='icon'/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className='input-Grid'>
                        <TextField
                        type="mobile"
                        label="Mobile Number"
                        variant="standard"
                        fullWidth
                        className="input-fields"
                        name="mobile"
                        value={data.mobile}
                        onChange={valueHandler}
                        />
                    </Grid>
                    <Grid container className='input-Grid'>
                        <TextField
                        type="nationalID"
                        label="National ID"
                        variant="standard"
                        fullWidth
                        className="input-fields"
                        name="nationalID"
                        value={data.nationalID}
                        onChange={valueHandler}
                        />
                    </Grid>
                    <Grid container className='button-Grid'>
                        <button onClick={sendData}>Check</button>
                    </Grid>
                        {
                            takenData && 
                                <Grid container className='response-Grid'>
                                    <Grid xs={0} sm={2}></Grid>
                                    <Grid xs={12} sm={8}>
                                        {takenData.isValid ?
                                        <ul>
                                            <li>
                                                The national ID and telephone number belong to the same person 
                                            </li>
                                        </ul>
                                        :
                                        <ul>
                                            <li>
                                                The national ID and telephone number belong to the different person 
                                            </li>
                                        </ul>
                                        }
                                    </Grid>
                                    <Grid xs={0}sm={2}></Grid>
                                </Grid>
                        }
                </Grid>
            </Grid>
            <Grid xs={0} sm={1} md={3}></Grid>
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

export default MobileVerification;