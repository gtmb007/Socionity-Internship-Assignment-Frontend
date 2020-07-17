import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import SignUpComponent from './SignUpComponent.jsx';
import ProfileComponent from './ProfileComponent.jsx';
import ProfileUpdateComponent from './ProfileUpdateComponent.jsx';
import PasswordUpdateComponent from './PasswordUpdateComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';

class SocionityApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login"  component={LoginComponent}/>
                            <Route path="/login/:name"  component={LoginComponent}/>
                            <Route path="/signup"  component={SignUpComponent}/>
                            <AuthenticatedRoute path="/profile/:name" exact component={ProfileComponent}/>
                            <AuthenticatedRoute path="/profile/updateName/:name" component={ProfileUpdateComponent}/>
                            <AuthenticatedRoute path="/profile/updatePassword/:name" component={PasswordUpdateComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        );
    }
}

export default SocionityApp;