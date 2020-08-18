import { connect } from 'react-redux';
import {login} from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mapSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'Log In'
})

const mapDTP = dispatch => ({
    action: user => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(SessionForm); 