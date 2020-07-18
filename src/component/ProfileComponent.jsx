import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';
import AuthenticationService from './AuthenticationService';
import '../../src/App.css';

class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state ={
            firstName : '',
            lastName : '',
            profileImage : ''  
        }
    }

    componentDidMount(){
        SocionityDataService.getUser(AuthenticationService.getUsername())
        .then(
            response => {
                    this.setState({firstName : response.data.firstName, lastName : response.data.lastName, profileImage : response.data.profileImage})
            })
    }

    updateProfileClicked = () => {
        this.props.history.push(`/profile/updateProfile/${AuthenticationService.getUsername()}`);
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
                <p>Welcome <b>{AuthenticationService.getUsername()}</b></p>
                <div className="ProfileImage">
                    <img src={this.state.profileImage} alt="" style={{height:"120px",width:"120px",borderRadius:"60px"}}/>
                </div>
                <b>{this.state.firstName} {this.state.lastName}</b> <br/> <br/>
                <button onClick={this.updateProfileClicked} className="btn btn-secondary" style={{margin:"20px"}}>Update Profile</button>
                <button onClick={this.updatePasswordClicked} className="btn btn-secondary" style={{margin:"20px"}}>Update Password</button>
                <button onClick={this.deleteAccountClicked} className="btn btn-danger" style={{margin:"20px"}}>Delete Account</button>
            </div>
        );
    }

}

export default ProfileComponent;