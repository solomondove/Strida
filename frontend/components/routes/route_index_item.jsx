import React from 'react'; 
import {Link} from 'react-router-dom'; 


class RouteIndexItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    

    render() {
        const { route } = this.props
        return (
           <li>
               <h3 className="route-name">{route.name}</h3>
               <p>Total distance: {route.distance}</p>
               <Link to={`/routes/edit/${route.id}`} >Edit Route</Link>
           </li>
        )
    }
}

export default RouteIndexItem; 