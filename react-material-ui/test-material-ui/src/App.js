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
    inputValue: 'username',
    age: 30,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    const inputValue = event.target.innerText;
    const value = event.target.value;
    this.setState({ anchorEl: null , inputValue, age: value});
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Select
          disabled
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          value={this.state.age}
          onChange={this.handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
          onClick={this.handleClick}
          style={selectStyle}
          onChange={this.handleChange}
          IconComponent={ArrowDropUp}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          <MenuItem value={10}>IT Manager</MenuItem>
          <MenuItem value={20}>Salesperson</MenuItem>
          <MenuItem value={30}>HR Manager</MenuItem>
        </Select>
        <Menu
          id="simple-menu"
          style={menuStyles}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem value={10} onClick={this.handleClose}>IT Manager</MenuItem>
          <MenuItem value={20} onClick={this.handleClose}>Salesperson</MenuItem>
          <MenuItem value={30} onClick={this.handleClose}>HR Manager</MenuItem>
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
