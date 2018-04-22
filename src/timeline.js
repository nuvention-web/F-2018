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
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              This is a placeholder to test whether the component expands to accomodate for longer posts.  
              I need to test this to understand how hard it will be to add pictures and such to the individual parts of the step-by-step process.
              Eventually, these placeholders will be filled with information and images that display Tete's mission 
              and how we're trying to help our users and stuff.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="2">
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="3">
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="4">
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: '#3CB54A', color: '#fff' }} 
            icon="5">
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    )
  }

}

export default Timeline;