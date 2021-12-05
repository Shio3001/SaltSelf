
const my_self_text1 = <p class="my_self_text">2004年12月14日生まれ</p>;
const my_self_text2 = <p class="my_self_text" id="my_self_old">ここに年齢を挿入</p>;
const my_self_text3 = <p class="my_self_text">2021年JOI 一次予選400点で通った</p>;
const my_self_text4 = <p class="my_self_text">C++ Python</p>;
ReactDOM.render(my_self_text1, document.getElementById('ps'));
ReactDOM.render(my_self_text2, document.getElementById('ps'));
ReactDOM.render(my_self_text3, document.getElementById('ps'));
ReactDOM.render(my_self_text4, document.getElementById('ps'));

var self_p_old = document.getElementById("my_self_old");
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

self_p_old.innerHTML = text;

