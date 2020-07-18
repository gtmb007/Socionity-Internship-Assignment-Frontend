import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';
import AuthenticationService from './AuthenticationService.js';
import '../../src/App.css';

class PasswordUpdateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password : '',
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
        SocionityDataService.updatePassword(AuthenticationService.getUsername(), {
            password : this.state.password })
        .then(() => this.props.history.push(`/profile/${AuthenticationService.getUsername()}`))
        .catch(err => {this.setState({ hasFailed : true })})
    }

    render() {
        return(
            <div className="card">
                <div className="PasswordUpdateComponent">
                    {this.state.hasFailed && <div className="alert alert-warning">Something Went Wrong</div>}
                    <input type="password" name="password" placeholder="New Password" value={this.state.password} onChange={this.handleChange}/> <br/><br/>
                    <button onClick={this.updateClicked} className="btn btn-success">Update</button> <br/><br/>
                </div>
            </div>
        );
    }
}

export default PasswordUpdateComponent;