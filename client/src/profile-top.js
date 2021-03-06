import React from 'react'
import ReactDOM from 'react-dom'
import './profile.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';
import image from './static/shutterstock_520402930.jpg'
// import 'react-vertical-timeline-component/style.min.css';
import axios from 'axios';
import star from "./static/favorites.png"

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

var blueButton = {
    backgroundColor: "dodgerblue"
}

var blue = {
    color: "dodgerblue"
}



class ProfileTop extends React.Component {
    constructor(props) {
        super(props);
        this.getProfile = this.getProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);

        this.state = {
            retrieved: false,
            profile: null,
            email: null,
            linkedin: ''
        }
    }

    getProfile() {
        //sleep(1000);
        if (this.props.username) {
            axios.get('/users/' + this.props.username)
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
            axios.get('/users/email/' + this.props.username)
            .then(res => {
                this.setState({email: res.data.email});
                //console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        else {
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
    }
    
    updateProfile(data) {
        this.setState({profile: data, retrieved: true});
        console.log(this.state.profile)
    }



  render() {



    if (this.state.retrieved && this.state.profile != null) {
        if(this.state.profile.mentor == true) {
            return (
            <div className="top-profile">
                <div className="top-color" style={imageStyle}/>
                <div className="mentortag"> <img src={star}/> </div>
                    <div className="avatar">
                    {/* facebookId="100000473157150" */}
                        <Avatar name={this.state.profile.name} round={true} size="200" style={{width: "200px"}}/>
                    </div>
                <div className="profile-intro">
                    <h1 className="profile-name">{this.state.profile.name}</h1>
                    <h3 className="profile-town" style={grayed}>{this.state.profile.location.city}, {this.state.profile.location.state}</h3>
                    <Button className="connectButton" style={blueButton} bsStyle="large" onClick={()=>window.location.assign('mailto:'+this.state.email+'?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/')}>Connect</Button>
                    <Button className="linkedinButton" bsStyle="large" onClick={()=>window.location.assign(this.state.profile.linkedin)}>LinkedIn</Button>
                    {/* <hr/> */}
                </div>
            </div>
            )
        }
        else {
            return (
                <div className="top-profile">
                    <div className="top-color" style={imageStyle}/>
                    <div className="mentortag" style={{zIndex: "-25"}}> <img src={star}/> </div>
                        <div className="avatar">
                        {/* facebookId="100000473157150" */}
                            <Avatar name={this.state.profile.name} round={true} size="200" style={{width: "200px"}}/>
                        </div>
                    <div className="profile-intro">
                        <h1 className="profile-name">{this.state.profile.name}</h1>
                        <h3 className="profile-town" style={grayed}>{this.state.profile.location.city}, {this.state.profile.location.state}</h3>
                        <Button className="connectButton" bsStyle="large" onClick={()=>window.location.assign(`mailto:${this.state.email}¸?subject=Connecting on Monarch&body=Dear ` +this.state.profile.name + `, I found your profile on Monarch, and would love to connect with you about your career transition.`)}>Connect</Button>
                        <Button className="linkedinButton" bsStyle="large" onClick={()=>window.location.assign(this.state.profile.linkedin)}>LinkedIn</Button>
                        {/* <hr/> */}
                    </div>
                </div>
                )
        }
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