import React from 'react'
import ReactDOM from 'react-dom'
import './intro.css';
import image from './static/intro2.jpg'
import logo from './static/logo.png'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

var imageStyle = {
  backgroundImage: `url(${image})`
}


class Head extends React.Component {
  render() {
    return (
      <div className="img-container" style={imageStyle}>
        {/* <img src={logo}/> */}
        <div className="title-box">
          <h1> MONARCH </h1>
          {/* <hr/> */}
          <h5>Reinvent Your Career Today.</h5>
        </div>
        <div className="intro-button-box">
        <Link to="/signup"><Button className="introButton" bsSize="large" href="/signup">Signup</Button></Link>
        <Link to="/mentor"><Button className="introMentor" bsSize="large" href="/signup">Become a Mentor</Button></Link>
        </div>
      </div>
    )
  }
}

export default Head;