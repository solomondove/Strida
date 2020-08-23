import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 

//testing imports only 
import {login, logout, signup} from './actions/session_actions'; 
import * as SessionApiUtil from './util/session_api_util'; 
import * as RouteApiUtil from './util/route_api_util'; 
import * as routeActions from './actions/route_actions'; 
import * as routeSelectors from './util/route_selectors'; 
//testing imports only 

document.addEventListener("DOMContentLoaded", () => {
    let store; 
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }, 
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState); 
        delete window.currentUser; 
    } else {
        store = configureStore(); 
    }
    
    //testing purposes only 
    window.SessionApiUtil = SessionApiUtil; 
    window.RouteApiUtil = RouteApiUtil
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
    window.routeActions = routeActions; 
    window.routeSelectors = routeSelectors; 
    //testing purposes only 
    
    const root = document.getElementById("root"); 
    ReactDOM.render(<Root store={store} />, root);
});