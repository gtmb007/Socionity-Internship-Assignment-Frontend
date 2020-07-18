import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';
import '../../src/App.css';

class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            firstName : '',
            lastName : '',
            password : '',
            hasSignUpFailed : false
        }
    }

    // componentWillUnmount() {
    //     this.setState({ hasSignUpFailed : false });
    // }

    handleChange = (event) => {
        this.setState({
            hasSignUpFailed : false,
            [event.target.name] : event.target.value
        });
    }

    signUpClicked = () => {
        SocionityDataService.signup({
            userId : this.state.username,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            password : this.state.password})
        .then(
            () => {
                this.props.history.push('/login');
                this.setState({ hasSignUpFailed : false });
            }) 
        .catch(
            err => {
                this.setState({ hasSignUpFailed : true })
            })
    }

    render() {
        return(
            <div className="card">
                <div className="SignUpComponent">
                    {this.state.hasSignUpFailed && <div className="alert alert-warning">Something Went Wrong</div>}
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/> <br/><br/>
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/> <br/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/> <br/><br/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/> <br/><br/>
                    <button onClick={this.signUpClicked} className="btn btn-success">SignUp</button> <br/><br/>
                </div>
            </div>
        );
    }
}

export default SignUpComponent;