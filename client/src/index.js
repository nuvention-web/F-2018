import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory, } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes';
import {Switch} from 'react-router';
import Home from './home';
import Signup from './signup';
import Profile from './profile';
import Quiz from './quiz';
import Login from './login';
import Dashboard from './dashboard';

// ReactDom.render(
//     <Router history={browserHistory} routes={routes} />,
//     document.getElementById('app')
//   );

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/profile/" component={Profile}/>
            <Route path="/edit/" component={Quiz}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
)

  