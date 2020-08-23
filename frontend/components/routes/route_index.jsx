import React from 'react'; 
import RouteIndexItem from './route_index_item'; 
import {Redirect} from 'react-router-dom'; 


class RouteIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRoutes(this.props.user.id); 
    }

    render() {  

        return this.props.routes.length > 0 ? (
            <div className='route-index' height='100px' width='100px' >
                {this.props.routes.map(route => <RouteIndexItem route={route} key={route.id}/> )}
            </div>
        ) : (
            <div className='route-index' height='100px' width='100px'></div>
        )
    }

}

export default RouteIndex; 