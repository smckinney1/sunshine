import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';

// TODO: Notes on using Material Icons, including making them accessible, here:
// https://material-ui.com/style/icons/#font-icons
class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <Typography component="h2" variant="h1" gutterBottom>Welcome to Project Sunshine</Typography>
          </header>
          <section>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </section>
          <p className="App-intro">
            Cupcake ipsum dolor sit. Amet pudding jujubes halvah jelly-o. Cookie croissant sweet jelly-o jelly-o jelly cake jelly lemon drops.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default App;
