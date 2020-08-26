import React from 'react'; 
import {Link} from 'react-router-dom'; 


class WorkoutIndexItem extends React.Component {

    handleDelete() {
        this.props.deleteWorkout(this.props.workout.id); 
    }

    render () {
        const { workout, user, route } = this.props;
        let routeStats
        if (route === undefined) {
            routeStats = (
                <div>
                    <span>{workout.time_elapsed}</span> <span className='min'>min</span>
                </div>
            )
        } else { 
            let routeDistance = route.distance * 0.00062371;
            let workoutPace = (workout.time_elapsed / routeDistance).toFixed(2) ; 
            routeStats = (
                <div>
                    <span>{routeDistance.toFixed(2)}</span> <span className='dist'>mi</span>
                    <span>{workoutPace}</span> <span className="pace">min/mi</span>
                </div>
            )
        }


        return (
            <div className="workout-index-tile">
                <div className="workout-list-item">
                    <i className="fas fa-dumbbell fa-5x" id="index-icon"></i>
                    <div className="workout-info">
                        <h3 className="workout-title">{user.email} went {workout.activity_type.toLowerCase()}</h3>
                        <p className='workout-description'>{workout.description}</p>
                        {routeStats}
                    </div>
                </div>
                <Link to={`/workouts/edit/${workout.id}`} ><button className="session-button" id="index-button">Edit Workout</button></Link>
                <br />
                <button onClick={this.handleDelete} className="session-button" id="index-button">Delete Workout</button>
            </div>
        )
    }
}

export default WorkoutIndexItem; 