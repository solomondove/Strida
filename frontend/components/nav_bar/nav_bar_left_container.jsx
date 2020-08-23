import { connect } from 'react-redux';
import NavBarLeft from './nav_bar_left';

const mapSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDTP = dispatch => ({
})

export default connect(mapSTP, mapDTP)(NavBarLeft); 