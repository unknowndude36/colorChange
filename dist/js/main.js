let button = document.querySelector(".btn-dark");
let background = document.querySelector("body");

let colorHue = Math.floor(Math.random() * 359 + 1);

button.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = `hsl(${colorHue}, 100%, 50%)`;
  let newColor = Math.floor(Math.random() * 359 + 1);
  if (colorHue === newColor) {
    colorHue = Math.floor(Math.random() * 359 + 1);
  } else {
    colorHue = newColor;
  }
}
