import React from 'react'
import ReactDOM from 'react-dom'
import './intro.css';
import image from './static/intro.jpeg'
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
          <Link to="/signup"><Button className="introButton" bsSize="large" href="/signup">Make the Leap</Button></Link>
        </div>
      </div>
    )
  }
}

export default Head;