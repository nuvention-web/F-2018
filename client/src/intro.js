import React from 'react'
import ReactDOM from 'react-dom'
import './intro.css';
import image from './static/intro.jpeg'
import logo from './static/logo.png'

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
          <h5> Where Conversations Inspire Your Career Journey.</h5>
        </div>
      </div>
    )
  }
}

export default Head;