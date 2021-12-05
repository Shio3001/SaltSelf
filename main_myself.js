var self_p_old = document.getElementById("my_self_p_old");


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
