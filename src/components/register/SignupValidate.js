export const signupValidate = (data) =>{
    const errors = {};


    if(!data.name.trim()){ 
        errors.name ="Name field is empty"
    }else if (data.name.length < 2){
        errors.name = "2 characters or more"
    }else{
        delete errors.name;
    }
    //name validation


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
