import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Material UI
const Header = () => (
  <nav style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'flex-end' }}>
    <Link to="/add">
      <div style={{ backgroundColor: 'red', width: '50px', height: '50px', marginRight: '5px' }} />
    </Link>
    <Link to="/favorites">
      <div style={{ backgroundColor: 'blue', width: '50px', height: '50px', marginRight: '5px' }} />
    </Link>
    <Link to="/help">
      <div style={{ backgroundColor: 'green', width: '50px', height: '50px', marginRight: '5px' }} />
    </Link>
    <Link to="/home">
      <div style={{ backgroundColor: 'purple', width: '50px', height: '50px', marginRight: '5px' }} />
    </Link>
  </nav>
);

export default Header;
