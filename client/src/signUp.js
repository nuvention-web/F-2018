import React, { Component } from "react";
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import SignUpForm from './signupform'



export default class Signup extends Component {
  render() {
    return (
      <div id="contact">
        <Nav/>
        <SignUpForm/>
      </div>
    );
  }
}