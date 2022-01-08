let main = document.querySelector('.main');
let div = document.querySelector('.div');
let out = document.querySelector('.out');
let monitor = document.querySelector('.monitor');
let keys = document.querySelectorAll('.key');
let space = document.querySelector('.space')
let run = function (max) {
  return Math.floor(Math.random() * max)
}

monitor.oninput = function (event) {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].innerHTML == event.data) {
      keys[i].style.boxShadow = `0 0 15px rgb(${run(255)},${run(255)},${run(255)})`;
    } else {
      keys[i].style.boxShadow = 'none';
    }
  }
}

let start = 0;
let end = 0;

out.addEventListener('touchstart', (event) => {
  start = event.touches[0].screenX;
  if (start < end) {
    monitor.style.backgroundColor = 'red';
    monitor.innerHTML = 'left';
  }
})

out.addEventListener('touchend', (event) => {
  end = event.changedTouches[0].screenX;
  if (start > end) {
    monitor.style.backgroundColor = 'green';
    monitor.innerHTML = 'right';
  }
})