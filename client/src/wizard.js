import React, { Component } from "react";
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import './signup.css';


export default class Wizard extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
    
        this.state = {
            value: '',
            email: '',
            name: ''
        };
      }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 8) return 'success';
        else if (length > 0) return 'error';
        return null;
    }
    
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
    handleEmail(e) {
        this.setState({ email: e.target.value });
      }

    handleName(e) {
        this.setState({ name: e.target.value });
    }

  render() {
    return (
        <div className="img-container">
            <h1 className="formTitle">Get Started.</h1>
            <form className="form">
                    <ControlLabel className="left-aligned">Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Enter Email"
                        onChange={this.handleName}/>
                    <FormControl.Feedback />
                    <ControlLabel className="left-aligned">Email</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.email}
                        placeholder="Enter Email"
                        onChange={this.handleEmail}/>
                    <FormControl.Feedback />
                    <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}>
                    <ControlLabel className="left-aligned">Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={this.state.value}
                        placeholder="Enter Password"
                        onChange={this.handleChange}
                        validationState/>
                    <FormControl.Feedback />
                    <HelpBlock className="left-aligned">Password must be longer than 8 characters.</HelpBlock>
                </FormGroup>
                <div className="submit-container">
                <Button bsSize="large" className="submit">Submit</Button>
                </div>
            </form>
      </div>
    );
  }
}