import React, {Component} from 'react';
import SocionityDataService from './SocionityDataService.js';

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
        SocionityDataService.getUser(this.props.match.params.name)
        .then(
            response => {
                    this.setState({user : response.data})
            })
    }

    render() {
        return(
            <div className="container">
                Welcome {this.props.match.params.name} <br/>
                {this.state.user.firstName} {this.state.user.lastName} 
            </div>
        );
    }

}

export default ProfileComponent;