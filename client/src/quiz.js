import React, { Component } from "react";
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import Wizard from './wizard'
import axios from 'axios';



export default class Quiz extends Component {
    constructor(props) {
      super(props);
      this.getProfile = this.getProfile.bind(this);
    }

    //get the JSON of user profile
    // sample:
  //   {
  //     "_id": "5af1002f6cf4b7831e35d809",
  //     "username": "hahaha",
  //     "name": "Bryan Li",
  //     "age": 21,
  //     "mentor": true,
  //     "__v": 0,
  //     "about": {
  //         "about": "a",
  //         "whyindustry": "b",
  //         "transitioningquestions": "c"
  //     },
  //     "industries": {
  //         "currentindustry": "technology",
  //         "targetindustry": "consulting"
  //     },
  //     "experience": [
  //         {
  //             "company": "Monarch",
  //             "_id": "5af1002f6cf4b7831e35d80a"
  //         }
  //     ],
  //     "education": [
  //         {
  //             "major": "Computer Science",
  //             "degree": "Bachelor's",
  //             "institution": "Northwestern University",
  //             "_id": "5af1002f6cf4b7831e35d80b"
  //         }
  //     ],
  //     "location": {
  //         "city": "Evanston",
  //         "state": "IL"
  //     }
  // }
    getProfile() {
      axios.get('/users/profile')
      .then(function (res) {
          console.log(res.data.username);
          return res.data.username;
      })
      .catch(function (err) {
          console.log(err);
      });
  }


  render() {
    return (
      <div id="contact">
        <Nav/>
        <Wizard/>
      </div>
    );
  }
}
