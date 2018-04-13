import React from 'react'
import ReactDOM from 'react-dom'
import './intro.css';
import image from './static/intro.jpeg'

class Head extends React.Component {
  render() {
    return (
      <div className="img-container">
        <img src={image}></img>
      </div>
    )
  }
}

export default Head;