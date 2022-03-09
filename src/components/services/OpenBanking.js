import React from 'react';
import { Route, Routes } from "react-router-dom";


//components
import IbanInqury from './OPServices/IbanInqury';
import OpenBankingListPage from './OpenBankingListPage';
import MobileVerification from './OPServices/MobileVerification';


const OpenBanking = () => {
    return (
        <Routes>
            <Route path="/" element={<OpenBankingListPage/>}/>
            <Route path="/iban-inquiry" element={<IbanInqury/>}/>
            <Route path="/mobile-verification" element={<MobileVerification/>}/>
        </Routes>
    );
};

export default OpenBanking;