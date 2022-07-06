import React from 'react';
import Form from './Form';
import "./App.css"

import { Products, Navbar} from "./components";
import FormSignUp from './components/FormSignUp/FormSignUp';
import UploadProduct from './pages/UploadProduct';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import  Signup from "./components/views/SignUp"

const App = (props) => {
  /* let { path, url } = useRouteMatch(); */
  return (
    <>
    <div>
    <Navbar />
    </div>
    <div>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path ="/" ><Products /></Route>
          <Route exact path ="/register" ><Form type="register" /></Route>
          <Route exact path ="/signup" ><Form type="signup" /></Route>
          <Route exact path ="/upload" ><UploadProduct /></Route>
        </Switch>
    
    {/* <Navbar /> style= {{transform:"translateX(-50%)"}} */}
    </div>
    </>
  )
}

export default App