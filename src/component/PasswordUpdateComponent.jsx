import React, {Component} from 'react';
import SocionityDataService from '../api/SocionityDataService.js';

class PasswordUpdateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    updateClicked = () => {
        SocionityDataService.updatePassword(this.props.match.params.name, {
            password : this.state.password
        }).then(() => this.props.history.push(`/profile/${this.props.match.params.name}`));
    }

    render() {
        return(
            <div className="container">
                <div className="PasswordUpdateComponent" style={{marginTop:"20px"}}>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} style={{borderRadius:"5px"}}/> <br/><br/>
                    <button onClick={this.updateClicked} className="btn btn-success">Update</button> <br/><br/>
                </div>
            </div>
        );
    }
}

export default PasswordUpdateComponent;