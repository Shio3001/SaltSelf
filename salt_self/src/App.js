import React from "react";
import ReactDOM, { render } from "react-dom";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import MySelf from "./App/MySelf/MySelf.js";
import "./App/MySelf/MySelf.css";
import "./app.css";
import * as Make3D_js from "./App/Salt3DCG/make3D.js";
import "./App/Salt3DCG/make3D.css";

// const myModule = await Module();

class App extends React.Component {
  render() {
    let nowbasename;
    if (process.env.NODE_ENV == "production") {
      nowbasename = "/SaltSelf";
      console.log("production");
    } else {
      nowbasename = "";
      console.log("not production");
    }
    console.log("nowbasename", nowbasename);
    
    console.log("App render");
    // console.log(process.env.PUBLIC_URL)
    // console.log(process.env.PUBLIC_PATH)
    return (
      // <Route exact path="/" element={<MySelf />} />
      // <Route exact path="/view" element={<Make3D_js.Make3D />} />
      <div className="App">
        <BrowserRouter basename={nowbasename}>
          <Routes>
            <Route exact path="/" element={<MySelf />} />
            <Route exact path="/view" element={<Make3D_js.Make3D />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(
//     <MySelf />,
//     document.getElementById('root')
// );
