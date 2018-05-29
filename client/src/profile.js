import React, { Component } from "react";
import AppNav from './appnav'
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import SignUpForm from './signupform'
import ProfileTop from './profile-top'
import ProfileMain from './profile-main'



export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.match.params.username) {
      const {username} = this.props.match.params.username;
      return (
        <div id="contact">
          <AppNav/>
          <ProfileTop username={this.props.match.params.username}/>
          <ProfileMain username={this.props.match.params.username}/>
        </div>
      )
    }
    else {
      return (
        <div id="contact">
          <AppNav/>
          <ProfileTop/>
          <ProfileMain/>
        </div>
      );
    }
  }
}
