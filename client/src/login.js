import React, { Component } from "react";
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import LoginForm from './loginform'
import AppNav from './appnav'



export default class Login extends Component {
  render() {
    return (
      <div id="contact">
        <AppNav/>
        <LoginForm/>
      </div>
    );
  }
}