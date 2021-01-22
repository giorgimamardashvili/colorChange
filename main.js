const btn = document.querySelector("button"),
  text = document.querySelector("span");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function colorChange() {
  return Math.floor(Math.random() * arr.length);
}

btn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += arr[colorChange()];
  }

  text.textContent = color;
  document.body.style.backgroundColor = color;
});
