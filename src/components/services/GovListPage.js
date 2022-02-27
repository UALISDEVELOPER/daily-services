import React from 'react';
import { Link } from "react-router-dom";

//MUI 
import Grid from '@mui/material/Grid';

//============
import { GovList } from './govList';

//styles
import "./styles/services.scss"


const GovListPage = () => {
    return (
        <Grid container spacing={2} className='services-container'>
            {GovList.map(item=>
                <Grid item  xs={12} sm={6} md={4} key={item.key}>
                    <Link to={item.link}>
                        <Grid container className='services-Grid'>
                            <Grid xs={6}>
                                <img src={item.icon} alt="icon"/>
                            </Grid>
                            <Grid xs={6}>
                                <p className='title'>{item.title}</p>
                                <p className='desc'>{item.decription}</p>
                            </Grid>
                            <Grid xs={12}>
                                <p className='status'>{item.status}</p>
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>
            )}
        </Grid>
    );
};

export default GovListPage;