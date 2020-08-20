import { connect } from 'react-redux';
import {login, clearSessionErrors } from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mapSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'Log In'
})

const mapDTP = dispatch => ({
    action: user => dispatch(login(user)), 
    login: user => dispatch(login(user)), 
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapSTP, mapDTP)(SessionForm); 