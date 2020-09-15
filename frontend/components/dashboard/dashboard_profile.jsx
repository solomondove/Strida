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
            if (this.props.routesObj[route_id]) {
                metersTraveled += this.props.routesObj[route_id].distance
            }
        })
        let milesTraveled = (metersTraveled * 0.000621371).toFixed(2);
        return <span className="stat-total">{milesTraveled}</span>
    }

    calculateTimeSpentExercising() {
        let minutesTotal = 0; 
        this.props.workouts.forEach(workout => {
            minutesTotal += workout.time_elapsed; 
        })
        let minutes = minutesTotal % 60; 
        let hours = Math.floor(minutesTotal / 60)
        return <span className="stat-total">{hours}<span className="denomination">h </span>{minutes}</span>
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
                    <div className="stat-block">
                        <div className="stat-block-icon">
                            <i className="fas fa-shoe-prints fa-3x" id="stat-block-icon"></i>
                        </div>
                        <div className="stat-block-info">
                            <label className="stat-block-label">Total Distance Traveled</label>
                            <br/> 
                            {this.calculateMilesTraveled()}<span className="denomination">mi</span>
                        </div>
                    </div>
                    <div className="stat-block">
                        <div className="stat-block-icon icon3">
                            <i className="fas fa-stopwatch fa-3x" id="stat-block-icon"></i>
                        </div>
                        <div className="stat-block-info">
                            <label className="stat-block-label">Total Time Spent Exercising</label>
                            <br />
                            {this.calculateTimeSpentExercising()}<span className="denomination">m</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardProfile; 