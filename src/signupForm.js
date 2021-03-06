import React, { Component } from "react";
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel,} from 'react-bootstrap'
import './signup.css';


export default class SignUpForm extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            value: '',
            email: ''
        };
      }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 5) return 'success';
        else if (length > 0) return 'error';
        return null;
    }
    
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
    handleEmail(e) {
        this.setState({ email: e.target.value });
      }

  render() {
    return (
        <div className="img-container">
            <form className="form">
            <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}>
            <ControlLabel>Email</ControlLabel>
            <FormControl
                type="text"
                value={this.state.email}
                placeholder="Enter Email"
                onChange={this.handleEmail}/>
            <FormControl.Feedback />
            <FormControl
                type="password"
                value={this.state.value}
                placeholder="Enter Password"
                onChange={this.handleChange}/>
            <FormControl.Feedback />
            <HelpBlock>Password must be longer than 5 characters.</HelpBlock>
            </FormGroup>
        </form>
      </div>
    );
  }
}