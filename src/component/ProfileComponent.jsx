import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';
import AuthenticationService from './AuthenticationService';

class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state ={
            user : {
                firstName : '',
                lastName : ''
            }
        }
    }

    componentDidMount(){
        SocionityDataService.getUser(AuthenticationService.getUsername())
        .then(
            response => {
                    this.setState({user : response.data})
            })
    }

    updateNameClicked = () => {
        this.props.history.push(`/profile/updateName/${AuthenticationService.getUsername()}`);
    }

    updatePasswordClicked = () => {
        this.props.history.push(`/profile/updatePassword/${AuthenticationService.getUsername()}`);
    }

    deleteAccountClicked = () => {
        SocionityDataService.deleteUser(AuthenticationService.getUsername())
        .then(
            () => {
                AuthenticationService.logout();
                this.props.history.push(`/login`);
            })
    }

    render() {
        return(
            <div className="container">
                Welcome {AuthenticationService.getUsername()} <br/>
                {this.state.user.firstName} {this.state.user.lastName} <br/> <br/>
                <button onClick={this.updateNameClicked} className="btn btn-secondary" style={{margin:"20px"}}>Update Name</button>
                <button onClick={this.updatePasswordClicked} className="btn btn-secondary" style={{margin:"20px"}}>Update Password</button>
                <button onClick={this.deleteAccountClicked} className="btn btn-danger" style={{margin:"20px"}}>Delete Account</button>
            </div>
        );
    }

}

export default ProfileComponent;