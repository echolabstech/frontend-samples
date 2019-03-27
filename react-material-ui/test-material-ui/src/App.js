import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

const menuStyles = {
  marginTop: '7vh',
}

const selectStyle = {
  backgroundColor: 'white',
  color: 'black',
  borderBottom: 'solid white 0.25em',
  width: '25vw',
  height: '5vh',
}

const arrowIconStyle = {
  backgroundColor: 'black',
  zIndex: '100',
  position: 'absolute',
}

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    role: 'IT Manager',
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    const role = event.target.innerText;
    this.setState({ anchorEl: null , role});
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Input
          disabled
          value={this.state.role}
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={selectStyle}
          onChange={this.handleChange}
          IconComponent={ArrowDropUp}
        >
        <ArrowDropUp style={arrowIconStyle} />
        </Input>
        <Menu
          id="simple-menu"
          style={menuStyles}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

class App extends Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <SimpleMenu />
        </header>
      </div>
    );
  }
}

export default App;
