import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

import createModule from "./cpp/wasm_forweb.mjs";

function App() {

  useEffect(() => {
    // Update the document title using the browser API
    createModule().then((Module) => {
      var hoge= new Module.ClassName();
      hoge.FunctionName();
    });
  });

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
      </header>
    </div>
  );
}

export default App;

