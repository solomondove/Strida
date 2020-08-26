import React from 'react'; 
import WorkoutIndexItem from './workout_index_item'; 
import { Link } from 'react-router-dom'; 

class WorkoutIndex extends React.Component {

    componentDidMount() {
        this.props.fetchWorkouts(this.props.userId); 
    }

    render () {
        return this.props.workouts.length > 0 ? (
            <div className='workout-index' >
                <div className="index-heading">
                    <h1 className="index-heading-header">My Workouts</h1>
                    <Link to={`/workouts/create`} className="session-button create-workout" >Create New Workout</Link>
                </div>
                <ul id="tile-container">
                    {this.props.workouts.map(workout => <WorkoutIndexItem workout={workout} user={this.props.user} key={workout.id} 
                        deleteWorkout={this.props.deleteWorkout} route={this.props.routes[workout.route_id]} />)}
                </ul>
            </div>
        ) : (
            <div className='workout-index' height='100px' width='100px'></div>
        )
    }
}

export default WorkoutIndex; 