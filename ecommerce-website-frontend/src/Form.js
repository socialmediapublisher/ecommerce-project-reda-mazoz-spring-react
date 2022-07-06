import React, { useState } from 'react';
import FormSignUp from './components/FormSignUp/FormSignUp';
import FormRegister from './components/FormRegister/FormRegister';
import FormSuccess from './FormSuccess';
import "./Form.css"
import { useHistory } from 'react-router-dom';

import { Navbar } from './components';


const Form = (props) => {
    const [submited, setSubmited] = useState(false);
    const [connectedUserWelcome,setConnectedUserWelcome] = useState("");
    const history = useHistory();

    function submitForm() {
        props.type === "register" ? setSubmited(true) : history.push("/");
    }

    function useless()
    {
      const a = setTimeout (() => {
        setSubmited(false);
        history.push("/signup")
      }, 2000)

        return (<FormSuccess />);
    }
    function signin() {
      setConnectedUserWelcome("Hallo");
    }
    
  return (
    <>
    <Navbar newMessage={connectedUserWelcome} />
    <div className="form-container">
    {props.type === "register" ? <span className="close-btn" onClick={() => {history.push("/signup")}}>x</span> : <></>}
        <div className="form-content-left">
            <img src="img/img-2.svg" alt="spaceship" className="form-img" />
            </div>
        {
          (props.type === "register") ? 
            !submited ?
            (<FormRegister submitForm={submitForm} />) : useless() : 
            (props.type === "signup") ? 
            !submited ? (<FormSignUp submitForm={submitForm} signin={signin}/>) : (<FormSuccess />) : <></>
         }
        {/* <FormSucess /> */}
        
    </div>
    </>
  )
}

export default Form