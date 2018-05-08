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
        this.handleAbout = this.handleAbout.bind(this);
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

    handleAbout(e) {
        this.setState({ about: e.target.value });
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

// Accounting
// Airlines/Aviation
// Alternative Dispute Resolution
// Alternative Medicine
// Animation
// Apparel & Fashion
// Architecture & Planning
// Arts & Crafts
// Automotive
// Aviation & Aerospace
// Banking
// Biotechnology
// Broadcast Media
// Building Materials
// Business Supplies & Equipment
// Capital Markets
// Chemicals
// Civic & Social Organization
// Civil Engineering
// Commercial Real Estate
// Computer & Network Security
// Computer Games
// Computer Hardware
// Computer Networking
// Computer Software
// Construction
// Consumer Electronics
// Consumer Goods
// Consumer Services
// Cosmetics
// Dairy
// Defense & Space
// Design
// Education Management
// E-learning
// Electrical & Electronic Manufacturing
// Entertainment
// Environmental Services
// Events Services
// Executive Office
// Facilities Services
// Farming
// Financial Services
// Fine Art
// Fishery
// Food & Beverages
// Food Production
// Fundraising
// Furniture
// Gambling & Casinos
// Glass, Ceramics & Concrete
// Government Administration
// Government Relations
// Graphic Design
// Health, Wellness & Fitness
// Higher Education
// Hospital & Health Care
// Hospitality
// Human Resources
// Import & Export
// Individual & Family Services
// Industrial Automation
// Information Services
// Information Technology & Services
// Insurance
// International Affairs
// International Trade & Development
// Internet
// Investment Banking/Venture
// Investment Management
// Judiciary
// Law Enforcement
// Law Practice
// Legal Services
// Legislative Office
// Leisure & Travel
// Libraries
// Logistics & Supply Chain
// Luxury Goods & Jewelry
// Machinery
// Management Consulting
// Maritime
// Marketing & Advertising
// Market Research
// Mechanical or Industrial Engineering
// Media Production
// Medical Device
// Medical Practice
// Mental Health Care
// Military
// Mining & Metals
// Motion Pictures & Film
// Museums & Institutions
// Music
// Nanotechnology
// Newspapers
// Nonprofit Organization Management
// Oil & Energy
// Online Publishing
// Outsourcing/Offshoring
// Package/Freight Delivery
// Packaging & Containers
// Paper & Forest Products
// Performing Arts
// Pharmaceuticals
// Philanthropy
// Photography
// Plastics
// Political Organization
// Primary/Secondary Education
// Printing
// Professional Training
// Program Development
// Public Policy
// Public Relations
// Public Safety
// Publishing
// Railroad Manufacture
// Ranching
// Real Estate
// Recreational
// Facilities & Services
// Religious Institutions
// Renewables & Environment
// Research
// Restaurants
// Retail
// Security & Investigations
// Semiconductors
// Shipbuilding
// Sporting Goods
// Sports
// Staffing & Recruiting
// Supermarkets
// Telecommunications
// Textiles
// Think Tanks
// Tobacco
// Translation & Localization
// Transportation/Trucking/Railroad
// Utilities
// Venture Capital
// Veterinary
// Warehousing
// Wholesale
// Wine & Spirits
// Wireless
// Writing & Editing
    example() {
        console.log(this.state)
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
            mentor: false
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
                        placeholder="City"
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

                <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>What Industry Do You Currently Work In?</ControlLabel>
                <FormControl componentClass="select" placeholder="State" onChange={this.handleIndustry}>
                        <option value="Accounting">Accounting</option>
                        <option value="Airlines/Aviation">Airlines/Aviation</option>
                        <option value="Alternative Dispute Resolution">Alternative Dispute Resolution</option>
                        <option value="Alternative Medicine">Alternative Medicine</option>
                        <option value="Animation">Animation</option>
                        <option value="Apparel & Fashion">Apparel & Fashion</option>
                        <option value="Architecture & Planning">Architecture & Planning</option>
                        <option value="Arts & Crafts">Arts & Crafts</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Aviation & Aerospace">Aviation & Aerospace</option>
                        <option value="Banking">Banking</option>
                        <option value="Biotechnology">Biotechnology</option>
                        <option value="Broadcast Media">Broadcast Media</option>
                        <option value="Building Materials">Building Materials</option>
                        <option value="Business Supplies & Equipment">Business Supplies & Equipment</option>
                        <option value="Capital Markets">Capital Markets</option>
                        <option value="Chemicals">Chemicals</option>
                        <option value="Civic & Social Organization">Civic & Social Organization</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Commercial Real Estate">Commercial Real Estate</option>
                        <option value="Computer & Network Security">Computer & Network Security</option>
                        <option value="Computer Games">Computer Games</option>
                        <option value="Computer Hardware">Computer Hardware</option>
                        <option value="Computer Networking">Computer Networking</option>
                        <option value="Computer Software">Computer Software</option>
                        <option value="Construction">Construction</option>
                        <option value="Consumer Electronics">Consumer Electronics</option>
                        <option value="Consumer Goods">Consumer Goods</option>
                        <option value="Consumer Services">Consumer Services</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Defense & Space">Defense & Space</option>
                        <option value="Design">Design</option>
                        <option value="Education Management">Education Management</option>
                        <option value="E-learning">E-learning</option>
                        <option value="Electrical & Electronic Manufacturing">Electrical & Electronic Manufacturing</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Environmental Services">Environmental Services</option>
                        <option value="Events Services">Events Services</option>
                        <option value="Executive Office">Executive Office</option>
                        <option value="Facilities Services">Facilities Services</option>
                        <option value="Farming">Farming</option>
                        <option value="Financial Services">Financial Services</option>
                        <option value="Fine Art">Fine Art</option>
                        <option value="Fishery">Fishery</option>
                        <option value="Food & Beverages">Food & Beverages</option>
                        <option value="Food Production">Food Production</option>
                        <option value="Fundraising">Fundraising</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Gambling & Casinos">Gambling & Casinos</option>
                        <option value="Glass, Ceramics & Concrete">Glass, Ceramics & Concrete</option>
                        <option value="Government Administration">Government Administration</option>
                        <option value="Government Relations">Government Relations</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Health, Wellness & Fitness">Health, Wellness & Fitness</option>
                        <option value="Higher Education">Higher Education</option>
                        <option value="Hospital & Health Care">Hospital & Health Care</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Import & Export">Import & Export</option>
                        <option value="Individual & Family Services">Individual & Family Services</option>
                        <option value="Industrial Automation">Industrial Automation</option>
                        <option value="Information Services">Information Services</option>
                        <option value="Information Technology & Services">Information Technology & Services</option>
                        <option value="Insurance">Insurance</option>
                        <option value="International Affairs">International Affairs</option>
                        <option value="International Trade & Development">International Trade & Development</option>
                        <option value="Internet">Internet</option>
                        <option value="Investment Banking/Venture">Investment Banking/Venture</option>
                        <option value="Investment Management">Investment Management</option>
                        <option value="Judiciary">Judiciary</option>
                        <option value="Law Enforcement">Law Enforcement</option>
                        <option value="Law Practice">Law Practice</option>
                        <option value="Legal Services">Legal Services</option>
                        <option value="Legislative Office">Legislative Office</option>
                        <option value="Leisure & Travel">Leisure & Travel</option>
                        <option value="Libraries">Libraries</option>
                        <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                        <option value="Luxury Goods & Jewelry">Luxury Goods & Jewelry</option>
                        <option value="Machinery">Machinery</option>
                        <option value="Management Consulting">Management Consulting</option>
                        <option value="Maritime">Maritime</option>
                        <option value="Marketing & Advertising">Marketing & Advertising</option>
                        <option value="Market Research">Market Research</option>
                        <option value="Mechanical or Industrial Engineering">Mechanical or Industrial Engineering</option>
                        <option value="Media Production">Media Production</option>
                        <option value="Medical Device">Medical Device</option>
                        <option value="Medical Practice">Medical Practice</option>
                        <option value="Mental Health Care">Mental Health Care</option>
                        <option value="Military">Military</option>
                        <option value="Mining & Metals">Mining & Metals</option>
                        <option value="Motion Pictures & Film">Motion Pictures & Film</option>
                        <option value="Museums & Institutions">Museums & Institutions</option>
                        <option value="Music">Music</option>
                        <option value="Nanotechnology">Nanotechnology</option>
                        <option value="Newspapers">Newspapers</option>
                        <option value="Nonprofit Organization Management">Nonprofit Organization Management</option>
                        <option value="Oil & Energy">Oil & Energy</option>
                        <option value="Online Publishing">Online Publishing</option>
                        <option value="Outsourcing/Offshoring">Outsourcing/Offshoring</option>
                        <option value="Package/Freight Delivery">Package/Freight Delivery</option>
                        <option value="Packaging & Containers">Packaging & Containers</option>
                        <option value="Paper & Forest Products">Paper & Forest Products</option>
                        <option value="Performing Arts">Performing Arts</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Philanthropy">Philanthropy</option>
                        <option value="Photography">Photography</option>
                        <option value="Plastics">Plastics</option>
                        <option value="Political Organization">Political Organization</option>
                        <option value="Primary/Secondary Education">Primary/Secondary Education</option>
                        <option value="Printing">Printing</option>
                        <option value="Professional Training">Professional Training</option>
                        <option value="Program Development">Program Development</option>
                        <option value="Public Policy">Public Policy</option>
                        <option value="Public Relations">Public Relations</option>
                        <option value="Public Safety">Public Safety</option>
                        <option value="Publishing">Publishing</option>
                        <option value="Railroad Manufacture">Railroad Manufacture</option>
                        <option value="Ranching">Ranching</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Recreational">Recreational</option>
                        <option value="Facilities & Services">Facilities & Services</option>
                        <option value="Religious Institutions">Religious Institutions</option>
                        <option value="Renewables & Environment">Renewables & Environment</option>
                        <option value="Research">Research</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Retail">Retail</option>
                        <option value="Security & Investigations">Security & Investigations</option>
                        <option value="Semiconductors">Semiconductors</option>
                        <option value="Shipbuilding">Shipbuilding</option>
                        <option value="Sporting Goods">Sporting Goods</option>
                        <option value="Sports">Sports</option>
                        <option value="Staffing & Recruiting">Staffing & Recruiting</option>
                        <option value="Supermarkets">Supermarkets</option>
                        <option value="Telecommunications">Telecommunications</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Think Tanks">Think Tanks</option>
                        <option value="Tobacco">Tobacco</option>
                        <option value="Translation & Localization">Translation & Localization</option>
                        <option value="Transportation/Trucking/Railroad">Transportation/Trucking/Railroad</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Venture Capital">Venture Capital</option>
                        <option value="Veterinary">Veterinary</option>
                        <option value="Warehousing">Warehousing</option>
                        <option value="Wholesale">Wholesale</option>
                        <option value="Wine & Spirits">Wine & Spirits</option>
                        <option value="Wireless">Wireless</option>
                        <option value="Writing & Editing">Writing & Editing</option>
                    </FormControl>


                <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>What Industry Are You Looking to Transition Into?</ControlLabel>
                <FormControl componentClass="select" placeholder="State" onChange={this.handleTargetIndustry}>
                        <option value="Accounting">Accounting</option>
                        <option value="Airlines/Aviation">Airlines/Aviation</option>
                        <option value="Alternative Dispute Resolution">Alternative Dispute Resolution</option>
                        <option value="Alternative Medicine">Alternative Medicine</option>
                        <option value="Animation">Animation</option>
                        <option value="Apparel & Fashion">Apparel & Fashion</option>
                        <option value="Architecture & Planning">Architecture & Planning</option>
                        <option value="Arts & Crafts">Arts & Crafts</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Aviation & Aerospace">Aviation & Aerospace</option>
                        <option value="Banking">Banking</option>
                        <option value="Biotechnology">Biotechnology</option>
                        <option value="Broadcast Media">Broadcast Media</option>
                        <option value="Building Materials">Building Materials</option>
                        <option value="Business Supplies & Equipment">Business Supplies & Equipment</option>
                        <option value="Capital Markets">Capital Markets</option>
                        <option value="Chemicals">Chemicals</option>
                        <option value="Civic & Social Organization">Civic & Social Organization</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Commercial Real Estate">Commercial Real Estate</option>
                        <option value="Computer & Network Security">Computer & Network Security</option>
                        <option value="Computer Games">Computer Games</option>
                        <option value="Computer Hardware">Computer Hardware</option>
                        <option value="Computer Networking">Computer Networking</option>
                        <option value="Computer Software">Computer Software</option>
                        <option value="Construction">Construction</option>
                        <option value="Consumer Electronics">Consumer Electronics</option>
                        <option value="Consumer Goods">Consumer Goods</option>
                        <option value="Consumer Services">Consumer Services</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Defense & Space">Defense & Space</option>
                        <option value="Design">Design</option>
                        <option value="Education Management">Education Management</option>
                        <option value="E-learning">E-learning</option>
                        <option value="Electrical & Electronic Manufacturing">Electrical & Electronic Manufacturing</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Environmental Services">Environmental Services</option>
                        <option value="Events Services">Events Services</option>
                        <option value="Executive Office">Executive Office</option>
                        <option value="Facilities Services">Facilities Services</option>
                        <option value="Farming">Farming</option>
                        <option value="Financial Services">Financial Services</option>
                        <option value="Fine Art">Fine Art</option>
                        <option value="Fishery">Fishery</option>
                        <option value="Food & Beverages">Food & Beverages</option>
                        <option value="Food Production">Food Production</option>
                        <option value="Fundraising">Fundraising</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Gambling & Casinos">Gambling & Casinos</option>
                        <option value="Glass, Ceramics & Concrete">Glass, Ceramics & Concrete</option>
                        <option value="Government Administration">Government Administration</option>
                        <option value="Government Relations">Government Relations</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Health, Wellness & Fitness">Health, Wellness & Fitness</option>
                        <option value="Higher Education">Higher Education</option>
                        <option value="Hospital & Health Care">Hospital & Health Care</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Import & Export">Import & Export</option>
                        <option value="Individual & Family Services">Individual & Family Services</option>
                        <option value="Industrial Automation">Industrial Automation</option>
                        <option value="Information Services">Information Services</option>
                        <option value="Information Technology & Services">Information Technology & Services</option>
                        <option value="Insurance">Insurance</option>
                        <option value="International Affairs">International Affairs</option>
                        <option value="International Trade & Development">International Trade & Development</option>
                        <option value="Internet">Internet</option>
                        <option value="Investment Banking/Venture">Investment Banking/Venture</option>
                        <option value="Investment Management">Investment Management</option>
                        <option value="Judiciary">Judiciary</option>
                        <option value="Law Enforcement">Law Enforcement</option>
                        <option value="Law Practice">Law Practice</option>
                        <option value="Legal Services">Legal Services</option>
                        <option value="Legislative Office">Legislative Office</option>
                        <option value="Leisure & Travel">Leisure & Travel</option>
                        <option value="Libraries">Libraries</option>
                        <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                        <option value="Luxury Goods & Jewelry">Luxury Goods & Jewelry</option>
                        <option value="Machinery">Machinery</option>
                        <option value="Management Consulting">Management Consulting</option>
                        <option value="Maritime">Maritime</option>
                        <option value="Marketing & Advertising">Marketing & Advertising</option>
                        <option value="Market Research">Market Research</option>
                        <option value="Mechanical or Industrial Engineering">Mechanical or Industrial Engineering</option>
                        <option value="Media Production">Media Production</option>
                        <option value="Medical Device">Medical Device</option>
                        <option value="Medical Practice">Medical Practice</option>
                        <option value="Mental Health Care">Mental Health Care</option>
                        <option value="Military">Military</option>
                        <option value="Mining & Metals">Mining & Metals</option>
                        <option value="Motion Pictures & Film">Motion Pictures & Film</option>
                        <option value="Museums & Institutions">Museums & Institutions</option>
                        <option value="Music">Music</option>
                        <option value="Nanotechnology">Nanotechnology</option>
                        <option value="Newspapers">Newspapers</option>
                        <option value="Nonprofit Organization Management">Nonprofit Organization Management</option>
                        <option value="Oil & Energy">Oil & Energy</option>
                        <option value="Online Publishing">Online Publishing</option>
                        <option value="Outsourcing/Offshoring">Outsourcing/Offshoring</option>
                        <option value="Package/Freight Delivery">Package/Freight Delivery</option>
                        <option value="Packaging & Containers">Packaging & Containers</option>
                        <option value="Paper & Forest Products">Paper & Forest Products</option>
                        <option value="Performing Arts">Performing Arts</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Philanthropy">Philanthropy</option>
                        <option value="Photography">Photography</option>
                        <option value="Plastics">Plastics</option>
                        <option value="Political Organization">Political Organization</option>
                        <option value="Primary/Secondary Education">Primary/Secondary Education</option>
                        <option value="Printing">Printing</option>
                        <option value="Professional Training">Professional Training</option>
                        <option value="Program Development">Program Development</option>
                        <option value="Public Policy">Public Policy</option>
                        <option value="Public Relations">Public Relations</option>
                        <option value="Public Safety">Public Safety</option>
                        <option value="Publishing">Publishing</option>
                        <option value="Railroad Manufacture">Railroad Manufacture</option>
                        <option value="Ranching">Ranching</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Recreational">Recreational</option>
                        <option value="Facilities & Services">Facilities & Services</option>
                        <option value="Religious Institutions">Religious Institutions</option>
                        <option value="Renewables & Environment">Renewables & Environment</option>
                        <option value="Research">Research</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Retail">Retail</option>
                        <option value="Security & Investigations">Security & Investigations</option>
                        <option value="Semiconductors">Semiconductors</option>
                        <option value="Shipbuilding">Shipbuilding</option>
                        <option value="Sporting Goods">Sporting Goods</option>
                        <option value="Sports">Sports</option>
                        <option value="Staffing & Recruiting">Staffing & Recruiting</option>
                        <option value="Supermarkets">Supermarkets</option>
                        <option value="Telecommunications">Telecommunications</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Think Tanks">Think Tanks</option>
                        <option value="Tobacco">Tobacco</option>
                        <option value="Translation & Localization">Translation & Localization</option>
                        <option value="Transportation/Trucking/Railroad">Transportation/Trucking/Railroad</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Venture Capital">Venture Capital</option>
                        <option value="Veterinary">Veterinary</option>
                        <option value="Warehousing">Warehousing</option>
                        <option value="Wholesale">Wholesale</option>
                        <option value="Wine & Spirits">Wine & Spirits</option>
                        <option value="Wireless">Wireless</option>
                        <option value="Writing & Editing">Writing & Editing</option>

                    </FormControl>

                <hr style={{marginTop: '30px', borderColor: '#3CB54A'}} />


                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Tell us about yourself.</ControlLabel>
                    <FormControl 
                    componentClass="textarea" 
                    placeholder=""
                    onChange={this.handleAbout}/>
                <HelpBlock className="left-aligned" style={{margin: "0"}}>This will appear on your profile for others to view.  You may choose to talk about whatver you like.</HelpBlock>
                </FormGroup>

                <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>Why are you looking to change careers?  What are your interests, motivations and fears about doing so?</ControlLabel>
                <FormControl 
                componentClass="textarea" 
                placeholder=""
                onChange={this.handleTransitioningQuestions}/>
                <HelpBlock className="left-aligned" style={{margin: "0"}}>This will appear on your profile for others to view.</HelpBlock>

                <ControlLabel className="left-aligned" style={{paddingTop: '15px'}}>What would you like to learn from Monarch's connections?</ControlLabel>
                <FormControl 
                componentClass="textarea" 
                placeholder=""
                onChange={this.handleWhyIndustry}/>
                <HelpBlock className="left-aligned" style={{margin: "0"}}>This will appear on your profile for others to view.</HelpBlock>

                <div className="submit-container">
                <Button bsSize="large" className="submit" onClick={this.submitTest} href="/profile">Submit</Button>
                </div>
            </form>
      </div>
    );
  }
} 