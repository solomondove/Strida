import React from 'react'; 
import {Link} from 'react-router-dom'; 

class SessionForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            email: '', 
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.action(this.state); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        let link = this.props.formType === "Sign Up" ? (
            <Link to='/login' >Already Signed Up? </Link>
        ) : (
            <Link to='/signup'>Create a New Account</Link>
        )
        return(
            <div>
                <h1>{this.props.formType}</h1>
                <div>{this.props.errors.session.reponseText}</div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email: 
                        <input type="text" value={this.state.email} onChange={this.update("email")}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update("password")} />
                    </label>
                    <button type='submit'>{this.props.formType}</button>
                </form>
                {link}
            </div>
        )
    }
}

export default SessionForm; 