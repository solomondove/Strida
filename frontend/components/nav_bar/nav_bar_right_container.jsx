import {connect} from 'react-redux'; 
import NavBarRight from './nav_bar_right'; 
import {logout} from '../../actions/session_actions';

const mapSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapSTP, mapDTP)(NavBarRight); 