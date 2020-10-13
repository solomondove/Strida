import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 

//testing imports only 
import * as workoutApiUtil from './util/workout_api_util'; 
import * as workoutActions from './actions/workout_actions'; 
//testing imports only 

document.addEventListener("DOMContentLoaded", () => {
    debugger; 
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
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
    window.workoutActions = workoutActions; 
    window.workoutApiUtil = workoutApiUtil; 
    //testing purposes only 
    
    const root = document.getElementById("root"); 
    ReactDOM.render(<Root store={store} />, root);
    
});