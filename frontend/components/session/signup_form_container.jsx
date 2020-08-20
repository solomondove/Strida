import { connect } from 'react-redux';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'Sign Up'
})

const mapDTP = dispatch => ({
    action: user => dispatch(signup(user)), 
    login: user => dispatch(login(user)), 
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapSTP, mapDTP)(SessionForm); 