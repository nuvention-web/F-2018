import React from 'react'
import ReactDOM from 'react-dom'
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


var spanStyle = {
  fontFamily: '\'Dosis\', sans-serif',
  color: '#fff'
}

var boldStyle = {
  fontWeight: 'bold',
  color: '#3CB54A'
}

var iconStyle = {
  background: "#3CB54A",
  height: "25px",
  width: "25px",
  boxShadow: "none",
  marginTop: "20px",
  border: "5px solid white"
}
var megaBold = {
  fontWeight: 'bold'
}


class Timeline extends React.Component {
  render() {
    return (
        <div className="timeline">
            <h1 className="timeline-text">How It Works </h1>
            {/* <h3 className="timeline-sub">A Step by Step Process</h3> */}
        <VerticalTimeline className="step-line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle} 
            icon="">
            <h3 className="vertical-timeline-element-title">Sign Up</h3>
            <hr/>
            <p className="timeline-body">
              Simply login and answer a couple questions about yourself 
              and your career journey to fill out your profile.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            iconStyle={iconStyle}  
            icon="">
            <h3 className="vertical-timeline-element-title">Await a Match</h3>
            <hr/>
            <p className="timeline-body">
            Within 72 hours, you will be matched with either a mentee or mentor who 
            has experienced the same career transition you are considering for a 
            30-minute video call depending on where you are in your journey.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={iconStyle}  
            icon="">
            <h3 className="vertical-timeline-element-title">Check Your Progress</h3>
            <hr/>
            <p className="timeline-body">
            While you wait, check out how the matching is going on your personal 
            dashboard and feel free to edit your profile in the meantime!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            iconStyle={iconStyle}  
            icon="">
            <h3 className="vertical-timeline-element-title">Find a Time</h3>
            <hr/>
            <p className="timeline-body">
            Once a match is made, Monarch will send you and your match an email 
            with a Google Hangouts link to connect you both to find a mutually 
            agreeable time to chat.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle} 
            icon="">
            <h3 className="vertical-timeline-element-title">Video Call</h3>
            <hr/>
            <p className="timeline-body">
            Meet your match for 30 minutes to learn about their career journey and 
            what insider tips they have to share.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={iconStyle} 
            icon="">
            <h3 className="vertical-timeline-element-title">Say Thank You</h3>
            <hr/>
            <p className="timeline-body">
            At Monarch, we believe you should nurture relationships that have 
            helped you along your career journey. So, after your conversation, 
            we just ask you leave your mentor a few words of gratitude for their 
            time and advice.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h3 className="intro-sub2" style={{paddingBottom: "15"}}>   
          Looking to Transition Careers? <span style={megaBold}>Sign Up with Monarch</span>.
          <div>
            <Link to="/signup"><Button className="signupBottom" bsSize="large" href="/signup"> Sign Up Now </Button></Link>
          </div>
        </h3>
        </div>
    )
  }

}

export default Timeline;