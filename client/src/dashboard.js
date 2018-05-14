import React, { Component } from "react";
import AppNav from './appnav'
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import Spinner from './spinner'
import Nav2 from './nav2'



export default class Dashboard extends Component {
  render() {
    return (
      <div id="contact">
        <Nav2/>
        <Spinner/>
      </div>
    );
  }
}
