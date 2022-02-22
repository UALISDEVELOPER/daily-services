import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

//MUI 
import Grid from '@mui/material/Grid';

//============
import { OpenBankingList } from './openBankingList';

//styles
import "./styles/services.scss"


const OpenBanking = () => {
    
    useEffect(()=>{
        OpenBankingList.map(item => console.log(item))
    },[])
    return (
        <Grid container spacing={2} className='services-container'>
            {OpenBankingList.map(item=>
                <Grid item  xs={12} sm={6} md={4} key={item.key}>
                    <Grid container className='services-Grid'>
                        <Grid xs={6}>
                            <img src={item.icon} alt="icon"/>
                        </Grid>
                        <Grid xs={6}>
                            <p className='title'>{item.title}</p>
                            <p className='desc'>{item.decription}</p>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default OpenBanking;