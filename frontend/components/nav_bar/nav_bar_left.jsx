import React from 'react';
import { Link } from 'react-router-dom';


class NavBarLeft extends React.Component {
    constructor(props){
        super(props); 
        this.currentUser = this.props.currentUser

       
    };



    render() {
        const display = this.currentUser ? (
            <div className="nav-left route-dropdown">
                <div className="nav-menu-trigger">
                    <h3 className="nav-menu-anchor">Routes &nbsp;<i className="fas fa-angle-down"></i></h3>
                    <div className="dropdown">
                        <Link className='nav-menu-link' to='/routes'>My Routes</Link>
                        <Link className='nav-menu-link' to='/routes/create'>Create Route</Link>
                    </div>
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