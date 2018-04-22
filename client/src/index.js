import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes';
import {Switch} from 'react-router';
import Home from './home';
import Signup from './signUp'

// ReactDom.render(
//     <Router history={browserHistory} routes={routes} />,
//     document.getElementById('app')
//   );

ReactDom.render(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

  