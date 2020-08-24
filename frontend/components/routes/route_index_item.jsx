import React from 'react'; 
import {Link} from 'react-router-dom'; 


class RouteIndexItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    

    render() {
        const { route } = this.props
        let distance = (route.distance * 0.000621371).toFixed(2);
        return (
            <li className="route-list-item">
                <i className="fas fa-route fa-5x"></i>
                <div className="route-info">
                    <h3 className="route-name">{route.name}</h3>
                    <span className="distance">{distance}</span><span className="mi">mi</span>
                    <p className="dist">Distance</p>
                <Link to={`/routes/edit/${route.id}`} className="session-button edit-route" >Edit Route</Link>
                </div>
           </li>
        )
    }
}

export default RouteIndexItem; 