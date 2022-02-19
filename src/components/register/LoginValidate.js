export const loginValidate = (data) =>{
    const errors = {};

    if(!data.email.trim()){
        errors.email= "Email field is empty";
    }else if (data.email.indexOf("@")=== -1 || data.email.indexOf(".")=== -1 || data.email.indexOf("com")=== -1 ){
        errors.email= "Email is not valid";
    }else{
        delete errors.email;
    }
    //email validation

    if(!data.password.trim()){ 
        errors.password ="Pass field is empty"
    }else if (data.password.length < 8){
        errors.password = "8 characters or more"
    }else{
        delete errors.password;
    }
    //password validation

    return errors;
}
