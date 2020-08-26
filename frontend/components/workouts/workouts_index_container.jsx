import {connect} from 'react-redux'; 
import WorkoutIndex from './workout_index';
import {fetchWorkouts, deleteWorkout} from '../../actions/workout_actions'; 
import {fetchRoute} from '../../actions/route_actions'; 

const mapSTP = state => ({
    workouts: Object.values(state.entities.workouts), 
    userId: state.session.id, 
    user: state.entities.users[state.session.id], 
    routes: Object.assign({}, state.entities.routes)
})

const mapDTP = dispatch => ({
    fetchWorkouts: userId => dispatch(fetchWorkouts(userId)), 
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
})

export default connect(mapSTP, mapDTP)(WorkoutIndex); 