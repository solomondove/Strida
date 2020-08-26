import React from 'react'; 
import RouteIndexItem from './route_index_item'; 
import {Redirect, Link} from 'react-router-dom'; 



class RouteIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRoutes(this.props.user.id); 
    }

    render() {  

        return this.props.routes.length > 0 ? (
            <div className='index' >
                <div className="index-heading">
                    <h1 className="index-heading-header">My Routes</h1>
                    <Link to={`/routes/create`} className="session-button create-route" >Create New Route</Link>
                </div>
                <ul id="tile-container" className="map-tile-container">
                    {this.props.routes.map(route => <RouteIndexItem route={route} key={route.id} removeRoute={this.props.removeRoute} /> )}
                </ul>
            </div>
        ) : (
            <div className='index'>Please Create a Route!</div>
        )
    }

}

export default RouteIndex; 