import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './nav.css';
import TopNav from './nav';
import Head from './intro';
import Steps from './steps.js'
import Timeline from './timeline' 

console.log("Hello world!")


ReactDOM.render(
  <div>
	  <TopNav/>
	  <Head />
		<Steps />
		<Timeline />
	</div>,
  document.getElementById('root')
);

// ReactDOM.render(
// 	<div>
// 		<Steps />
// 	</div>,
// 	document.getElementById('root')
// )
