import ReactDOM from 'react-dom'
import './dashboard.css'
import {Link, Redirect} from 'react-router-dom'
import React, { Component } from "react";
import {HelpBlock, Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import './signup.css';
import './wizard.css';
import SignUpForm from './signupform';
import axios from 'axios';
import { resolve } from 'url';
axios.defaults.withCredentials = true;


var surround = {
    display: "inline-block",
    alignItems: "left",
    marginTop: "1em"
}

var close = {
    height: "2em"
}

var text = {
    fontSize: "1.5em",
    textAlign: "center",
    padding: "15px",
    paddingTop: "0"
}

var name = {
    width: "11em",
    marginRight: "1em",
    marginLeft: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var age = {
    width: "4em",
    marginRight: "1em",
    marginLeft: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var city = {
    width: "8em",
    marginRight: "1em",
    marginLeft: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var state = {
    width: "8em",
    marginRight: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var label = {
    marginLeft: "1em",
    color: "#9a9a9a",
    fontWeight: "300"
}

var surround2 = {
    display: "inline-block",
    alignItems: "left",
    verticalAlign: "top",
    marginTop: "1em"
}

var surround3 = {
    display: "inline-block",
    alignItems: "left",
    verticalAlign: "top",
    marginTop: "1em"
}

var institution = {
    width: "35em",
    marginLeft: "1em",
    marginRight: "1em",
    border: "1px solid #e3e3e3"
}

var major = {
    width: "17em",
    marginRight: "1em",
    marginLeft: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var degree = {
    width: "17em",
    margin: "0 auto",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var company = {
    width: "17em",
    marginLeft: "1em",
    marginRight: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var position = {
    width: "17em",
    marginRight: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var industry = {
    width: "17em",
    marginLeft: "1em",
    marginRight: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"
}

var about = {
    width: "35em",
    marginLeft: "1em",
    marginRight: "1em",
    marginBottom: "1em",
    border: "1px solid #e3e3e3"

}

var blueButton = {
    backgroundColor: "dodgerblue"
}

var blue = {
    color: "dodgerblue"
}


class EditProfile extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.getProfile = this.getProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
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
        this.submitUserProfile = this.submitUserProfile.bind(this);
        //this.updateUsername = this.updateUsername.bind(this);
        this.submitTest = this.submitTest.bind(this);
    
        this.state = {
            numberTried: 0,
            retrieved: false,
            profile: null,
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
    

    getProfile() {
        //sleep(1000);
        if (this.props.username) {
            axios.get('/users/' + this.props.username)
            .then(res => {
                //console.log(res.data);
                return res.data;
            })
            .then(data => {
                this.updateProfile(data);
                //console.log(data);
                resolve(true);
            })
            .catch(err => {
                console.log(this.state.numberTried);
                this.setState((prevState) => {
                    return {numberTried: prevState.numberTried + 1}
                })
                console.log(err);
            });
        }
        else {
            axios.get('/users/profile')
            .then(res => {
                //console.log(res.data);
                return res.data;
            })
            .then(data => {
                this.updateProfile(data);
                //console.log(data);
                resolve(true);
            })
            .catch(err => {
                console.log(this.state.numberTried);
                this.setState((prevState) => {
                    return {numberTried: prevState.numberTried + 1}
                })
                console.log(err);
            });
        }
    }

    updateProfile(data) {
        console.log("updating profile page");
        console.log(data);
        this.setState({profile: data, retrieved: true});
        this.setState({
            name: this.state.profile.name,
            age: this.state.profile.age,
            city: this.state.profile.location.city,
            state: this.state.profile.location.state,
            institution: this.state.profile.education[0].institution,
            major: this.state.profile.education[0].major,
            degree: this.state.profile.education[0].degree,
            company: this.state.profile.experience[0].company,
            position: this.state.profile.experience[0].position,
            about: this.state.profile.about.about
            });
        console.log(this.state.profile);
        return this.state.numberTried;
    }
    
    // updateUsername(username) {
    //     this.setState({username: username});
    //     console.log(this.state.username);
    // }
    
    submitUserProfile() {
        //let currentComponent = this;
        axios.get('/users/getusername')
        .then((res) => {
            let username = res.data.username;
            console.log(username);
            //currentComponent.setState({username: res.data.username});
            return (username);
        })
        .then((username) => {
            this.submitTest(username);
        })
        //.then(this.submitTest())
        .catch(function (err) {
            console.log(err);
        });
    }
    
    submitTest(username) {
        //this.getUserName();
        console.log(username);
        axios.post('/users/updateprofile', {
            username: username,
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
    if (this.state.retrieved && this.state.profile != null) {
        if (this.state.profile.mentor == true) {
            return (
                <div className="edit-card">
                    <h4 className="dashboard-title-offset" style={blueButton}>Edit Profile</h4>
                    <Form>
                            <div className="surround" style={surround}>
                                <ControlLabel style={label}>Name</ControlLabel>
                                <FormControl style={name}
                                    type="text"
                                    value={this.state.name}
                                    placeholder="First and Last Name"
                                    onChange={this.handleName}/>
                                <FormControl.Feedback />
                            </div>
                            <div className="surround" style={surround}>
                                <ControlLabel className="left-aligned" style={label}>Age</ControlLabel>
                                <FormControl style={age}
                                    type="text"
                                    value={this.state.age}
                                    placeholder=""
                                    onChange={this.handleAge}/>
                                <FormControl.Feedback />
                            </div>
                            <div className="surround" style={surround}>
                            <ControlLabel className="left-aligned" style={label}>Current Location</ControlLabel>
                            <FormControl style={city}
                                type="text"
                                value={this.state.city}
                                placeholder="City"
                                onChange={this.handleCity}/>
                            <FormControl.Feedback />
                            </div>
                            <div className="surround-down" style={surround2}>
                            {/* <ControlLabel className="left-aligned" style={label}></ControlLabel> */}
                            <FormControl style={state} componentClass="select" onChange={this.handleState}> 
                                <option value="" disabled selected>State</option>
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
                            </div>
                            <div className="surround" style={surround}>
                                {/* <FormGroup> */}
                                <ControlLabel className="left-aligned" style={label}>Education</ControlLabel>
                                <FormControl style={institution}
                                    type="text"
                                    value={this.state.institution}
                                    placeholder="Institution"
                                    onChange={this.handleInstitution}/>
                                <FormControl.Feedback />
                            </div>
                            <div className="surround" style={surround}>
                            {/* <ControlLabel className="left-aligned" style={label}></ControlLabel> */}
                            <FormControl style={major}
                                type="text"
                                value={this.state.major}
                                placeholder="Major"
                                onChange={this.handleMajor}/>
                            <FormControl.Feedback />
                            </div>
                            <div className="surround" style={surround3}>
                            {/* <ControlLabel className="left-aligned" style={label}></ControlLabel> */}
                            <FormControl style={degree}
                                type="text"
                                value={this.state.degree}
                                placeholder="Degree"
                                onChange={this.handleDegree}/>
                            <FormControl.Feedback />
                            {/* </FormGroup> */}
                        </div>
        
                        <div className="surround" style={surround}>
                        <ControlLabel className="left-aligned" style={label}>Current or Most Recent Job</ControlLabel>
                        <FormControl style={company}
                                type="text"
                                value={this.state.company}
                                placeholder="Company"
                                onChange={this.handleCompany}/>
                        <FormControl.Feedback />
                        </div>
                        <div className="surround" style={surround}>
                        <FormControl style={position}
                                type="text"
                                value={this.state.position}
                                placeholder="Position"
                                onChange={this.handlePosition}/>
                        <FormControl.Feedback />
                        </div>
                        {/* <hr style={{marginTop: '30px', borderColor: '#3CB54A'}} /> */}
        
                        <div className="surround" style={surround}>
                        <ControlLabel className="left-aligned" style={label}>What Industry Do You Currently Work In?</ControlLabel>
                            <FormControl componentClass="select" onChange={this.handleIndustry} style={industry}>
                                    <option value="" disabled selected style={{color: "lightgrey"}}>Current Industry</option>
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
                                    <option value="Journalism">Journalism</option>
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
                            </div>
        
                        <div className="surround" style={surround}>
                            <ControlLabel className="left-aligned" style={label}>Where Are You Looking to Transition Into?</ControlLabel>
                            <FormControl componentClass="select" placeholder="State" onChange={this.handleTargetIndustry} style={industry}>
                                    <option value="" disabled selected style={{color: "lightgrey"}}>New Industry</option>
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
                                    <option value="Journalism">Journalism</option>
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
                            </div>
        
                        <div className="surround" style={surround}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel className="left-aligned" style={label}>Tell us about yourself and your career journey.</ControlLabel>
                                <FormControl 
                                componentClass="textarea" 
                                placeholder=""
                                value={this.state.about}
                                onChange={this.handleAbout}
                                style={about}/>
                                <HelpBlock className="left-aligned" style={{margin: "0"}}>This will appear on your profile for others to view.  You may choose to talk about whatever you like.</HelpBlock>
                            </FormGroup>
                        </div>
                        </Form>
                        <Link to="/profile"><Button bsSize="large" className="submit-signup-blue" onClick={this.submitUserProfile} style={{marginTop: "1em", float: "right"}}>Submit</Button></Link>
              </div>
        
            )
        }


        else {
            return (
            <div className="edit-card">
                <h4 className="dashboard-title-offset">Edit Profile</h4>
                <Form>
                        <div className="surround" style={surround}>
                            <ControlLabel style={label}>Name</ControlLabel>
                            <FormControl style={name}
                                type="text"
                                value={this.state.name}
                                placeholder="First and Last Name"
                                onChange={this.handleName}/>
                            <FormControl.Feedback />
                        </div>
                        <div className="surround" style={surround}>
                            <ControlLabel className="left-aligned" style={label}>Age</ControlLabel>
                            <FormControl style={age}
                                type="text"
                                value={this.state.age}
                                placeholder=""
                                onChange={this.handleAge}/>
                            <FormControl.Feedback />
                        </div>
                        <div className="surround" style={surround}>
                        <ControlLabel className="left-aligned" style={label}>Current Location</ControlLabel>
                        <FormControl style={city}
                            type="text"
                            value={this.state.city}
                            placeholder="City"
                            onChange={this.handleCity}/>
                        <FormControl.Feedback />
                        </div>
                        <div className="surround-down" style={surround2}>
                        {/* <ControlLabel className="left-aligned" style={label}></ControlLabel> */}
                        <FormControl style={state} componentClass="select" onChange={this.handleState}> 
                            <option value="" disabled selected>State</option>
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
                        </div>
                        <div className="surround" style={surround}>
                            {/* <FormGroup> */}
                            <ControlLabel className="left-aligned" style={label}>Education</ControlLabel>
                            <FormControl style={institution}
                                type="text"
                                value={this.state.institution}
                                placeholder="Institution"
                                onChange={this.handleInstitution}/>
                            <FormControl.Feedback />
                        </div>
                        <div className="surround" style={surround}>
                        {/* <ControlLabel className="left-aligned" style={label}></ControlLabel> */}
                        <FormControl style={major}
                            type="text"
                            value={this.state.major}
                            placeholder="Major"
                            onChange={this.handleMajor}/>
                        <FormControl.Feedback />
                        </div>
                        <div className="surround" style={surround3}>
                        {/* <ControlLabel className="left-aligned" style={label}></ControlLabel> */}
                        <FormControl style={degree}
                            type="text"
                            value={this.state.degree}
                            placeholder="Degree"
                            onChange={this.handleDegree}/>
                        <FormControl.Feedback />
                        {/* </FormGroup> */}
                    </div>

                    <div className="surround" style={surround}>
                    <ControlLabel className="left-aligned" style={label}>Current or Most Recent Job</ControlLabel>
                    <FormControl style={company}
                            type="text"
                            value={this.state.company}
                            placeholder="Company"
                            onChange={this.handleCompany}/>
                    <FormControl.Feedback />
                    </div>
                    <div className="surround" style={surround}>
                    <FormControl style={position}
                            type="text"
                            value={this.state.position}
                            placeholder="Position"
                            onChange={this.handlePosition}/>
                    <FormControl.Feedback />
                    </div>
                    {/* <hr style={{marginTop: '30px', borderColor: '#3CB54A'}} /> */}

                    <div className="surround" style={surround}>
                    <ControlLabel className="left-aligned" style={label}>What Industry Do You Currently Work In?</ControlLabel>
                        <FormControl componentClass="select" onChange={this.handleIndustry} style={industry}>
                                <option value="" disabled selected style={{color: "lightgrey"}}>Current Industry</option>
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
                                <option value="Journalism">Journalism</option>
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
                        </div>

                    <div className="surround" style={surround}>
                        <ControlLabel className="left-aligned" style={label}>Where Are You Looking to Transition Into?</ControlLabel>
                        <FormControl componentClass="select" placeholder="State" onChange={this.handleTargetIndustry} style={industry}>
                                <option value="" disabled selected style={{color: "lightgrey"}}>New Industry</option>
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
                                <option value="Journalism">Journalism</option>
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
                        </div>

                    <div className="surround" style={surround}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel className="left-aligned" style={label}>Tell us about yourself and your career journey.</ControlLabel>
                            <FormControl 
                            componentClass="textarea" 
                            placeholder=""
                            value={this.state.about}
                            onChange={this.handleAbout}
                            style={about}/>
                            <HelpBlock className="left-aligned" style={{margin: "0"}}>This will appear on your profile for others to view.  You may choose to talk about whatever you like.</HelpBlock>
                        </FormGroup>
                    </div>
                    </Form>
                    <Link to="/profile"><Button bsSize="large" className="submit-signup" onClick={this.submitUserProfile} style={{marginTop: "1em", float: "right"}}>Submit</Button></Link>
        </div>

        )
        }

    }
    else {
        //sleep(1000);
        if (this.state.numberTried <= 5) {
            this.getProfile();
            return null;
        }
        else {
            return(<Redirect to="/login"/>) 
        }
    }
  }

}

export default EditProfile;

