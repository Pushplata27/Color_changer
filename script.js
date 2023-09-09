const body = document.querySelector("body");

let tc = ["red", "green", "yellow", "orange"];

function changeColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const colors = `rgb(${red}, ${green}, ${blue})`;

  body.addEventListener("click", () => {
    body.style.backgroundColor = colors;
  });

  return colors;
}

function changeTextColor() {
  const text = document.getElementById("text");
  const textColors = parseInt(Math.floor(Math.random() * tc.length));

  text.style.color = tc[textColors];
}
