let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = = document.getElementById('plus');

//incriment by 1 every second
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

// use plus and minus
plus.addEventListener('click', function(e){
  counter.innerText = arseInt(counter.innerText) + 1;
});
