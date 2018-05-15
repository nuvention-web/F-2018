import React from 'react'
import ReactDOM from 'react-dom'
import './steps.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
// import 'react-vertical-timeline-component/style.min.css';

var spanStyle = {
  fontFamily: '\'Philosopher\', sans-serif',
  color: 'black',
  fontSize: '105%'
}

var boldStyle = {
  fontWeight: 'bold',
  color: 'black'
}

var megaBold = {
  fontWeight: 'bold'
}




class Steps extends React.Component {
  render() {
    return (
      <div className="steps"> 
        <h1 className="intro-text"> Who Are We?</h1>
        {/* <h3 className="intro-sub">We believe a career is a journey where reinvention is always within your reach, 
          and <span style={boldStyle}>relationships </span>have the power to inspire each step along the way.
        </h3> */}
        <h3 className="intro-sub">
          At Monarch, our mission is to connect you to people who will empower you to make the leap from <span style={boldStyle}>Plan A to Plan B </span>. 
          You will be matched with a professional who bridges both the career you are leaving and the one you are considering. 
          Speaking with someone who has <span style={boldStyle}>walked in your shoes </span> will give you a clearer idea of your next step and how to get there.
        </h3>
        <h3 className="intro-sub">   
          <span style={megaBold}>Monarch is where professionals go to find the confidence they need to reinvent their career. </span>
        </h3>
        <Button className="signupButton" bsSize="large" href="/signup"> Sign Up Now </Button>
      </div>
    )
  }

}

export default Steps;