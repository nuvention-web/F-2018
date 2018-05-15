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

var profileTest = {
    name: "Drew Parsons",
    hometown: "Denver, CO",
    about: "I am a career switcher looking to talk to some really cool dudes about switching from computer science to something that more suits my likings and my skills.  I\'m struggling knowing where to start and blah blah blah"
}

var grayed = {
    backgroundColor: "#e6ecf0"
}

var colored = {
    borderColor: "#3CB54A"
}

var graytext = {
    color: "lightgray",
    fontSize: "13px",
    marginTop: "15px"
}

var lineStyle = {
    marginBottom: "0"
}



class ProfileMain extends React.Component {
    constructor(props) {
        super(props);
        this.getProfile = this.getProfile.bind(this);
    }

    //get the JSON of user profile
    // sample:
    // {
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
        <div className="main-profile" style={grayed}>
            <div className="profile-section">
                <h3 className=""> About </h3>
                <hr style={colored}/>
                {profileTest.about}
            </div>
            <div className="profile-transition">
                Journalist
                <img className="transition-arrow" src={arrow}/>
                Law
                <hr style={lineStyle}/>
                <div style={graytext}> This section shows the industry 
                where the user previously worked in, and the industry he/she 
                is interested in.  This helps Monarch match individuals with similar interests.
                </div>
            </div>
        </div>
        )
    }

}

export default ProfileMain;