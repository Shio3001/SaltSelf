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
    this.Click = this.Click.bind(this)
  }

  Click(){
    window.location.href = this.props.link_address;
  }

  render() {
    return (
      <div onClick={this.Click} className={"my_self_link " + this.props.link_color} id="my_self_link_id">
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

        <p>自己紹介</p>

        <p>このサイト内にある作品</p>
        <MySelfLink link_address={this.props.nowbasename + "/view"} link_text={"自作描画"} link_color="my_self_link_blue" />
        <MySelfLink link_address={this.props.nowbasename + "/entyping"} link_text={"英単語タイピング"} link_color="my_self_link_blue" />
        {/* <a href={this.props.nowbasename + "/view"}>自作描画</a>
        <a href={this.props.nowbasename + "/entyping"}>英単語タイピング</a> */}
        <p>解説</p>

        <MySelfLink link_address={this.props.nowbasename + "/movieedit"} link_text={"自作動画編集ソフト"} link_color="my_self_link_green" />

        <p>趣味</p>
        <MySelfLink link_address={this.props.nowbasename + "/art"} link_text={"おえかき"} link_color="my_self_link_yellow" />
        
        <p>界隈用</p>
        <MySelfLink link_address={this.props.nowbasename + "/seat"} link_text={"座席記録"} link_color="my_self_link_gray" />

      </div>
    );
  }
}
export default MySelf;
