import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MySelf from "./App/MySelf/MySelf.js";
import "./App/MySelf/MySelf.css";
import "./app.css";
import "./app_header.css";
import "./app_header_logo.css";
import "./app_header_child.css";
import "./app_footer.css";
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

let header_flag = true; //trueだと大きい状態、falseだと小さい状態

function scroll() {
  var scroll_y = window.scrollY;
  console.log(scroll_y);

  const min = 30;
  const max = 120;
  const section = max - min
  const section_min = scroll_y - min

  console.log(section_min,section)

  let percent;

  if (min < scroll_y && scroll_y < max) {
    percent = section_min / section
    console.log("percent",percent)
  }
  else if(min > scroll_y){
    percent = 0
  }
  else if(max < scroll_y){
    percent = 1
  }

  document.getElementById("root").style.setProperty('--header-height', 50 + (1 - percent) * 50 + "px");
  document.getElementById("root").style.setProperty('--header-height-logo', (50 + (1 - percent) * 50) * 80 / 100 + "px");
  document.getElementById("root").style.setProperty('--header-element-pic-opacity', (1 - percent) * 0.5);

}

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);
    this.ClickHomepage = this.ClickHomepage.bind(this);
  }

  ClickHomepage() {
    console.log("クリックされました");
    window.location.href = this.props.link;
  }

  render() {
    return (
      <div onClick={this.ClickHomepage} className="logo_main">
        <div className={"logo_pic" + " " + this.props.image_css} id="logo_pic"></div>
        <div className="logo_text">
          <p className="logo_main_p">{this.props.button_title}</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    window.addEventListener("scroll", function (event) {
      console.log("スクロールされました");
      scroll();
    });

    scroll();
  }

  render() {
    console.log("BrowserRouter return 9");
    return (
      // <Route exact path="/" element={<MySelf />} />
      // <Route exact path="/view" element={<Make3D_js.Make3D />} />
      <div className="App">
        <header id="header_element">
          <HeaderLogo link={nowbasename + "/"} button_title={"メイン"} image_css="logo_pic_koharu" />
          <HeaderLogo link={"https://twitter.com/ShioPyComputer"} button_title={"ついったー"} image_css="logo_pic_koharu" />
          <HeaderLogo link={"https://github.com/Shio3001"} button_title={"github"} image_css="logo_pic_koharu" />
          <HeaderLogo link={"https://qiita.com/Shio_3001"} button_title={"Qiita"} image_css="logo_pic_koharu" />
          {/* <HeaderLogo link={nowbasename + "/"} button_title={"twitter"} image_css="logo_pic_shio" />
          <HeaderLogo link={nowbasename + "/"} button_title={"github"} image_css="logo_pic_yamahi" /> */}
        </header>

        <div className="mainView">
          <div className="browseView">
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
          </div>

          <footer>
            <p>制作 しおのあそびば(しお)</p>
          </footer>
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
