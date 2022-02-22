import React from 'react';
import { Link } from "react-router-dom"

//MUI 
import Grid from '@mui/material/Grid';

//styles
import "./style/mainPage.scss"

//icon
import openBankingIcon from "./style/img/openBanking.png";
import govIcon from "./style/img/gov.png";
import comingSoonIcon from "./style/img/comingSoon.png"


const MainPage = () => {
    return (
        <Grid container spacing={3} className='mainPage-container'>
            <Grid item  xs={12} sm={6} md={4}>
                <Grid container className='mainPage-Grid'>
                    <Grid xs={12}>
                        <img src={openBankingIcon} alt='open banking icon'/>
                    </Grid>
                    <Grid xs={12}>
                        <p>Open banking services</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <Grid container className='mainPage-Grid'>
                    <Grid xs={12}>
                        <img className='govIcon' src={govIcon} alt='open banking icon'/>
                    </Grid>
                    <Grid xs={12}>
                        <p>GOV services</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
                <Grid container className='mainPage-Grid'>
                    <Grid xs={12}>
                        <img src={comingSoonIcon} alt='open banking icon'/>
                    </Grid>
                    <Grid xs={12}>
                        <p>More services comming soon ...</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainPage;