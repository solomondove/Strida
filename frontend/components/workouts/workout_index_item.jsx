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
                <div className="tile-section-content">
                    <label className="tile-section-header">Time: 
                        <br/> 
                        <span className='stat'>{workout.time_elapsed}</span> <span className='denomination'>m</span>
                    </label>
                </div>
            )
        } else { 
            let routeDistance = route.distance * 0.00062371;
            let workoutPacePerMinute = (workout.time_elapsed / routeDistance).toFixed(2) ; 
            let seconds = (workoutPacePerMinute%1*60).toFixed(0);  
            let minutes = Math.floor(workoutPacePerMinute)
            routeStats = (
                <div className="tile-section-content">
                    <div className="tile-section-header">Time:
                        <br/> 
                        <span className='stat'>{workout.time_elapsed}</span><span className='denomination'>m</span>
                    </div>
                    <div className="tile-section-header">Distance: 
                        <br/> 
                        <span className='stat'>{routeDistance.toFixed(2)}</span><span className='denomination'>mi</span>
                    </div>
                    <div className="tile-section-header">Pace: 
                        <br/> 
                        <span className='stat'>{minutes}:{seconds}</span><span className="denomination">/mi</span>
                    </div>
                </div>
            )
        }


        return (
            <div className="workout-index-tile">
                <div className="index-tile-left">
                    <i className="fas fa-dumbbell fa-5x" id="index-icon"></i>
                    <Link to={`/workouts/edit/${workout.id}`} ><button className="session-button" id="workout-index-button">Edit Workout</button></Link>
                    <br />
                    <button onClick={this.handleDelete} className="session-button" id="workout-index-button">Delete Workout</button>
                </div>
                <div className="index-tile-right">
                    <h3 className="workout-title">{user.email} went {workout.activity_type.toLowerCase()}
                    </h3>
                    <label className="tile-section-header">Description: 
                        <p className='description-content'>{workout.description}</p>
                    </label>
                    {routeStats}
                </div>
            </div>
        )
    }
}

export default WorkoutIndexItem; 