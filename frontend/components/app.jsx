import React from 'react'; 
import NavBarRightContainer from './nav_bar/nav_bar_right_container'; 
import LoginFormContainer from './session/login_form_container'; 
import SignupFormContainer from './session/signup_form_container'; 
import {Route} from 'react-router-dom'; 
import {AuthRoute} from '../util/route_util'; 

const App = () => (
    <div>
        <header>
            <h1 className="header-logo">STRIDA</h1>
            <NavBarRightContainer /> 
        </header>

        <AuthRoute path='/login' component={LoginFormContainer} /> 
        <AuthRoute path='/signup' component={SignupFormContainer} /> 
    </div>
);

export default App; 