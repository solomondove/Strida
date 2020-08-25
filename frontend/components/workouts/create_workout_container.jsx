import {connect} from 'react-redux'; 
import {createWorkout} from '../../actions/workout_actions'; 
import WorkoutForm from './workout_form';
import {fetchRoutes} from '../../actions/route_actions'; 

const mapSTP = state => ({
    userId: state.session.id,
    timeElapsed: 0,
    description: '', 
    averagePace: 0, 
    activityType: 'Running', 
    route_id: null, 
    formType: 'Create Workout', 
    routes: Object.values(state.entities.routes)
        
})

const mapDTP = dispatch => ({
    createWorkout: workout => dispatch(createWorkout(workout)),
    fetchRoutes: userId => dispatch(fetchRoutes(userId))
})

export default connect(mapSTP, mapDTP)(WorkoutForm); 