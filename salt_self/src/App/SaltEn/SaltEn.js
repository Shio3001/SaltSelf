import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";

const WORDS = require("./word.json");
const WORDSColor = [
  "UnansweredColor",
  "NowColor",
  "CorrectColor",
  "MissColor",
  "UnansweredColor_Miss",
];

// Promiseを使う方法

class CharClass {
  constructor(text, number) {
    console.log("text", text);
    console.log("number", number);
    this.text = text.replace(/ /g, "");
    this.number = number;
    this.correct = 0;
    // 0:未回答
    // 1:現在
    // 2:正解
    // 3:不正解
    // 4:未回答での不正解
  }

  GetColor() {
    return WORDSColor[this.correct];
  }
}

class CharComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let div_className;

    if (!this.props.chartext.text) {
      div_className = "div_CharCpace";
    } else {
      div_className = "div_NotCpace";
    }

    console.log("div_className",this.props.chartext,div_className)

    console.log("props chartext", this.props.chartext);
    return (
      <div className={div_className}>
        <div className="div_CharComponent">
          <p className={this.props.chartext.GetColor()}>
            {this.props.chartext.text}
          </p>
        </div>
      </div>
    );
  }
}

export class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typenumber: 0,
      now_typing_word_en: [],
      now_typing_word_ja: "",
    };

    this.typenumber_plus = this.typenumber_plus.bind(this);
    document.addEventListener("keydown", this.typenumber_plus);

    this.ReadNewWord = this.ReadNewWord.bind(this);
    this.MakeCharComponent = this.MakeCharComponent.bind(this);
  }

  typenumber_plus(event) {
    console.log("押されました", event.key, this.state.typenumber);
    let now_typenumber = this.state.typenumber;

    let comparison = this.state.now_typing_word_en[now_typenumber].text.toLowerCase();
      
    if (!comparison){
      now_typenumber ++;
      console.log("comparisonが空白のため飛ばす")
      comparison = this.state.now_typing_word_en[now_typenumber].text.toLowerCase();
    }
    
    const copy_now_typing_word_en = Object.assign(
      this.state.now_typing_word_en
    );



    console.log("comparison", comparison);
    console.log("event.key", event.key);

    if (event.key == comparison) {
      console.log("Correct");
      copy_now_typing_word_en[now_typenumber].correct = 2;
      now_typenumber++;

      if (now_typenumber == this.state.now_typing_word_en.length) {
        this.ReadNewWord();
        console.log("更新");
        return;
      }
      copy_now_typing_word_en[now_typenumber].correct = 1;
    } else {
      copy_now_typing_word_en[now_typenumber].correct = 3;

      for (
        let i = now_typenumber + 1;
        i < copy_now_typing_word_en.length;
        i++
      ) {
        copy_now_typing_word_en[i].correct = 4;
      }

      console.log("Miss");
    }

    this.setState({
      now_typing_word_en: copy_now_typing_word_en,
      typenumber: now_typenumber,
    });

    console.log(this.state.typenumber);
  }

  MakeCharComponent() {
    let temp_component = [];
    this.state.now_typing_word_en.map((val, i) => {
      temp_component.push(<CharComponent chartext={val} />);
    });
    return temp_component;
  }

  ReadNewWord() {
    console.log("ReadNewWord-WORDS", WORDS);
    const All_values_words = Object.values(WORDS);
    const word_classification_number = Math.trunc(
      Math.random() * All_values_words.length
    );
    const ClassificationWORDS = All_values_words[word_classification_number];
    const words_keys = Object.keys(ClassificationWORDS);
    const words_values = Object.values(ClassificationWORDS);
    const word_number = Math.trunc(Math.random() * words_keys.length);
    const word_ja = words_keys[word_number];
    const word_en = words_values[word_number];
    const word_array = Array.from(word_en);
    console.log("words_keys", words_keys);
    console.log("word_number", word_number);
    console.log("word", word_en);
    console.log("word_array", word_array);
    const now_typing_word_en = word_array.map((value, index) => {
      return new CharClass(value, index);
    });
    now_typing_word_en[0].correct = 1;
    console.log("now_typing_word", word_ja, now_typing_word_en);

    this.setState({
      now_typing_word_ja: word_ja,
      now_typing_word_en: now_typing_word_en,
      typenumber: 0,
    });
  }

  componentDidMount() {
    this.ReadNewWord();
  }
  render() {
    console.log("MakeTextComponent", this.MakeCharComponent());

    return (
      <div className="div_TextComponent">
        <h2>{this.state.now_typing_word_ja}</h2>
        <div className="div_TextComponentEn">
          {this.MakeCharComponent().map((fruit, i) => (
            <div key={i}>{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
          ))}
        </div>
      </div>
    );
  }
}

export class EnWordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="div_EnWordComponent">
        <h1>英単語タイピング</h1>
        <p>ver0.1α</p>
        <GameComponent />
        <h2>単語準拠</h2>
        <p>(´･ω･`)</p>
      </div>
    );
  }
}
