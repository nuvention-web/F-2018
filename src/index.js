import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './nav.css';
import TopNav from './nav';
import Head from './intro';
import Steps from './steps.js'

console.log("Hello world!")


ReactDOM.render(
  <div>
	  <TopNav/>
	  <Head />
	</div>,
  document.getElementById('root')
);

ReactDOM.render(
	<div>
		<Steps />
	</div>,
	document.getElementById('intro')
)
