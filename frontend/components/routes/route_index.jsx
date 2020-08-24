import React from 'react'; 
import RouteIndexItem from './route_index_item'; 
import {Redirect, Link} from 'react-router-dom'; 



class RouteIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRoutes(this.props.user.id); 
    }

    render() {  

        return this.props.routes.length > 0 ? (
            <div className='route-index' >
                <div className="index-heading">
                    <h1 className="index-heading-header">My Routes</h1>
                    <Link to={`/routes/create`} className="session-button create-route" >Create New Route</Link>
                </div>
                <ul className="tile-container">
                    {this.props.routes.map(route => <RouteIndexItem route={route} key={route.id} removeRoute={this.props.removeRoute} /> )}
                </ul>
            </div>
        ) : (
            <div className='route-index' height='100px' width='100px'></div>
        )
    }

}

export default RouteIndex; 