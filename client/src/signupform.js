import React, { Component } from "react";
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import './signup.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import image from './static/intro.jpeg'


axios.defaults.withCredentials = true;

var imageStyle = {
    backgroundImage: `url(${image})`
  }

var formStyle = {
    marginTop: "35px",
    paddingBottom: "15px",
}


export default class SignUpForm extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.submitUser = this.submitUser.bind(this);
    
        this.state = {
            password: '',
            email: '',
            username: ''
        };
      }

    getValidationState() {
        const length = this.state.password.length;
        if (length > 8) return 'success';
        else if (length > 0) return 'error';
        return null;
    }
    
  
    handleChange(e) {
      this.setState({ password: e.target.value });
    }
    handleEmail(e) {
        this.setState({ email: e.target.value });
      }

    handleName(e) {
        this.setState({ username: e.target.value });
    }

    submitUser() {
        console.log(this.state);
        axios.post('/users/create', {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
    }


  render() {
    return (
        <div className="img-container-signup" style={imageStyle}>
            <div className="form">
                <h1 className="formTitle">Get Started.</h1>
                <form style={formStyle}>
                        <ControlLabel className="left-aligned" style={{marginTop: "15px"}}>Username</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.username}
                            placeholder="Enter Username"
                            onChange={this.handleName}/>
                        <FormControl.Feedback />
                        <ControlLabel className="left-aligned" style={{marginTop: "15px"}}>Email</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.email}
                            placeholder="Enter Email"
                            onChange={this.handleEmail}/>
                        <FormControl.Feedback />
                        <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}>
                        <ControlLabel className="left-aligned" style={{marginTop: "15px"}}>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            placeholder="Enter Password"
                            onChange={this.handleChange}/>
                        <FormControl.Feedback />
                        <HelpBlock className="left-aligned">Password must be longer than 8 characters.</HelpBlock>
                    </FormGroup>
                    <div className="submit-container">
                    <Link to="/edit"><Button bsSize="large" className="submit-signup" onClick={this.submitUser}>Submit</Button></Link>
                    </div>
                </form>
            </div>
      </div>
    );
  }
}