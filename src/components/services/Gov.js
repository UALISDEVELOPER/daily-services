import React from 'react';
import { Route, Routes } from "react-router-dom";

//components
import GovListPage from './GovListPage';
import TaxInquiry from './GOVServices/TaxInquiry';


const Gov = () => {
    return (
        <Routes>
            <Route path="/" element={<GovListPage/>}/>
            <Route path="/tax-inquiry" element={<TaxInquiry/>}/>
        </Routes>
    );
};

export default Gov;