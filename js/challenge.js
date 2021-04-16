let counter = document.getElementById('counter');

setTimeout(start, 5000);

var i = 1;
function start() {
  setInterval(increase, 1000);
}

function increase() {
    if (i < Infinity) {
      i++;
      counter.innerText = i;
    }
}
