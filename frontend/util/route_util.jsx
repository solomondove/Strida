import React from 'react'; 
import {connect} from 'react-redux'; 
import {Redirect, Route, withRouter} from 'react-router-dom'; 

const Auth = ({ 
    component: Component, path, loggedIn, exact 
}) => (
    <Route 
        path={path} 
        exact={exact} 
        render={props => !loggedIn ? <Component {...props} /> : <Redirect to='/dashboard' /> } 
    /> 
)

const mapSTP = state => {
    return { loggedIn: Boolean(state.session.id) }; 
};

export const AuthRoute = withRouter(connect(mapSTP, null)(Auth))



const Protected = ({
    component: Component, path, loggedIn, exact
}) => (
        <Route path={path} exact={exact}
            render={props => !loggedIn ? <Redirect to='/login' /> : <Component {...props} />}
        /> 
)

export const ProtectedRoute = withRouter(connect(mapSTP, null)(Protected))


const Dash = ({
    component: Component, path, loggedIn, exact
}) => (
        <Route
            path={path}
            exact={exact}
            render={props => !loggedIn ? <Redirect to='/' /> : <Component {...props} />}
        />
    )


export const DashRoute = withRouter(connect(mapSTP, null)(Dash))