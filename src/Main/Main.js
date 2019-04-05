import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Main.css';

// TODO: Notes on using Material Icons, including making them accessible, here:
// https://material-ui.com/style/icons/#font-icons
const Home = () => (
  <div className="Main">
    <header className="Main-header">
      <Typography component="h2" variant="h1" gutterBottom>Welcome to Project Sunshine</Typography>
    </header>
    <section>
      <Link to="/home">
        <Button variant="contained" color="primary">
          Start Packing!
        </Button>
      </Link>
    </section>
    <p className="Main-intro">
      Cupcake ipsum dolor sit. Amet pudding jujubes halvah jelly-o.
      Cookie croissant sweet jelly-o jelly-o jelly cake jelly lemon drops.
    </p>
  </div>
);

export default Home;
