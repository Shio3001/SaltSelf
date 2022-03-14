import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class ExplanationMovieFunction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="div_ExplanationMovieFunction">
        <div className="div_ExplanationMovieFunction_title">
          <p>{this.props.title}</p>
        </div>
        <div className="div_ExplanationMovieFunction_text">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export class ExplanationMovieMediaObject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="div_ExplanationMovie_Object">
        <ExplanationMovieFunction title={"変数"} text={"所属するレイヤーID"}/>
        <ExplanationMovieFunction title={"定数(ただしPython)"} text={"自身のメディアオブジェクトID"}/>
        <ExplanationMovieFunction title={"リスト"} text={"エフェクト管理リスト"}/>
      </div>
    );
  }
}

export class ExplanationMovie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="div_ExplanationMovie">
        <div className="div_ExplanationMovie_Layer"></div>

        <div className="div_ExplanationMovie_left_Object_area">
          <div className="div_ExplanationMovie_left">
            <p>Pythonリスト</p>
          </div>
          <div className="div_ExplanationMovie_right">
            <ExplanationMovieMediaObject />
          </div>
        </div>
      </div>
    );
  }
}

export class Explanation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="div_MovieEditExplanation">
        <div
          className={"div_MovieEditExplanationTitle " + this.props.title_color}
        >
          <h3>{this.props.title_text}</h3>
        </div>

        <div></div>

        <div className="div_MovieEditExplanationBody">
          <p>{this.props.letter_body}</p>
        </div>
      </div>
    );
  }
}

export class MovieEditCommentary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("MovieEdit render");

    return (
      <div className="div_MovieEditCommentary">
        <h1>自作編集ソフトのご紹介</h1>

        <a href="https://github.com/Shio3001/SaltMV.git">github</a>

        <h2>使用言語</h2>
        <Explanation
          title_text={"Python3"}
          letter_body={
            "UIに使用した言語。動的型付け。速度はいまいちだがライブラリが強力で幅広く使われている言語"
          }
          title_color={"title_color_blue"}
        />
        <Explanation
          title_text={"C++"}
          letter_body={
            "内部動画に使用した言語。静的型付け。なんでもできる つよい"
          }
          title_color={"title_color_blue"}
        />

        <h2>使用ライブラリ</h2>
        <Explanation
          title_text={"Tkinter"}
          letter_body={"GUIライブラリ Python標準かつ軽量"}
          title_color={"title_color_green"}
        />
        <Explanation
          title_text={"OpenCV"}
          letter_body={"動画処理に強いライブラリ"}
          title_color={"title_color_green"}
        />
        <Explanation
          title_text={"Pillow"}
          letter_body={
            "画像処理ライブラリ 回転や拡大、テキストなどの処理に使用"
          }
          title_color={"title_color_green"}
        />
        <Explanation
          title_text={"Librosa"}
          letter_body={"音声ライブラリ 音声の入力とサンプリング数の変換に使用"}
          title_color={"title_color_green"}
        />
        <Explanation
          title_text={"Numpy"}
          letter_body={
            "行列計算ライブラリ 動画と画像のピクセル処理、音声のチャンネル数変換に使用"
          }
          title_color={"title_color_green"}
        />
        <Explanation
          title_text={"Scipy"}
          letter_body={"行列計算ライブラリ 音声の書き出しに使用"}
          title_color={"title_color_green"}
        />
        <Explanation
          title_text={"Boost Python"}
          letter_body={"C++のライブラリ Pythonとの連携に使用"}
          title_color={"title_color_green"}
        />

        <h2>開発環境</h2>
        <Explanation
          title_text={"Anaconda"}
          letter_body={"パッケージ管理"}
          title_color={"title_color_yellow"}
        />

        <h2>開発経緯</h2>
        <p>Macで無料で使える編集ソフトが少なかったから</p>

        <h2>タイムラインとは</h2>
        <p>動画編集に欠かせないGUI、タイムライン</p>

        <h2>タイムラインの実装について</h2>

        <p>
          動画編集ソフトでのタイムラインは二種類の実装方法があり、「1つのレイヤーに1つのメディアオブジェクト」方式(AdobeAfterEffectなど)と「1つのレイヤーに複数のメディアオブジェクト」方式(AdobePremiereProやAviUtlなど)があります。
          今回の実装では後者の複数メディア方式を採用することにしました。
        </p>
        <h3>複数メディア方式を実現するためのデータ構造(私の場合)</h3>
        <ExplanationMovie />
        <p></p>

        <h2>動画の処理について(座標の計算など)</h2>

        <h3>直線移動は中学数学(1次関数)でできるから簡単!</h3>
        <h3>なめらかな動きは3次ベジエ曲線が必要!よくわからない(泣)</h3>

        <h2>動作動画</h2>
        <p></p>
      </div>
    );
  }
}
