import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

let header_flag = true //trueだと大きい状態、falseだと小さい状態

function scroll(){
  var scroll_y = window.scrollY;
  console.log(scroll_y)


  if (scroll_y > 100){ //小さくする
    if (header_flag == true){
      console.log("小さくする")
      document.getElementById("header_element").style.animationName = "close_header";
      header_flag = false
    }
  }
  else{ //大きくする
    if (header_flag == false){
      console.log("大きくする")
      document.getElementById("header_element").style.animationName = "open_header";
      header_flag = true 
    }
  }
  
}

class App extends React.Component {
  componentDidMount(){
    window.addEventListener("scroll", function(event) {
      console.log("スクロールされました");
      scroll()
    });

    scroll()
  }
  render() {


    console.log("BrowserRouter return 9");
    return (
      // <Route exact path="/" element={<MySelf />} />
      // <Route exact path="/view" element={<Make3D_js.Make3D />} />
      <div className="App">
        <header id="header_element">むじょはー</header>

        <div className="mainView">
          <BrowserRouter basename={nowbasename}>
            <Routes>
              <Route
                exact
                path="/"
                element={<MySelf nowbasename={nowbasename} />}
              />
              <Route
                path="/view"
                element={<Make3D_js.Make3D nowbasename={nowbasename} />}
              />
              <Route
                path="/entyping"
                element={
                  <SaltEn_js.EnWordComponent nowbasename={nowbasename} />
                }
              />
              <Route path="*" element={<Test.TestComponent />} />
            </Routes>
          </BrowserRouter>
          <footer>なんか表示されないんだけど</footer>
        </div>

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
