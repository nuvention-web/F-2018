import React from 'react'
import ReactDOM from 'react-dom'
import './steps.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img1 from './static/communication.png'
import img2 from './static/network.png'
import img3 from './static/ascending-stairs-signal.png'
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
        <hr/>
        <div className="column-box">
          <div className="core-box">
            <img src={img1} className="icon"/>
            <hr/>
            <div className="core-title">One-on-One</div>
            <div className="core-text">Engage in a face-to-face video conference with industry workers that will guide you through your career transition.</div>
          </div>
          <div className="core-box">
            <img src={img2} className="icon"/>
            <hr/>
            <div className="core-title">Network</div>
            <div className="core-text">At Monarch, we know that relationships matter. Connect with individuals and expand your powerful network before making the leap.</div>
          </div>
          <div className="core-box">
            <img src={img3} className="icon"/>
            <hr/>
            <div className="core-title">Transition</div>
            <div className="core-text">Make your next career switch with ease by gaining knoledgable information from individuals already working in your next career.</div>
          </div>
        </div>
        <h3 className="intro-sub2">   
          <span style={megaBold}>Monarch is where professionals go to find the confidence they need to reinvent their career. </span>
        </h3>
          {/* <Link to="/signup"><Button className="signupButton" bsSize="large" href="/signup"> Sign Up Now </Button></Link> */}
      </div>
    )
  }

}

export default Steps;