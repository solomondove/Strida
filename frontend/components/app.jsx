import React from 'react'; 
import NavBarRightContainer from './nav_bar/nav_bar_right_container'; 
import LoginFormContainer from './session/login_form_container'; 
import SignupFormContainer from './session/signup_form_container'; 
import SplashContainer from './session/splash_container';
import {Route, Link, Switch} from 'react-router-dom'; 
import {AuthRoute, ProtectedRoute} from '../util/route_util'; 
import CreateRouteContainer from './routes/create_route_container'; 
import NavBarLeftContainer from './nav_bar/nav_bar_left_container'; 
import RouteIndexContainer from './routes/route_index_container'; 
import UpdateRouteContainer from './routes/update_route_container'; 

const App = () => (
    <div>
        <header>
            <Link to='/' className="header-logo" />
            <div className="nav-body">
                <NavBarLeftContainer /> 
                <NavBarRightContainer /> 
            </div>
        </header>
        <Switch> 
            <Route exact path='/' component={SplashContainer} /> 
            <AuthRoute path='/login' component={LoginFormContainer} /> 
            <AuthRoute path='/signup' component={SignupFormContainer} /> 
            <ProtectedRoute path='/routes/create' component={CreateRouteContainer} /> 
            <ProtectedRoute path='/routes/edit/:id' component={UpdateRouteContainer} /> 
            <ProtectedRoute exact path='/routes' component={RouteIndexContainer} /> 
        </Switch> 
    </div>
);

export default App; 