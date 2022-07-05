import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {
  render() {
    return(
      <div className='Appn'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorenate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
