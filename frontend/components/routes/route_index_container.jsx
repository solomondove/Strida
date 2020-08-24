import {connect} from 'react-redux'; 
import RouteIndex from './route_index'; 
import { fetchRoutes, fetchRoute, removeRoute } from '../../actions/route_actions'; 


const mapSTP = state => {
    return ({
        user: state.entities.users[state.session.id],
        routes: Object.values(state.entities.routes)
    })
}

const mapDTP = dispatch => ({
    fetchRoutes: userId => dispatch(fetchRoutes(userId)), 
    fetchRoute: routeId => dispatch(fetchRoute(routeId)), 
    removeRoute: routeId => dispatch(removeRoute(routeId))
})

export default connect(mapSTP, mapDTP)(RouteIndex); 