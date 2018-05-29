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
        <h1 className="intro-text">Find the Confidence to Reinvent Your Career.</h1>
        {/* <h3 className="intro-sub">We believe a career is a journey where reinvention is always within your reach, 
          and <span style={boldStyle}>relationships </span>have the power to inspire each step along the way.
        </h3> */}
        <h3 className="intro-sub" id="intro">
          <span style={boldStyle}>Monarch helps career switchers connect with other professionals to simplify the transition.</span>
        </h3>
        {/* <hr/> */}
        <div className="column-box">
          <div className="core-box">
            <img src={img2} className="icon"/>
            <hr/>
            <div className="core-title">Connect</div>
            <div className="core-text">Get matched with professionals who bridge both the career you are leaving and the one you are considering, so you can confidently make the leap.</div>
          </div>
          <div className="core-box">
            <img src={img1} className="icon"/>
            <hr/>
            <div className="core-title">Connect</div>
            <div className="core-text">Relationships matter. Speak with professionals who understand your career journey and get an honest outlook on your career switch.</div>
          </div>
          <div className="core-box">
            <img src={img3} className="icon"/>
            <hr/>
            <div className="core-title">Transition</div>
            <div className="core-text">Take a closer step toward your next career by speaking to someone who has walked in your shoes. </div>
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