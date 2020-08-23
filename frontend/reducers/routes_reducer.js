import {RECEIVE_ROUTE, RECEIVE_ROUTES, DELETE_ROUTE} from '../actions/route_actions'; 


const routesReducer = (state={}, action) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state); 

    switch (action.type) {
        case RECEIVE_ROUTES:
            return Object.assign({}, state, action.routes); 
        case RECEIVE_ROUTE: 
            newState[action.payload.route.id] = action.payload.route; 
            return newState; 
        case DELETE_ROUTE: 
            delete newState[action.routeId]; 
            return newState; 
        default:
            return state;
    }
}

export default routesReducer; 