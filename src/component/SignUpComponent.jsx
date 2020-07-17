import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';

class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            firstName : '',
            lastName : '',
            password : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    signUpClicked = () => {
        SocionityDataService.signup({
            userId : this.state.username,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            password : this.state.password
        }).then(() => this.props.history.push('/login'));
    }

    render() {
        return(
            <div className="container">
                <div className="SignUpComponent" style={{marginTop:"20px"}}>
                    {/* {this.state.hasSignUpFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMesaage && <div>SignUp Successfully</div>} */}
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <button onClick={this.signUpClicked} className="btn btn-success">SignUp</button> <br/><br/>
                </div>
            </div>
        );
    }
}

export default SignUpComponent;