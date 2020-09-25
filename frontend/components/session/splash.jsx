import React from 'react'; 
import {Link} from 'react-router-dom'; 

class SplashPage extends React.Component {
    constructor(props){
        super(props); 

        this.demoSubmit = this.demoSubmit.bind(this); 
        this.redirectToLogin = this.redirectToLogin.bind(this); 
        this.redirectToSignup = this.redirectToSignup.bind(this);
    }

    demoSubmit(e) {
        e.preventDefault();
        let demo = {
            email: 'strider@wingfoot.com',
            password: 'password'
        };
        this.props.login(demo);
    }

    redirectToLogin(e) {
        e.preventDefault(); 
        this.props.history.push('/login'); 
    }

    redirectToSignup(e) {
        e.preventDefault(); 
        this.props.history.push('/signup');
    }

    render() {
        return(
            <div className="splash-container">
                <h1 className="splash-header">The #1 app for runners and cyclists</h1>
                <div className="splash-body">
                    <p className="splash-image"></p>
                    <div className="splash-menu">
                        <div className="splash-dividing-border">
                            <form className="splash-form" onSubmit={this.redirectToLogin}>
                                <button id="splash-demo" className="session-button" type="submit">
                                    <i className="fas fa-user-alt fa-1x splash-icon"></i> Log In With Account
                                </button>
                            </form>
                            <form className="splash-form" onSubmit={this.redirectToSignup}>
                                <button id="splash-demo" className="session-button" type="submit">
                                    <i className="far fa-envelope fa-1x splash-icon"></i> Sign Up With Email
                                </button> 
                                <div className="splash-dividing-or">or</div>
                            </form>
                        </div>
                        <form onSubmit={this.demoSubmit} className="splash-form">
                            <button className="session-button" id="splash-demo" type="submit">
                                <i className="far fa-id-card fa-1x splash-icon"></i>Log In As A Demo User
                            </button>
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