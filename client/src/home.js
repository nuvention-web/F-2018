import ReactDOM from 'react-dom';
import App from './app';
import './nav.css';
import TopNav from './nav';
import Head from './intro';
import Steps from './steps.js'
import Timeline from './timeline' 
import React, { Component } from "react";
import { browserHistory } from 'react-router';
import AppNav from './appnav'

console.log("Hello world!")


// ReactDOM.render(
//   <div>
// 	  <TopNav/>
// 	  <Head />
// 		<Steps />
// 		<Timeline />
// 	</div>,
//   document.getElementById('root')
// );
export default class Home extends Component {
  render() {
    return (
      <div id="home">
	  		<TopNav/>
 	  		<Head />
				<Steps />
 				<Timeline />
      </div>
    );
  }
}



