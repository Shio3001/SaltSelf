import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


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

class MySelf extends React.Component {
    render() {
        return (
            <div>
                <p className="my_self_text">2004年12月14日生まれ</p>;
                <p className="my_self_text">{text}</p>;
                <p className="my_self_text">2021年JOI 一次予選400点で通った</p>;
                <p className="my_self_text">C++ Python</p>;
            </div>
        );
    }
}

ReactDOM.render(
    <MySelf />,
    document.getElementById('root')
);

