import {connect} from 'react-redux'; 
import RouteMap from './route_map'; 
import * as RouteSelectors from '../../util/route_selectors'; 
import { fetchRoute, updateRoute, removeRoute } from '../../actions/route_actions';

const mapSTP = (state, ownProps) => {
    

    let routeId = ownProps.match.params.id; 
    let route = state.entities.routes[routeId]; 

    return ({
        id: routeId, 
        name: route.name, 
        distance: route.distance, 
        user_id: route.user_id, 
        waypoints: Object.values(state.entities.waypoints), 
        formType: 'Update Route'
    })
}

const mapDTP = dispatch => ({
    action: route => dispatch(updateRoute(route)),
    fetchRoute: routeId => dispatch(fetchRoute(routeId)), 
    removeRoute: routeId => dispatch(removeRoute(routeId))
})

export default connect(mapSTP, mapDTP)(RouteMap); 