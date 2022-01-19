import React from "react";
import ReactDOM, { render } from "react-dom";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import MySelf from "./App/MySelf/MySelf.js";
import "./App/MySelf/MySelf.css";
import "./app.css";
import * as Make3D_js from "./App/Salt3DCG/make3D.js";
import "./App/Salt3DCG/make3D.css";

import createModule from "./App/Salt3DCG/cpp/forjs/wasm_forweb.mjs";
// const myModule = await Module();

class App extends React.Component {
  componentDidMount() {
    createModule().then((Module) => {
        // need to use callback form (() => function) to ensure that `add` is set to the function
        // if you use setX(myModule.cwrap(...)) then React will try to set newX = myModule.cwrap(currentX), which is wrong
        var salt3D_for_js_interface = new Module.ForJsInterface();
        var vertex_control = salt3D_for_js_interface.GetVertexControl();
        console.log("salt3D_for_js_interface",salt3D_for_js_interface,vertex_control)
      });
  }
  render() {
    console.log("App render");

    return (
      <div className="App">
        <Router>
          <Routes>
            <>
              <Route exact path="/" element={<MySelf />} />
              <Route exact path="/view" element={<Make3D_js.Make3D />} />
            </>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(
//     <MySelf />,
//     document.getElementById('root')
// );
