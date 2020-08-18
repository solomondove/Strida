import React from 'react'; 
import {Link} from 'react-router-dom'; 


// class NavBarRight extends React.Component {

//     render() {
//         const display = this.props.currentUser ? (
//                 <button className="session-button" onClick={() => this.props.logout()}>Logout</button>
//         ) : (
//             <div>
//                 <Link className='session-button' to='/signup'>Sign Up</Link>
//                 <Link className="session-button" to='/login'>Log In</Link>
//             </div>
//         );

//         return (
//             <div className="nav_right">
//                 { display }
//             </div>
//         )
//     }
// }

// export default NavBarRight; 

export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className="nav-right">
            <button className="session-button" id="submit" onClick={() => logout()}>Logout</button>
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

