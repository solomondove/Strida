import React from 'react'; 
import NavBarRightContainer from './nav_bar/nav_bar_right_container'; 
import LoginFormContainer from './session/login_form_container'; 
import SignupFormContainer from './session/signup_form_container'; 
import SplashContainer from './session/splash_container';
import {Route, Link} from 'react-router-dom'; 
import {AuthRoute} from '../util/route_util'; 
import Routes from './routes/routes'; 

const App = () => (
    <div>
        <header>
            <Link to='/' className="header-logo" />
            <NavBarRightContainer /> 
        </header>
        <Route exact path='/' component={SplashContainer} /> 
        <AuthRoute path='/login' component={LoginFormContainer} /> 
        <AuthRoute path='/signup' component={SignupFormContainer} /> 
        <Route path='/routes' component={Routes} /> 
    </div>
);

export default App; 