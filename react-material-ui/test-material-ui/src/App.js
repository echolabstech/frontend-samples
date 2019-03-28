import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { styled } from '@material-ui/styles';

const menuStyles = {
  marginTop: '7vh',
}

const selectStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  borderBottom: 'solid white 0.25em',
  width: '25vw',
  height: '5vh',
}

const arrowStyle = {
  color: 'white',
  position: 'absolute',
  height: '5vh',
  width: '5vw',
}

const ExpandMoreCustom = styled(ExpandMore)(arrowStyle);

const ExpandLessCustom = styled(ExpandLess)(arrowStyle);

class RoleMenu extends React.Component {
  state = {
    anchorEl: null,
    role: 30,
    arrow: ExpandMoreCustom,
  };

  showMenu = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  selectMenuItem = (event) => {
    const value = event.target.value;
    this.setState({
      anchorEl: null,
      role: value,
    });
  };

  updateRole = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  menuOpen = (event) => {
    this.setState({
      arrow: ExpandLessCustom,
    });
  }

  menuClose = (event) => {
    this.setState({
      arrow: ExpandMoreCustom,
    });
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Select
          disabled
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          value={this.state.role}
          inputProps={{
            name: 'role',
            id: 'role-simple',
          }}
          onClick={this.showMenu}
          style={selectStyle}
          onChange={this.updateRole}
          IconComponent={this.state.arrow}
          >
          <MenuItem value={10}>IT Manager</MenuItem>
          <MenuItem value={20}>Salesperson</MenuItem>
          <MenuItem value={30}>HR Manager</MenuItem>
        </Select>
        <Menu
          id="simple-menu"
          style={menuStyles}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onEntering={this.menuOpen}
          onExiting={this.menuClose}
        >
          <MenuItem value={10} onClick={this.selectMenuItem}>IT Manager</MenuItem>
          <MenuItem value={20} onClick={this.selectMenuItem}>Salesperson</MenuItem>
          <MenuItem value={30} onClick={this.selectMenuItem}>HR Manager</MenuItem>
        </Menu>
      </div>
    );
  }
}

class App extends Component {
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
          <RoleMenu />
        </header>
      </div>
    );
  }
}

export default App;
