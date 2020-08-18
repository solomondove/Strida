import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'Sign Up'
})

const mapDTP = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(mapSTP, mapDTP)(SessionForm); 