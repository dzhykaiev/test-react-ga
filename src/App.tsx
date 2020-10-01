import React from 'react';
import ReactGA from 'react-ga';
import './App.css';
import logo from './logo.svg';

const trackingId = "UA-179443594-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
