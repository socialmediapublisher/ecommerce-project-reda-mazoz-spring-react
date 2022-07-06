import React from 'react';


import useForm from '../../useForm';
import validate from '../../valideInfo';

import { Link, Switch } from 'react-router-dom';

import "../../Form.css"
import FormSuccess from '../../FormSuccess';

const signin = () =>{ console.log("makhdmach")}

const FormRegister = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(signin,submitForm, validate, 0);

  return (
    (<div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>

            <div className="form-inputs">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                id = "username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                /> 
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="passwordConfirm" className="form-label">Confirm Password</label>
                <input
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                className="form-input"
                placeholder="Confirm Password"
                value={values.passwordConfirm}
                onChange={handleChange}
                /> 
                {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
            </div>
            <button className="form-input-btn" type = "submit">Register</button>
        </form>
    </div>)
  );
};

export default FormRegister