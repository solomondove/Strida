import React from 'react'; 
import {Link} from 'react-router-dom'; 


export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className="nav-right">
            <button className="session-button" id="submit-logout" onClick={() => logout()}>Logout</button>
        </div>
    ) : (
        <div className="nav-right">
            <Link className='session-button' to='/signup'>Sign Up</Link>
            <Link className="session-button" to='/login'>Log In</Link>
        </div>
    )

    return( 
        <div>
            {display}
        </div>
    )
}

