import React from 'react'
import ReactDOM from 'react-dom'
import './profile.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';
import image from './static/shutterstock_520402930.jpg'
// import 'react-vertical-timeline-component/style.min.css';

var profileTest = {
    name: "Drew Parsons",
    hometown: "Denver, CO"
}

var grayed = {
    color: "gray"
}

var imageStyle = {
    backgroundImage: `url(${image})`
  }


class ProfileTop extends React.Component {
  render() {
    return (
      <div className="top-profile">
        <div className="top-color" style={imageStyle}/>
            <div className="avatar">
            {/* facebookId="100000473157150" */}
                <Avatar  name="Drew Parsons" round={true} size="200"/>
            </div>
        <div className="profile-intro">
            <h1 className="profile-name">{profileTest.name}</h1>
            <h3 className="profile-town" style={grayed}>{profileTest.hometown}</h3>
            <Button className="connectButton" bsStyle="large">Connect</Button>
            {/* <hr/> */}
        </div>
      </div>
    )
  }

}

export default ProfileTop;