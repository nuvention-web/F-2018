import React, { Component } from "react";
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import './signup.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


var text = {
    fontSize: "18px",
    marginTop: "20px"
}

export default class LoginForm extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.loginUser = this.loginUser.bind(this);
    
        this.state = {
            password: '',
            email: '',
        };
      }
    
  
    handleChange(e) {
      this.setState({ password: e.target.value });
    }
    handleEmail(e) {
        this.setState({ email: e.target.value });
      }



    loginUser() {
        console.log(this.state);
        axios.post('/users/login', {
            logemail: this.state.email,
            logpassword: this.state.password
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
        <div className="img-container">
            <h1 className="formTitle" >Welcome Back.</h1>
            <form className="form">
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Email</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.email}
                        placeholder="Enter Email"
                        onChange={this.handleEmail}/>
                    <FormControl.Feedback />
                    <FormGroup
                controlId="formBasicText">
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="Enter Password"
                        onChange={this.handleChange}/>
                    <FormControl.Feedback />
                </FormGroup>
                <div className="submit-container">
                <Link to="/dashboard"><Button bsSize="large" className="submit" onClick={this.loginUser} href="/edit">Login</Button></Link>
                <hr style={{marginTop: "0"}} />
                <div style={text}> New to Monarch? <a href="/signup" className="signup-forward"> Sign up Here. </a> 
                    <br/>
                    {/* <Button bsSize="large" className="submit" href="/signup">Sign Up</Button> */}
                </div>
                </div>
            </form>
      </div>
    );
  }
}