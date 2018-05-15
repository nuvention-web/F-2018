import React from 'react'
import ReactDOM from 'react-dom'
import './profile.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';
import image from './static/shutterstock_520402930.jpg'
import arrow from './static/right-arrow.png'
// import 'react-vertical-timeline-component/style.min.css';
import axios from 'axios';

// var profileTest = {
//     name: "Drew Parsons",
//     hometown: "Denver, CO",
//     age: "20",
//     major: "Computer Science",
//     degree: "Bachelor's, McCormick School of Engineering",
//     institution: "Northwestern University",
//     company: "Mersive Technologies",
//     position: "Software Development",
//     industry: "Computer Science",
//     targetindustry: "Venture Capital",
//     about: "I am a student at Northwestern university looking to transition from Computer Science to Venture Capital.  I'm interested in this space, especially in tech startup investments.  I'm looking to discuss this with any individuals who have experience with this transition, or venture experience!",
//     transitioningquestions: "Throughout my time at Northwestern, I've become worried that I'm not fully fit to code for the rest of my life.  Venture capital has always interested me because my father is currently employed to Liberty Global doing venture work.  I've always been a tech enthusiast and feel that I can predict and understand new tech trends well, which could make me a very good fit for the venture business and investing in tech startups.",
//     whyIndustry: "I would mostly like to speak to Monarch Connections about what skill's they learned throughout the transition process, and what their first step was in making such a drastic change.  Because I'm studying computer science, it's tough for me to explore my options and learn the skills I need to transition to the venture scene."
// }

var grayed = {
    backgroundColor: "#e6ecf0"
}

var colored = {
    borderColor: "#3CB54A",
    color: "#3CB54A"
}

var graytext = {
    color: "lightgray",
    fontSize: "13px",
    marginTop: "15px"
}

var lineStyle = {
    marginBottom: "0"
}

var bolded = {
    fontWeight: "bold",
    fontStyle: "italic"
}

var school = {
    fontWeight: "bold",
    fontSize: "120%"
}

var school2 = {
    fontStyle: "italic"
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


class ProfileMain extends React.Component {
    constructor(props) {
        super(props);
        this.getProfile = this.getProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);

        this.state = {
            retrieved: false,
            profile: null
        }
    }

    // get the JSON of user profile
    // sample:
    // {
    //     "_id": "5af9323fe2c8a242127e6546",
    //     "username": "amazon",
    //     "name": "amazon",
    //     "age": 1,
    //     "mentor": false,
    //     "__v": 0,
    //     "about": {
    //         "about": "fdsafsd",
    //         "whyindustry": "adsfdsaf",
    //         "transitioningquestions": "dsafaasf"
    //     },
    //     "industries": {
    //         "currentindustry": "Alternative Dispute Resolution",
    //         "targetindustry": "Biotechnology"
    //     },
    //     "experience": [
    //         {
    //             "company": "adsf",
    //             "position": "afsd",
    //             "_id": "5af9323fe2c8a242127e6547"
    //         }
    //     ],
    //     "education": [
    //         {
    //             "major": "dfa",
    //             "degree": "fadsf",
    //             "institution": "s",
    //             "_id": "5af9323fe2c8a242127e6548"
    //         }
    //     ],
    //     "location": {
    //         "city": "1",
    //         "state": "Arizona"
    //     }
    // }


    getProfile() {
        //sleep(1000);
        axios.get('/users/profile')
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .then((data) => {
            this.updateProfile(data);
        })
        .catch(function (err) {
            //this.forceUpdate();
            console.log(err);
        });
    }

    updateProfile(data) {
        this.setState({profile: data, retrieved: true});
    }


    render() {
        if (this.state.retrieved && this.state.profile != null) {
            return (
            <div className="main-profile" style={grayed}>
                <div className="profile-section">
                    <h3 className=""> About </h3>
                    <hr style={colored}/>
                    {this.state.profile.about.about}
                </div>
                <div className="profile-transition">
                    {this.state.profile.industries.currentindustry}
                    <img className="transition-arrow" src={arrow}/>
                    {this.state.profile.industries.targetindustry}
                    <hr style={lineStyle}/>
                    <div style={graytext}> This section shows the industry 
                    where the user previously worked in, and the industry he/she 
                    is interested in.  This helps Monarch match individuals with similar interests.
                    </div>
                </div>
                <div className="profile-section">
                    <h3 className=""> Transition </h3>
                    <hr style={colored}/>
                    <h4 className="subtitle">Why are you looking to change careers?  What are your interests, motivations and fears about doing so?</h4>
                    <hr className="subtitleLine"/>
                    {this.state.profile.about.transitioningquestions}
                    <br/>
                    <br/>
                    <h4 className="subtitle">What would you like to learn from Monarch's connections?</h4>
                    <hr className="subtitleLine"/>
                    {this.state.profile.about.whyindustry}
                </div>
                <div className="profile-section" style={{top: "-50px"}}>
                    <h3 className=""> Education & Work Experience </h3>
                    <hr style={colored}/>
                    <span style={school}>{this.state.profile.education[0].institution}</span>
                    <br/>
                    <span style={school2}>{this.state.profile.education[0].degree}</span>
                    <br/>
                    <span style={colored}>{this.state.profile.education[0].major}</span>
                    
                    <hr/>
                    <span style={bolded}> Company</span> <span style={colored}>––</span> {this.state.profile.experience[0].company}
                    <br/>
                    <span style={bolded}> Position</span> <span style={colored}>––</span> {this.state.profile.experience[0].position}
                </div>
            </div>
            )
        }
        else {
            //sleep(1000);
            try {
                this.getProfile();
                return null;
            }
            catch(err) {
                this.forceUpdate();
            }
        }
    }

}

export default ProfileMain;