import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';
import '../../src/App.css';

class ProfileUpdateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
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
        SocionityDataService.updateUsername(this.props.match.params.name, {
            firstName : this.state.firstName,
            lastName : this.state.lastName })
        .then(() => this.props.history.push(`/profile/${this.props.match.params.name}`))
        .catch(err => {this.setState({ hasFailed : true })})
    }

    render() {
        return(
            <div className="card">
                <div className="ProfileUpdateComponent">
                    {this.state.hasFailed && <div className="alert alert-warning">Something Went Wrong</div>}
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/> <br/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/> <br/><br/>
                    <button onClick={this.updateClicked} className="btn btn-success">Update</button> <br/><br/>
                </div>
            </div>
        );
    }
}

export default ProfileUpdateComponent;