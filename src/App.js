import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppContainer from './AppContainer/AppContainer';
import Main from './Main/Main';
import Home from './Home/Home';
import AddList from './AddList/AddList';
import Favorites from './Favorites/Favorites';
import Help from './Help/Help';

import './App.css';

// TODO: Rename "Main"?
const App = () => (
  <Router>
    <Fragment>
      <CssBaseline />
      <Route exact path="/login" component={Main} />
      <AppContainer>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddList} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/help" component={Help} />
      </AppContainer>
    </Fragment>
  </Router>
);

export default App;
