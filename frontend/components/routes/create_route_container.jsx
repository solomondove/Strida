import {connect} from 'react-redux'; 
import {createRoute} from '../../actions/route_actions'; 
import RouteMap from './route_map'; 

const mapSTP = (state, ownProps) => {
    return ({
        name: "", 
        distance: 0, 
        user_id: state.session.id, 
        waypoints: [], 
        formType: "Create Route"
    })
}

const mapDTP = dispatch => ({
    action: route => dispatch(createRoute(route))
})

export default connect(mapSTP, mapDTP)(RouteMap); 