import React, { Component } from "react";
import AppNav from './appnav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import Spinner from './spinner'
import Nav2 from './nav2'
import EditProfile from './editprofile'



export default class Dashboard extends Component {
  render() {
    return (
      <div id="contact" className="dashboard">
        <AppNav/>
        <Spinner/>
        <EditProfile/>
      </div>
    );
  }
}
