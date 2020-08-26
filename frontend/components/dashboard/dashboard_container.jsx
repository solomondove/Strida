import {connect} from 'react-redux'; 
import Dashboard from './dashboard'; 
import {fetchWorkouts, deleteWorkout} from '../../actions/workout_actions'; 

const mapSTP = state => ({
    workouts: Object.values(state.entities.workouts),
    userId: state.session.id,
    user: state.entities.users[state.session.id],
    routesArr: Object.values(state.entities.routes), 
    routesObj: Object.assign({}, state.entities.routes)
})

const mapDTP = dispatch => ({
    fetchWorkouts: userId => dispatch(fetchWorkouts(userId)),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
})

export default connect(mapSTP, mapDTP)(Dashboard); 