import {connect} from 'react-redux'; 
import {createWorkout} from '../../actions/workout_actions'; 
import WorkoutForm from './workout_form';
import {fetchRoutes} from '../../actions/route_actions'; 

const mapSTP = state => ({
    user_id: state.session.id,
    time_elapsed: 0,
    description: '', 
    activity_type: 'Running', 
    route_id: "default", 
    formType: 'Create Workout', 
    routes: Object.values(state.entities.routes)
        
})

const mapDTP = dispatch => ({
    action: workout => dispatch(createWorkout(workout)),
    fetchRoutes: userId => dispatch(fetchRoutes(userId))
})

export default connect(mapSTP, mapDTP)(WorkoutForm); 