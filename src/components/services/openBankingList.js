//icons
import loanIcon from "./styles/img/openBankingIMG/loan.png";
import backChecksIcon from "./styles/img/openBankingIMG/bankChecks.png";
import cardToShebaIcon from "./styles/img/openBankingIMG/cardToSheba.png";
import cardToAccNumIcon from "./styles/img/openBankingIMG/cardToAccNum.png";
import mobileVerificationIcon from "./styles/img/openBankingIMG/mobileVerification.png";
import shebaValidationIcon from "./styles/img/openBankingIMG/shebaValidation.png";
import bankInfoIcon from "./styles/img/openBankingIMG/bankInfo.png";
import drivingIcon from "./styles/img/openBankingIMG/driving.png";
import billIcon from "./styles/img/openBankingIMG/bill.png";
import bank from "./styles/img/openBankingIMG/bank.png";



export const OpenBankingList = [
    {
        title : "Inquiry of received loans",
        decription : "This service can be used to display all the loans received by a person",
        icon : loanIcon,
        key : 1
    },
    {
        title : "Inquiry of back checks",
        decription : "This service can be used to display people's back checks using the national code",
        icon : backChecksIcon,
        key : 2
    },
    {
        title : "Inquiry of Sheba number using bank card number",
        decription : "This service can be used to inquire about Sheba number using card number",
        icon : cardToShebaIcon,
        key : 3
    },
    {
        title : "Inquire the account number using the card number",
        decription : "This service can be used to inquire about the account number using the card number",
        icon : cardToAccNumIcon,
        key : 4
    },
    {
        title : "Mobile number verification using national code",
        decription : "In this service the mobile number get validated by using the national code",
        icon : mobileVerificationIcon,
        key : 5
    },
    {
        title : "Validation of Sheba number compliance with national code",
        decription : "This service can be used to check the compliance of Sheba number with the national code",
        icon : shebaValidationIcon,
        key : 6
    },
    {
        title : "View bank account information using the card number",
        decription : "This service can be used to view account information",
        icon : bankInfoIcon,
        key : 7
    },
    {
        title : "Inquiry about driving offenses",
        decription : "This service is used to inquire about driving offenses",
        icon : drivingIcon,
        key : 8
    },
    {
        title : "Inquiry of bills",
        decription : "This service can be used to inquire about bills",
        icon : billIcon,
        key : 9
    },
    {
        title : "View bank information using bill ID",
        decription : "This service shows the list of all banks along with the code",
        icon : bank,
        key : 10
    },
]