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

var megaBold = {
  fontWeight: 'bold'
}




class Steps extends React.Component {
  render() {
    return (
      <div className="steps"> 
        <h1 className="intro-text"> What is <span style={spanStyle}>Monarch</span>?</h1>
        <h3 className="intro-sub">
          Looking to switch careers? Career transition can be difficult 
          because everyone's transition Monarch delivers <span style={boldStyle}>personalized guidance </span> 
          by connecting you with people who have gone through a similar transition, or people who are just like you!
        </h3>
        <h3 className="intro-sub">We believe a career is a journey where reinvention is always within your reach, 
          and <span style={boldStyle}>relationships </span>have the power to inspire each step along the way.
        </h3>
        <h3 className="intro-sub">
          At Monarch, our mission is to connect you to people who will empower you to make the leap from <span style={boldStyle}>Plan A to Plan B </span>. 
          You will be matched with a professional who bridges both the career you are leaving and the one you are considering. 
          Speaking with someone who has <span style={boldStyle}>walked in your shoes </span> will give you a clearer idea of your next step and how to get there.
        </h3>
        <h3 className="intro-sub">   
          <span style={megaBold}>Monarch is where professionals go to find the confidence they need to reinvent their career. </span>
        </h3>
      </div>
    )
  }

}

export default Steps;