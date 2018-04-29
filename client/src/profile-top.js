import React from 'react'
import ReactDOM from 'react-dom'
import './profile.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';
// import 'react-vertical-timeline-component/style.min.css';

var profileTest = {
    name: "Drew Parsons",
    hometown: "Denver, CO"
}

var grayed = {
    color: "gray"
}


class ProfileTop extends React.Component {
  render() {
    return (
      <div className="top-profile">
        <div className="top-color"/>
            <div className="avatar">
                <Avatar name="Drew Parsons" round={true} size="200"/>
            </div>
        <div className="profile-intro">
            <h1 className="profile-name">{profileTest.name}</h1>
            <h3 style={grayed}>{profileTest.hometown}</h3>
            <Button className="connectButton" bsStyle="large">Connect</Button>
            <hr/>
        </div>
      </div>
    )
  }

}

export default ProfileTop;