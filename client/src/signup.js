import React, { Component } from "react";
import Nav from './nav'
import SignUpForm from './signupform'
import AppNav from './appnav'



export default class Signup extends Component {
  render() {
    return (
      <div id="contact">
        <SignUpForm/>
      </div>
    );
  }
}
