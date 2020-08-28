import React from 'react'; 
import NavBarRightContainer from './nav_bar/nav_bar_right_container'; 
import LoginFormContainer from './session/login_form_container'; 
import SignupFormContainer from './session/signup_form_container'; 
import SplashContainer from './session/splash_container';
import {Route, Link, Switch} from 'react-router-dom'; 
import {AuthRoute, ProtectedRoute, DashRoute} from '../util/route_util'; 
import CreateRouteContainer from './routes/create_route_container'; 
import NavBarLeftContainer from './nav_bar/nav_bar_left_container'; 
import RouteIndexContainer from './routes/route_index_container'; 
import UpdateRouteContainer from './routes/update_route_container'; 
import CreateWorkoutContainer from './workouts/create_workout_container'; 
import WorkoutIndexContainer from './workouts/workouts_index_container'; 
import UpdateWorkoutContainer from './workouts/update_workout_container'; 
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div>
        <header>
            <Link to='/dashboard' className="header-logo" />
            <div className="nav-body">
                <NavBarLeftContainer /> 
                <NavBarRightContainer /> 
            </div>
        </header>
        <Switch> 
            <AuthRoute exact path='/' component={SplashContainer} /> 
            <AuthRoute path='/login' component={LoginFormContainer} /> 
            <AuthRoute path='/signup' component={SignupFormContainer} /> 
            <DashRoute path='/dashboard' component={DashboardContainer} /> 
            <ProtectedRoute exact path='/routes' component={RouteIndexContainer} /> 
            <ProtectedRoute path='/routes/create' component={CreateRouteContainer} /> 
            <ProtectedRoute path='/routes/edit/:id' component={UpdateRouteContainer} /> 
            <ProtectedRoute exact path='/workouts' component={WorkoutIndexContainer} /> 
            <ProtectedRoute path='/workouts/create' component={CreateWorkoutContainer} /> 
            <ProtectedRoute path='/workouts/edit/:id' component={UpdateWorkoutContainer} />
        </Switch> 
        <footer className='footer'>
            <div ></div>
        </footer>
    </div>
);

export default App; 