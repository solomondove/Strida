import React from 'react'; 
import {Link} from 'react-router-dom'; 
 
class DashboardProfile extends React.Component {

    calculateMilesTraveled () { 
        let routesTraveled = []
        this.props.workouts.forEach( workout => { 
            if (workout.route_id !== null ) routesTraveled.push(workout.route_id); 
        })
        let metersTraveled = 0; 
        routesTraveled.forEach(route_id => {
            metersTraveled += this.props.routesObj[route_id].distance
        })
        let milesTraveled = (metersTraveled * 0.000621371).toFixed(2);
        return <span>{milesTraveled}</span>
    }

    calculateTimeSpentExercising() {
        let minutesTotal = 0; 
        this.props.workouts.forEach(workout => {
            minutesTotal += workout.time_elapsed; 
        })
        let minutes = minutesTotal % 60; 
        let hours = Math.floor(minutesTotal / 60)
        return <span>{hours}:{minutes}</span>
    }

    render() {
        return(
            <div className="dashboard-profile">
                <div className="profile-summary">
                    <div className="profile-icon">
                        <i className="far fa-user-circle fa-4x" id="profile-icon"></i>
                    </div>
                    <h1 className="profile-header">{this.props.user.email}</h1>
                    <div className="profile-tile-body">
                        <label className="profile-stat">
                            <Link to="/workouts" className="profile-subtext">Workouts
                                <br/>
                                <span className="profile-text">{this.props.workouts.length}</span>
                            </Link>
                        </label>
                        <label className="profile-stat">
                            <Link to="/routes" className="profile-subtext">Routes
                                <br />
                                <span className="profile-text">{this.props.routesArr.length}</span>
                            </Link>
                        </label>
                    </div>
                </div>
                <br/> 
                <div className="dashboard-totals">
                    <label className="profile-stat"><i class="fas fa-shoe-prints"></i>Distance Traveled
                        <br/> 
                        {this.calculateMilesTraveled()}<span className="denomination">mi</span>
                    </label>
                    <br />
                    <label className="profile-stat"><i class="fas fa-stopwatch"></i>Time Spent Exercising
                        <br />
                        {this.calculateTimeSpentExercising()}<span className="denomination">mins</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default DashboardProfile; 