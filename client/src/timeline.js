import React from 'react'
import ReactDOM from 'react-dom'
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


var spanStyle = {
  fontFamily: '\'Dosis\', sans-serif',
  color: '#fff'
}

var boldStyle = {
  fontWeight: 'bold',
  color: '#3CB54A'
}




class Timeline extends React.Component {
  render() {
    return (
        <div className="timeline">
            <h1 className="timeline-text"> How <span style={spanStyle}>Monarch</span> Works </h1>
            <h3 className="timeline-sub">A Step by Step Process</h3>
        <VerticalTimeline className="step-line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="1">
            <h3 className="vertical-timeline-element-title">Sign Up</h3>
            <h4 className="vertical-timeline-element-subtitle">Placeholder</h4>
            <p className="timeline-body">
              Simply login with your LinkedIn credentials and answer a couple questions about yourself for your profile.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="2">
            <h3 className="vertical-timeline-element-title">Browse Connections</h3>
            <h4 className="vertical-timeline-element-subtitle">Placeholder</h4>
            <p className="timeline-body">
              Instantly, Monarch will display several mentors that may be a good match for your career transition.
              Monarch will also display people just like you that you can talk to!
              You will then have the opportunity to browse their profile and fill in your 
              availability for a 30-minute video call that week or next to discuss your journey.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="3">
            <h3 className="vertical-timeline-element-title">Find a Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Placeholder</h4>
            <p className="timeline-body">
            Once a time is agreed upon using Monarch's own Doodle page, Monarch will send you and your 
            mentor a calendar invite with a link to a Google Hangouts call and access to each other’s emails 
            if you need to communicate.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="4">
            <h3 className="vertical-timeline-element-title">Video Conferencing</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p className="timeline-body">
            Meet your mentor for 30 minutes to learn all about their experience switching into 
            their new career and what insider tips they have to share before you take the leap.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="5">
            <h3 className="vertical-timeline-element-title">Say Thank You</h3>
            <h4 className="vertical-timeline-element-subtitle">Placeholder</h4>
            <p className="timeline-body">
            At Monarch, we believe you should nurture relationships that have helped 
            you along your career journey. So, after your conversation, we just ask you 
            leave your mentor a few words of gratitude for their time and advice.  
            If you want to stand out to your mentor and show your gratitude through a cup of coffee, 
            we encourage you to send them a $5 Starbucks gift card through our website.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="6">
            <h3 className="vertical-timeline-element-title">Network</h3>
            <h4 className="vertical-timeline-element-subtitle">Placeholder</h4>
            <p className="timeline-body">
            Your Monarch experience isn’t over just yet! We will recommend other mentors for 
            you to speak with, and you will have access to browsing our community, so you can 
            find other people who can help you along your journey of reinvention.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    )
  }

}

export default Timeline;