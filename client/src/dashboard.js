import React, { Component } from "react";
import AppNav from './appnav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import Spinner from './spinner'
import Nav2 from './nav2'
import EditProfile from './editprofile'
import img1 from './static/story1.jpg'
import img2 from './static/story2.jpg'
import img3 from './static/story3.jpg'
import arrow from './static/right-arrow.png'


var arrowStyle = {
  width: "35px",
  height: "35px",
  position: "relative",
}


export default class Dashboard extends Component {
  render() {
    return (
      <div id="contact" className="dashboard">
          <div className="dash-box">
            <img src={img1} className="story-icon"/>
            <div className="story-title">Marissa Thomas</div>
            <div className="story-town">Austin, TX</div>
            <div className="story-text" style={{paddingTop: "1.5em"}}>“It's comforting knowing that other people have gone through similar struggles or worries.”</div>
            <div className="story-transition">
              <div className= "story-before">
                Journalism
              </div>
              <div className="story-arrow">
                <img className="transition-arrow" src={arrow} style={arrowStyle}/>  
              </div>
              <div className= "story-after">
                Law
              </div>
            </div>
          </div>
          <div className="dash-box">
            <img src={img2} className="story-icon"/>
            <div className="story-title">Josh Marcus</div>
            <div className="story-town">New York, NY</div>
            <div className="story-text" style={{paddingTop: "1.5em"}}>"Talking to someone in the industry [I was transitioning to] made me feel I was 'on the right track' and 'Encouraged'"</div>
            <div className="story-transition">
              <div className= "story-before">
                Journalism
              </div>
              <img className="transition-arrow" src={arrow} style={arrowStyle}/>  
              <div className= "story-after" style={{verticalAlign: "inherit"}}>
                Private Investigation
              </div>
            </div>
          </div>
          <div className="dash-box">
            <img src={img3} className="story-icon"/>
            <div className="story-title">Jason Li</div>
            <div className="story-town">Baltimore, MD</div>
            <div className="story-text">"I was able to talk to someone in the same situation as me about the potential difficulties they'd face, and give her a really honest assessment of what she would have to go through.”</div>
            <div className="story-transition">
              <div className= "story-before">
                Journalism
              </div>
              <img className="transition-arrow" src={arrow} style={arrowStyle}/>  
              <div className= "story-after">
                Law
              </div>
            </div>
          </div>

      <div className="quotes">
                “Tell the story of the mountain you climbed. Your words could become a page in someone else’s survival guide” - Morgan Harper Nichols
            </div>
        <AppNav/>
        <Spinner/>
        <EditProfile/>
      </div>
    );
  }
}
