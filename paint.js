const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("color");
const range = document.getElementsByClassName("range")[0];

let paint = false;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function stopPainting(event) {
  paint = false;
}
function startPainting(event) {
  paint = true;
}

function mouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!paint) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}
function handleSize(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}

if (canvas) {
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColor)
);

if (range) {
  range.addEventListener("input", handleSize);
}
