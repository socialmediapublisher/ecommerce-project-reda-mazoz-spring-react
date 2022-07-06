import { useState, useEffect} from "react";
import { FaHandMiddleFinger } from "react-icons/fa";

import UserService from "./components/UserService/UserService";
import "./Form.css"

const useForm = (signin,callback, validate, maxErrors) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [errors, setErrors] = useState({});
    const [submited, setSubmited] = useState(false);
    const [users, setUsers] = useState([]);

    const handleChange = e => {
        const { name, value }  = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        setSubmited(true);
    };


    useEffect(() => {
        if(Object.keys(errors).length === maxErrors && submited)
        {
            var sm = false;
            if(maxErrors === 0) { UserService.registerUser(values);}
            else if(maxErrors === 2){
                UserService.getUsers().then((res) => { 
                    const usersData = res.data;
                    usersData.map((item) => {
                        if(item.mail === values.email && item.password === values.password) { 
                            callback();
                        }
                    });
                })
            }
            callback();
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors};
};


export default useForm;