let counter = 0;
let heading = document.querySelector('h1');

function plus() {
  counter++;
  heading.innerHTML = counter;
}
function minus() {
  counter--;
  heading.innerHTML = counter;
}

function updateGreeting(event) {
  event.preventDefault();
  var name = document.querySelector('#name').value;
  document.querySelector('#greeting').innerText = 'Hello, ' + name;
}