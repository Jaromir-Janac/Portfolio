setInterval(() => {
  let month = document.getElementById("month");
  let dayCal = document.getElementById("dayCal");
  let dayWeek = document.getElementById("dayWeek");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let mon = new Date().getMonth();
  let dC = new Date().getDate();
  let dW = new Date().getDay();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h -= 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  switch (dW) {
    case 0:
      dW = "Sun";
      break;
    case 1:
      dW = "Mon";
      break;
    case 2:
      dW = "Tue";
      break;
    case 3:
      dW = "Wed";
      break;
    case 4:
      dW = "Thu";
      break;
    case 5:
      dW = "Fri";
      break;
    case 6:
      dW = "Sat";
      break;
  }
  month.innerHTML = mon+1 + "/";
  dayCal.innerHTML = dC;
  dayWeek.innerHTML = "&nbsp" + dW + "&nbsp";
  hours.innerHTML = "&nbsp" + h + " :&nbsp";
  minutes.innerHTML = m + " :&nbsp";
  seconds.innerHTML = s + "&nbsp";
  ampm.innerHTML = am;
});
