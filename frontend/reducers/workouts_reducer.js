import {RECEIVE_WORKOUTS, RECEIVE_WORKOUT, DELETE_WORKOUT} from '../actions/workout_actions'; 

const workoutsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_WORKOUT:
            newState[action.workout.id] = action.workout;
            return newState; 
        case RECEIVE_WORKOUTS: 
            return Object.assign({}, action.payload.workouts); 
        case DELETE_WORKOUT: 
            delete newState[action.workoutId]; 
            return newState;
        default:
            return state;
    }
}

export default workoutsReducer; 