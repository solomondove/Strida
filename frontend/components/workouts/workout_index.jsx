import React from 'react'; 
import WorkoutIndexItem from './workout_index_item'; 
import { Link } from 'react-router-dom'; 

class WorkoutIndex extends React.Component {

    componentDidMount() {
        this.props.fetchWorkouts(this.props.userId); 
    }

    render () {
        let workoutsReversed = this.props.workouts.reverse(); 
        
        return this.props.workouts.length > 0 ? (
            <div className='index' >
                <div className="index-heading">
                    <h1 className="index-heading-header">My Workouts</h1>
                    <Link to={`/workouts/create`} className="session-button create-workout" >Create New Workout</Link>
                </div>
                <ul id="tile-container" className="workout-tile-container">
                    {workoutsReversed.map(workout => <WorkoutIndexItem workout={workout} user={this.props.user} key={workout.id} 
                        deleteWorkout={this.props.deleteWorkout} route={this.props.routes[workout.route_id]} />)}
                </ul>
            </div>
        ) : (
            <div className='index'>Please Create A Workout!</div>
        )
    }
}

export default WorkoutIndex; 