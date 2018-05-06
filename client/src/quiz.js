import React, { Component } from "react";
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import Wizard from './wizard'



export default class Quiz extends Component {
  render() {
    return (
      <div id="contact">
        <Nav/>
        <Wizard/>
      </div>
    );
  }
}
