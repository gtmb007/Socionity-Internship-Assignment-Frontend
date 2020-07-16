import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {Link} from 'react-router-dom';
import SocionityDataService from './SocionityDataService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            // hasLoginFailed : false,
            // showSuccessMesaage : false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    loginClicked = () => {
        // try {
            SocionityDataService.login(this.state.username, this.state.password)
            .then(
                () => {
                    AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                    this.props.history.push(`/profile/${this.state.username}`);
                    // this.setState({
                    //     showSuccessMesaage : true,
                    //     hasLoginFailed : false
                    // })
                })
        // } catch(e) {
        //     console.log(e.description);
        //     this.setState({
        //         showSuccessMesaage : false,
        //         hasLoginFailed : true
        //     })
        // }
    }

    render() {
        return(
            <div className="container">
                <div className="LoginComponent" style={{marginTop:"20px"}}>
                    {/* {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMesaage && <div>Login Successfully</div>} */}
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <button onClick={this.loginClicked} className="btn btn-success">Login</button> <br/><br/>
                    Not Registered? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        );
    }
}

export default LoginComponent;