import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {Link} from 'react-router-dom';
import SocionityDataService from '../api/SocionityDataService.js';
import '../../src/App.css';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            hasLoginFailed : false
        }
    }

    // componentWillUnmount() {
    //     this.setState({ hasLoginFailed : false }); 
    // }


    handleChange = (event) => {
        this.setState({
            hasLoginFailed : false,
            [event.target.name] : event.target.value
        });
    }

    loginClicked = () => {
        SocionityDataService.login(this.state.username, this.state.password)
        .then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/profile/${this.state.username}`);
                this.setState({ hasLoginFailed : false }); 
            })
        .catch(
            err => {
                this.setState({ hasLoginFailed : true })
            })
    }

    render() {
        return(
            <>
            <div className="card">
                <div className="LoginComponent">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Something Went Wrong</div>}
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/> <br/><br/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/> <br/><br/>
                    <button onClick={this.loginClicked} className="btn btn-success">Login</button> <br/><br/>
                    Not Registered? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
            {/* <h6>or</h6>
            <a href={`/profile/${this.state.username}`} className="fa fa-google"></a>
            <a href={`/profile/${this.state.username}`} className="fa fa-facebook"></a>
            <a href={`/profile/${this.state.username}`} className="fa fa-twitter"></a> */}
            </>
        );
    }
}

export default LoginComponent;