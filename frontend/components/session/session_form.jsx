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
            <Link className="session-button" to='/login' >Already Registered? </Link>
        ) : (
            <Link className="session-button" to='/signup'>Create a New Account</Link>
        )
        let label = this.props.formType === "Sign Up" ? (
            "Join Strida today, it's Free."
        ) : (
            "Log In"
        )
        return(
            <div className="form-container">
                <br/> 
                <h1 className="form-type">{label}</h1>
                <div>{this.props.errors.session.reponseText}</div>
                <br/> 
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input className="input-field" type="text" value={this.state.email} placeholder="Email" onChange={this.update("email")}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        <input className="input-field" type="password" value={this.state.password} placeholder="Password" onChange={this.update("password")} />
                    </label>
                    <br/>
                    <br/>
                    <button className="session-button" id="submit" type='submit'>{this.props.formType}</button>
                </form>
                <br/> 
                {link}
                <br/> 
            </div>
        )
    }
}

export default SessionForm; 