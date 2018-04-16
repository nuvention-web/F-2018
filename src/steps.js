import React from 'react'
import ReactDOM from 'react-dom'
import './steps.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

var spanStyle = {
  fontFamily: '\'Dosis\', sans-serif',
  color: '#3CB54A'
}

var boldStyle = {
  fontWeight: 'bold',
  color: '#3CB54A'
}




class Steps extends React.Component {
  render() {
    return (
      <div className="steps"> 
        <h1 className="intro-text"> What is <span style={spanStyle}>Tete</span>?</h1>
        <h3 className="intro-sub">
          Looking to switch careers? Career transition can be difficult 
          because everyone's transition Tete delivers <span style={boldStyle}>personalized guidance </span> 
          by connecting you with people who have gone through a similar transition, or people who are just like you! 
        </h3>
      </div>
    )
  }

}

export default Steps;