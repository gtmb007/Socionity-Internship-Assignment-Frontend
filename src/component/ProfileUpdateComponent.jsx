import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';

class ProfileUpdateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    updateClicked = () => {
        SocionityDataService.updateUsername(this.props.match.params.name, {
            firstName : this.state.firstName,
            lastName : this.state.lastName
        }).then(() => this.props.history.push(`/profile/${this.props.match.params.name}`));
    }

    render() {
        return(
            <div className="container">
                <div className="ProfileUpdateComponent" style={{marginTop:"20px"}}>
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <button onClick={this.updateClicked} className="btn btn-success">Update</button> <br/><br/>
                </div>
            </div>
        );
    }
}

export default ProfileUpdateComponent;