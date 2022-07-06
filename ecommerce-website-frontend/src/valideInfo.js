export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required";
    }

    if(!values.email){
        errors.email = "Email required";
    }
    //else if(!\/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A_Z]{2,}$/i.test(values.email)){
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password){
        errors.password = "Password is required";
    }
    else if (values.password.length < 6){
        errors.password = "Password need to be 6 characters or longer";
    }

    if(!values.passwordConfirm)
    {
        errors.passwordConfirm = "Password is required";
    }
    else if(values.password !== values.passwordConfirm)
    {
        errors.passwordConfirm = "Password do not match";
    }

    return errors;
}