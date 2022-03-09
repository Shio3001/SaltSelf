import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const date_data = new Date();
const year = date_data.getFullYear();
const month = date_data.getMonth() + 1;
const week = date_data.getDay();
const day = date_data.getDate();

var age = year - 2004 - 1;

console.log(age);
console.log(month);
console.log(day);

if (month >= 12 && day >= 14) {
  age++;
}
const text = "16進数で" + age.toString(16) + "才";

function click() {
  document.getElementById("my_self_h1").style.animationName = "open_title_text";
}

class MySelfLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="my_self_link">
        <p>{this.props.link_text}</p>
      </div>
    );
  }
}
class MySelf extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("MySelf render");
    console.log("nowbasename",this.props.nowbasename)

    return (
      <div>
        <a href={this.props.nowbasename + "/view"}>自作描画</a>
        <a href={this.props.nowbasename + "/entyping"}>英単語タイピング</a>
        <div className="my_self">
          
        </div>
      </div>
    );
  }
}
export default MySelf;
