
import React from 'react';
import ReactDOM from 'react-dom';

const date_data = new Date();
const year = date_data.getFullYear();
const month = date_data.getMonth() + 1;
const week = date_data.getDay();
const day = date_data.getDate();

var age = year - 2004 - 1

if (month > 12 && day > 14) {
    age++;
}
const text = "16進数で" + (age).toString(16) + "才"

function click() {
    document.getElementById("my_self_h1").style.animationName = "open_title_text";
}


class MySelf extends React.Component {
    render() {
        return (
            <div>
                <a href={"Salt3DCG/make3D.html"}>自作描画</a>
                <div className="my_self">
                    <details>
                        <summary><h1 className="my_self_h1">私について</h1></summary>
                        <div className="my_self_text">
                            <Link to="/">Home</Link>
                            <Link to="/Salt3DCG">Salt3DCG</Link>

                            <p className="my_self_text_p">2004年12月14日生まれ</p>
                            <p className="my_self_text_p">えいえんの5さい！！！(ほんとは{text})</p>
                            <p className="my_self_text_p">2021年JOI 一次予選400点で通った</p>
                            <p className="my_self_text_p">C++ Python</p>
                            <p className="my_self_text_p">基本情報技術者試験勉強中!</p>
                        </div>
                    </details>

                </div >
            </div>

        );
    }
}
export default MySelf;
