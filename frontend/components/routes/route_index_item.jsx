import React from 'react'; 
import {Link} from 'react-router-dom'; 


class RouteIndexItem extends React.Component {
    constructor(props) {
        super(props); 

        this.handleDelete = this.handleDelete.bind(this); 
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeRoute(this.props.route.id)
    }

    render() {
        const { route } = this.props
        let distance = (route.distance * 0.000621371).toFixed(2);
        return (
            <div className="route-index-tile">
                <div className="route-list-item">
                    <i className="fas fa-route fa-5x" id="index-icon"></i>
                    <div className="route-info">
                        <h3 className="route-name">{route.name}</h3>
                        <span className="distance">{distance}</span><span className="mi">mi</span>
                        <p className="dist">Distance</p>
                    </div>
                </div>
                <Link to={`/routes/edit/${route.id}`} ><button className="session-button" id="index-button">Edit Route</button></Link>
                <br/> 
                <button onClick={this.handleDelete} className="session-button" id="index-button">Delete Route</button>
           </div>
        )
    }
}

export default RouteIndexItem; 