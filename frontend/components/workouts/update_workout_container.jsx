import { connect } from 'react-redux';
import { updateWorkout } from '../../actions/workout_actions';
import WorkoutForm from './workout_form';
import { fetchRoutes } from '../../actions/route_actions';

const mapSTP = (state, ownProps) => {
    
    let workoutId = ownProps.match.params.id; 
    let workout = state.entities.workouts[workoutId]; 

    return ({
        id: workoutId, 
        user_id: workout.user_id,
        time_elapsed: workout.time_elapsed,
        description: workout.description,
        activity_type: workout.activity_type,
        route_id: workout.route_id,
        formType: 'Update Workout',
        routes: Object.values(state.entities.routes)
    })
}

const mapDTP = dispatch => ({
    action: workout => dispatch(updateWorkout(workout)),
    fetchRoutes: userId => dispatch(fetchRoutes(userId))
})

export default connect(mapSTP, mapDTP)(WorkoutForm); 