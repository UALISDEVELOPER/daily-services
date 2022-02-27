import React from 'react';
import { Route, Routes } from "react-router-dom";


//components
import IbanInqury from './OPServices/IbanInqury';
import OpenBankingListPage from './OpenBankingListPage';


const OpenBanking = () => {
    return (
        <Routes>
            <Route path="/" element={<OpenBankingListPage/>}/>
            <Route path="/iban-inquiry" element={<IbanInqury/>}/>
        </Routes>
    );
};

export default OpenBanking;