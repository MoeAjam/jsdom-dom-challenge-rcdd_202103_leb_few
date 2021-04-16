let counter = document.getElementById('counter');

let i = 1;
let interval = setInterval( increment, 1000);
function increment(){
    i = i % 360 + 1;
}
counter.innerText = i;
