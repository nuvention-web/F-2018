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
