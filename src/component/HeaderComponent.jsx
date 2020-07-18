import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import {withRouter} from 'react-router';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href={`${window.location.href}`} className="navbar-brand">Socionity</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link to={`/profile/${AuthenticationService.getUsername()}`} className="nav-link">Profile</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);