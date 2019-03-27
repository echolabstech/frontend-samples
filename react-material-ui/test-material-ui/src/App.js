import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from '@material-ui/core/Input';
import { styled } from '@material-ui/styles';

const CustomInput = styled(Input)({
  color: 'black',
  'background-color': 'white',
  'border-bottom': 'solid white 0.25em',
  width: '50%',
});


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
          <CustomInput
            defaultValue="Hello world"
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
