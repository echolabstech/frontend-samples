import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { styled } from '@material-ui/styles';

const CustomInput = styled(Input)({
  color: 'black',
  'background-color': 'white',
  'border-bottom': 'solid white 0.25em',
  width: '50%',
  'margin-bottom': '1em',
});

const CustomSelect = styled(Select)({
  color: 'black',
  'background-color': 'white',
  'border-bottom': 'solid white 0.25em',
  width: '15%',
});

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
          <CustomInput
            defaultValue="Hello world"
            inputProps={{
              'aria-label': 'Description',
            }}
          />

          <CustomSelect
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </CustomSelect>
        </header>
      </div>
    );
  }
}

export default App;
