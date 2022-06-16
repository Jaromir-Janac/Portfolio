setInterval (() =>{
let day = document.getElementById('day');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let d = new Date().getDay();
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";

if (h>12){
    h -= 12;
}
h = (h<10) ? "0" + h : h;
m = (m<10) ? "0" + m : m;
s = (s<10) ? "0" + s : s;

hours.innerHTML = "&nbsp"+h+" :&nbsp";
minutes.innerHTML = m+" :&nbsp";
seconds.innerHTML = s+"&nbsp";
ampm.innerHTML = am

if (d == 1){
    d = "Mon"
}
if (d == 2){
    d = "Tue"
}
if (d == 3){
    d = "Wed"
}
if (d == 4){
    d = "Thu"
}
if (d == 5){
    d = "Fri"
}
if (d == 6){
    d = "Sat"
}
if (d == 7){
    d = "Sun"
}
day.innerHTML = "&nbsp"+d+"&nbsp";
}, 1000)