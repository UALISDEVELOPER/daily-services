//icons
import taxIcon from "./styles/img/GOV-IMG/tax-inquiry.png";
import taxRegisterIcon from "./styles/img/GOV-IMG/tax-register.png";
import addressIcon from "./styles/img/GOV-IMG/direction.png";
import mobileIcon from "./styles/img/GOV-IMG/mobile.png";
import billsIcon from "./styles/img/GOV-IMG/bill.png";
import insuranceIcon from "./styles/img/GOV-IMG/insurance.png";


export const GovList = [
    {
        title : "Tax inquiry",
        decription : "This service can be used to inquire the tax code, which shows the registered tax code number for the person",
        icon : taxIcon,
        link : "/home/Gov/tax-inquiry/",
        status : "Available",
        key : 1
    },
    {
        title : "Registration of tax code",
        decription : "This service can be used for registration in the tax affairs system, which allows users who do not have a tax code to register and receive a tax code.",
        icon : taxRegisterIcon,
        link : "/home/",
        status : "Coming soon",
        key : 2
    },
    {
        title : "Conversion Postal code to the address",
        decription : "This service displays the location using the Postal code",
        icon : addressIcon,
        link : "/home/",
        status : "Coming soon",
        key : 3
    },
    {
        title : "Tls Order Etc",
        decription : "This service can be used to purchase mobile recharge",
        icon : mobileIcon,
        link : "/home/",
        status : "Coming soon",
        key : 4
    },
    {
        title : "Pay bills",
        decription : "This service can be used to pay bills",
        icon : billsIcon,
        link : "/home/",
        status : "Coming soon",
        key : 5
    },
    {
        title : "insured history inquiry",
        decription : "This service can be used to inquire about social security insurance records",
        icon : insuranceIcon,
        link : "/home/",
        status : "Coming soon",
        key : 6
    },
]