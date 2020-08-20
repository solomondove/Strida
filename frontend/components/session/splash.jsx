import React from 'react'; 

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
                    <form onSubmit={this.demoSubmit} className="splash-form">
                        <button className="session-button" id="splash-demo" type="submit">Log In As A Demo User</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SplashPage; 