import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import MySelf from "./App/MySelf/MySelf.js";
import "./App/MySelf/MySelf.css";
import "./app.css";
import * as Make3D_js from "./App/Salt3DCG/make3D.js";
import * as SaltEn_js from "./App/SaltEn/SaltEn";
import * as Test from "./App/test.js";
import "./App/Salt3DCG/make3D.css";
import "./App/SaltEn/SaltEn.css";

// const myModule = await Module();
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

class App extends React.Component {
  render() {
    console.log("BrowserRouter return 9");
    return (
      // <Route exact path="/" element={<MySelf />} />
      // <Route exact path="/view" element={<Make3D_js.Make3D />} />
      <div className="App">
        {/* <MySelf /> */}
        <BrowserRouter basename={nowbasename}>
          <Routes>
            <Route exact path="/"  element={<MySelf nowbasename={nowbasename} />} />
            <Route path="/view" element={<Make3D_js.Make3D nowbasename={nowbasename}/>} />
            <Route path="/entyping" element={<SaltEn_js.EnWordComponent nowbasename={nowbasename}/>} />
            <Route path="*" element={<Test.TestComponent />} />
          </Routes>
        </BrowserRouter>
        
        {/* <Make3D_js.Make3D /> */}
      </div>
    );
  }
}

export default App;

// ReactDOM.render(
//     <MySelf />,
//     document.getElementById('root')
// );
