import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Main/Main';
import Home from './Home/Home';
import './App.css';

// TODO: There should be a header with a link back to home.
// TODO: Rename "Main"
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Home} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
