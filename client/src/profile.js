import React, { Component } from "react";
import AppNav from './appnav'
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import SignUpForm from './signupform'
import ProfileTop from './profile-top'
import ProfileMain from './profile-main'



export default class Profile extends Component {
  render() {
    return (
      <div id="contact">
        <Nav/>
        <ProfileTop/>
        <ProfileMain/>
      </div>
    );
  }
}
