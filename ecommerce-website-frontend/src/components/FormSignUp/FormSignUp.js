import React from 'react';


import useForm from '../../useForm';
import validate from '../../valideInfo';

import "../../Form.css"
import { Switch, Link, useHistory } from 'react-router-dom';

import FormSuccess from '../../FormSuccess';

const FormSignUp = ({submitForm}, {signin}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(signin, submitForm, validate, 2);
    const history = useHistory();
  return (
    (<div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>

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
            <button className="form-input-btn" type = "submit">Sign up</button>
            <span className="form-input-login">
            Don't have an account yet? Register <Link to="/register">here</Link>
            </span>
        </form>
    </div>)
  );
};

export default FormSignUp