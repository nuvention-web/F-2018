import React from 'react'
import ReactDOM from 'react-dom'
import './profile.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';
import image from './static/shutterstock_520402930.jpg'
// import 'react-vertical-timeline-component/style.min.css';
import axios from 'axios';

var profileTest = {
    name: "Drew Parsons",
    hometown: "Denver, CO",
    age: "20"
}

var grayed = {
    color: "gray"
}

var imageStyle = {
    backgroundImage: `url(${image})`
  }




class ProfileTop extends React.Component {
    constructor(props) {
        super(props);
        this.getProfile = this.getProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);

        this.state = {
            retrieved: false,
            profile: null
        }
    }

    getProfile() {
        //sleep(1000);
        axios.get('/users/profile')
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .then((data) => {
            this.updateProfile(data);
        })
        .catch(function (err) {
            //this.forceUpdate();
            console.log(err);
        });
    }
    
    updateProfile(data) {
        this.setState({profile: data, retrieved: true});
    }



  render() {
    if (this.state.retrieved && this.state.profile != null) {
        return (
        <div className="top-profile">
            <div className="top-color" style={imageStyle}/>
                <div className="avatar">
                {/* facebookId="100000473157150" */}
                    <Avatar name={this.state.profile.name} round={true} size="200"/>
                </div>
            <div className="profile-intro">
                <h1 className="profile-name">{this.state.profile.name}</h1>
                <h3 className="profile-town" style={grayed}>{this.state.profile.location.city}, {this.state.profile.location.state}</h3>
                <Button className="connectButton" bsStyle="large">Connect</Button>
                {/* <hr/> */}
            </div>
        </div>
        )
    }
    else {
        //sleep(1000);
        try {
            this.getProfile();
            return null;
        }
        catch(err) {
            this.forceUpdate();
        }
    }
  }

}

export default ProfileTop;