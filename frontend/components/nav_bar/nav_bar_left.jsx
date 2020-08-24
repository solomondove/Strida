import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser }) => {
    const display = currentUser ? (
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


