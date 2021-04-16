let counter = document.getElementById('counter');

setTimeout(start, 5000);
let i = 1;
counter.innerText = i;
function start() {
  setInterval(increase, 1000);
}

function increase() {
    if (i < Infinity) {
      counter.innerText = i;
      i++;
    }
}
