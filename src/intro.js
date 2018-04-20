import React from 'react'
import ReactDOM from 'react-dom'
import './intro.css';
import image from './static/intro.jpeg'

var imageStyle = {
  backgroundImage: `url(${image})`
}

class Head extends React.Component {
  render() {
    return (
      <div className="img-container" style={imageStyle}>
        <div className="title-box">
          <h1> Tête </h1>
          <hr/>
          <h5> A new career is within reach.</h5>
          <h5> Let us Help you. </h5>
        </div>
      </div>
    )
  }
}

export default Head;