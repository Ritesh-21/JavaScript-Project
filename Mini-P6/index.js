let p = document.querySelector(".progress");
let s = document.querySelector(".status");
let sec = 5; // total duration 5 seconds
let count = 0;

let intv = setInterval(function () {
  if (count < 100) {
    count++;
    p.style.width = `${count}%`;
    s.textContent = `Progress ${count}%`;
  } else {
    s.textContent = `Download Completed ✅`;
    clearInterval(intv); // ✅ interval stop
  }
}, (sec * 1000) / 100);
