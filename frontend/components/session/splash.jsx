import React from 'react'; 
import {Link} from 'react-router-dom'; 

class SplashPage extends React.Component {
    constructor(props){
        super(props); 

        this.demoSubmit = this.demoSubmit.bind(this); 
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
        return(
            <div className="splash-container">
                <h1 className="splash-header">The #1 app for runners and cyclists</h1>
                <div className="splash-body">
                    <p className="splash-image"></p>
                    <div className="splash-menu">
                        <form onSubmit={this.demoSubmit} className="splash-form">
                            <button className="session-button" id="splash-demo" type="submit">Log In As A Demo User</button>
                        </form>
                        <br/> 
                        <footer>
                        <h5>By signing up for Strida, you agree to the Terms of Service. We don't have a Privacy Policy.</h5>
                        <br/> 
                        <h5>Already a member? <Link to="/login" className="splash-link">Log In</Link> </h5>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashPage; 