import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';
import '../../src/App.css';
import AuthenticationService from './AuthenticationService';

class ProfileUpdateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            profileImage : '',
            hasFailed : false
        }
    }

    handleChange = (event) => {
        this.setState({
            hasFailed : false,
            [event.target.name] : event.target.value
        });
    }

    updateClicked = () => {
        SocionityDataService.updateProfile(AuthenticationService.getUsername(), {
            profileImage : this.state.profileImage,
            firstName : this.state.firstName,
            lastName : this.state.lastName })
        .then(() => this.props.history.push(`/profile/${AuthenticationService.getUsername()}`))
        .catch(err => {this.setState({ hasFailed : true })})
    }

    handleChange1 = (event) => {
        this.setState({
            profileImage : URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return(
            <div className="card">
                <div className="ProfileUpdateComponent">
                    {this.state.hasFailed && <div className="alert alert-warning">Something Went Wrong</div>}
                    <input type="file" className="form-control" onChange={this.handleChange1}/> <br/>
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/> <br/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/> <br/><br/>
                    <button onClick={this.updateClicked} className="btn btn-success">Update</button> <br/><br/>
                </div>
            </div>
        );
    }
}

export default ProfileUpdateComponent;