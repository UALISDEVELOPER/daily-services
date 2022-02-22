//icons
import taxIcon from "./styles/img/tax-inquiry.png";
import taxRegisterIcon from "./styles/img/tax-register.png";
import addressIcon from "./styles/img/direction.png";
import mobileIcon from "./styles/img/mobile.png";
import billsIcon from "./styles/img/bill.png";
import insuranceIcon from "./styles/img/insurance.png";


export const GovList = [
    {
        title : "Inquiry into the tax code",
        decription : "This service can be used to inquire the tax code, which shows the registered tax code number for the person",
        icon : taxIcon,
        key : 1
    },
    {
        title : "Registration of tax code",
        decription : "This service can be used for registration in the tax affairs system, which allows users who do not have a tax code to register and receive a tax code.",
        icon : taxRegisterIcon,
        key : 2
    },
    {
        title : "Conversion Postal code to the address",
        decription : "This service displays the location using the Postal code",
        icon : addressIcon,
        key : 3
    },
    {
        title : "Tls Order Etc",
        decription : "This service is used to purchase mobile recharge",
        icon : mobileIcon,
        key : 4
    },
    {
        title : "Pay bills",
        decription : "This service is used to pay bills",
        icon : billsIcon,
        key : 5
    },
    {
        title : "insured history inquiry",
        decription : "This service is used to inquire about social security insurance records",
        icon : insuranceIcon,
        key : 6
    },
]