import {RECEIVE_ROUTE, RECEIVE_ROUTES, DELETE_ROUTE} from '../actions/route_actions'; 
import {RECEIVE_WORKOUTS} from '../actions/workout_actions';

const routesReducer = (state={}, action) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state); 
    
    switch (action.type) {
        case RECEIVE_ROUTES:
            return Object.assign({}, action.routes); 
        case RECEIVE_ROUTE: 
            newState[action.payload.route.id] = action.payload.route; 
            return newState; 
        case DELETE_ROUTE: 
            delete newState[action.routeId]; 
            return newState; 
        case RECEIVE_WORKOUTS: 
            return Object.assign({}, action.payload.routes)
        default:
            return state;
    }
}

export default routesReducer; 