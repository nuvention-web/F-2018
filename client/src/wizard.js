import React, { Component } from "react";
import Nav from './nav'
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import './signup.css';
import './wizard.css';
import SignUpForm from './signupform';
import StepZilla from 'react-stepzilla';
import axios from 'axios';

const steps = [
    {name:'About', component: <SignUpForm />},
    {name:'about2', component: <SignUpForm />}
]

export default class Wizard extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleMajor = this.handleMajor.bind(this);
        this.handleDegree = this.handleDegree.bind(this);
        this.handleInstitution = this.handleInstitution.bind(this);
        this.handleCompany = this.handleCompany.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.handleIndustry = this.handleIndustry.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleTargetIndustry = this.handleTargetIndustry.bind(this);
        this.handleWhyIndustry = this.handleWhyIndustry.bind(this);
        this.handleTransitioningQuestions = this.handleTransitioningQuestions.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.submitTest = this.submitTest.bind(this);
    
        this.state = {
            name: '',
            age: '',
            about: '',
            major: '',
            degree: '',
            institution: '',
            company: '',
            position: '',
            industry: '',
            city: '',
            state: '',
            targetIndustry: '',
            whyIndustry: '',
            transitioningQuestions: '',
        };
      }

    // getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 8) return 'success';
    //     else if (length > 0) return 'error';
    //     return null;
    // }
    
  
    handleName(e) {
      this.setState({ name: e.target.value });
    }
    handleAge(e) {
        this.setState({ age: e.target.value });
      }

    handleMajor(e) {
        this.setState({ major: e.target.value });
    }

    handleDegree(e) {
        this.setState({ degree: e.target.value });
    }

    handleInstitution(e) {
        this.setState({ institution: e.target.value });
    }

    handleCompany(e) {
        this.setState({ company: e.target.value });
    }

    handlePosition(e) {
        this.setState({ position: e.target.value });
    }

    handleIndustry(e) {
        this.setState({ industry: e.target.value });
    }

    handleCity(e) {
        this.setState({ city: e.target.value });
    }

    handleState(e) {
        this.setState({ state: e.target.value });
    }

    handleTargetIndustry(e) {
        this.setState({ targetIndustry: e.target.value });
    }

    handleWhyIndustry(e) {
        this.setState({ whyIndustry: e.target.value });
    }

    handleTransitioningQuestions(e) {
        this.setState({ transitioningQuestions: e.target.value });
    }

    getUserName() {
        axios.get('/users/getusername')
        .then(function (res) {
            console.log(res.data.username);
            return res.data.username;
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    submitTest() {
        axios.post('/users/addprofile', {
            username: this.getUserName(),
            name: this.state.name,
            age: this.state.age,
            location: {
                city: this.state.city,
                state: this.state.state
            },
            education: [{
                major: this.state.major,
                degree: this.state.degree,
                institution: this.state.institution
            }],
            experience: [{
                company: this.state.company,
                position: this.state.position
            }],
            industries: {
                currentindustry: this.state.industry,
                targetindustry: this.state.targetIndustry
            },
            about: {
                about: this.state.about,
                whyindustry: this.state.whyIndustry,
                transitioningquestions: this.state.transitioningQuestions
            },
            mentor: true
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
            <h1 className="wizardTitle">Tell Us a Bit About You.</h1>
            <form className="form">
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="First and Last Name"
                        onChange={this.handleName}/>
                    <FormControl.Feedback />
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Age</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.age}
                        placeholder=""
                        onChange={this.handleAge}/>
                    <FormControl.Feedback />
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Current Location</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.city}
                        placeholder=""
                        onChange={this.handleCity}/>
                    <FormControl.Feedback />
                    <FormControl componentClass="select" placeholder="State" onChange={this.handleState}>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusets">Massachusets</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </FormControl>
                <FormGroup>
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Education</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.institution}
                        placeholder="Institution"
                        onChange={this.handleInstitution}/>
                    <FormControl.Feedback />
                    <FormControl
                        type="text"
                        value={this.state.major}
                        placeholder="Major"
                        onChange={this.handleMajor}/>
                    <FormControl.Feedback />
                    <FormControl
                        type="text"
                        value={this.state.degree}
                        placeholder="Degree"
                        onChange={this.handleDegree}/>
                    <FormControl.Feedback />
                </FormGroup>

                <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Current or Most Recent Job</ControlLabel>
                <FormControl
                        type="text"
                        value={this.state.company}
                        placeholder="Company"
                        onChange={this.handleCompany}/>
                <FormControl.Feedback />
                <FormControl
                        type="text"
                        value={this.state.position}
                        placeholder="Position"
                        onChange={this.handlePosition}/>
                <FormControl.Feedback />
                
                <hr style={{marginTop: '30px', borderColor: '#3CB54A'}} />



                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Tell us about yourself.</ControlLabel>
                    <FormControl 
                    componentClass="textarea" 
                    placeholder=""/>
                </FormGroup>
                <HelpBlock className="left-aligned" style={{margin: "0"}}>This will appear on your profile for others to view.  You may choose to talk about whatver you like.</HelpBlock>

                <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Why are you looking to change careers?  What are your motivations and fears about doing so?</ControlLabel>
                <FormControl 
                componentClass="textarea" 
                placeholder="textarea"/>

                <div className="submit-container">
                <Button bsSize="large" className="submit" onClick={this.submitTest}>Submit</Button>
                <Button bsSize="large" className="submit" onClick={this.getUserName}>Submit</Button>
                </div>
            </form>
      </div>
    );
  }
}