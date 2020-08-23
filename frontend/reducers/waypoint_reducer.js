import { RECEIVE_ROUTE, RECEIVE_ROUTES } from '../actions/route_actions';

const waypointsReducer = (state={}, action) => {
    Object.freeze(state); 
    
    switch (action.type) {
        case RECEIVE_ROUTE:
            return Object.assign({}, action.payload.waypoints)
        default:
            return state;
    }
}

export default waypointsReducer; 