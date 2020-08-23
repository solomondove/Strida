import React from 'react';
import { Link } from 'react-router-dom';


class NavBarLeft extends React.Component {
    constructor(props){
        super(props); 
        this.currentUser = this.props.currentUser

        this.state = {
            showRoutesMenu: false 
        }
    };

    showMenu() {
        this.setState({showRoutesMenu: true})
    };

    hideMenu() {
        this.setState({showRoutesMenu: false})
    }


    render() {
        const display = this.currentUser ? (
            <div className="nav-left route-dropdown">
                <div className="nav-menu anchor" onMouseEnter={() => this.showMenu()} onMouseLeave={() => this.hideMenu()}>
                    Routes
                    {this.state.showRoutesMenu ? ( 
                        <div className="dropdown">
                    
                            <Link className='nav-menu' to='/routes'>My Routes</Link>
                            <br/> 
                            <Link className='nav-menu' to='/routes/create'>Create Route</Link>
                        </div>
                    ) : ( null )}
                </div>
            </div>
        ) : (
            <div className="nav-left"></div> 
        )

        return (
            <div>
                {display}
            </div>
        )
    }
}


export default NavBarLeft; 