import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import MySelf from "./App/MySelf/MySelf.js";
import "./App/MySelf/MySelf.css";
import "./app.css";
import * as Make3D_js from "./App/Salt3DCG/make3D.js";
import "./App/Salt3DCG/make3D.css";

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
    // console.log(process.env.PUBLIC_URL)
    // console.log(process.env.PUBLIC_PATH)
    return (
      // <Route exact path="/" element={<MySelf />} />
      // <Route exact path="/view" element={<Make3D_js.Make3D />} />

      //r basename="https://shio3001.github.io/SaltSelf"
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<MySelf />} />
            <Route path="/view" element={<Make3D_js.Make3D />} />
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
