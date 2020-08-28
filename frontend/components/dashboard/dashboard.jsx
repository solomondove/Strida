import React from 'react'; 
import DashboardWorkoutIndexItem from './dashboard_workout_index_item'; 
import DashboardProfile from './dashboard_profile'; 

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchWorkouts(this.props.userId);
    }

    render () {
        let workoutsReversed = this.props.workouts.reverse(); 
        return (
            <div className="dashboard">
                <div id="profile-container">
                    <DashboardProfile user={this.props.user} 
                        workouts={this.props.workouts} 
                        routesObj={this.props.routesObj}
                        routesArr={this.props.routesArr}/> 
                </div>
                <div className="workout-dash-container">
                    <h1 className="feed-header">Your Activities</h1>
                    <div id="tile-container" className="workout-dash-container">
                        {workoutsReversed.map(workout => <DashboardWorkoutIndexItem workout={workout} 
                            user={this.props.user} key={workout.id}
                            deleteWorkout={this.props.deleteWorkout} 
                            route={this.props.routesObj[workout.route_id]} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard; 