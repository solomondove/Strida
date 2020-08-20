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
        this.demoSubmit = this.demoSubmit.bind(this); 
    }

    componentDidMount(){
        this.props.clearSessionErrors(); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.action(this.state); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    demoSubmit(e) {
        e.preventDefault(); 
        let demo = { 
            email: 'demo@demo.com', 
            password: 'password'
        }; 
        this.props.login(demo);
    }

    render() {
        
        let label = this.props.formType === "Sign Up" ? (
            "Join Strida today, it's Free."
        ) : (
            "Log In"
        )

        console.log(this.props.errors.session.responseJSON);

        let errorMessages = this.props.errors.session.responseJSON === undefined ? (
            <br/> 
        ) : ( 
            <div className="errors">
                <br/> 
                {this.props.errors.session.responseJSON.map((error, idx) => {
                    return <div key={idx}>{error}</div>
                })}
                <br/> 
            </div>
        )
 
        return(
            <div className="form-background">
                <br/> 
                <br/> 
                <br/> 
                <div className="form-container">
                    <h1 className="form-type">{label}</h1>
                    {errorMessages}
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
                        <button className="session-button" id="submit-session" type='submit'>{this.props.formType}</button>
                    </form>
                    <br/> 
                    <form onSubmit={this.demoSubmit}>
                        <button className="session-button" id='submit-session' type="submit">Demo Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm; 