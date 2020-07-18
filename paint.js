const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("color");
const range = document.getElementsByClassName("range")[0];
const mode = document.getElementsByClassName("fill")[0];
const save = document.getElementsByClassName("save")[0];

let paint = false;
let fill = false;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "#2c2c2c";
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
    if (!fill) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}

function handleColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
function handleSize(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}
function handleMode(event) {
  if (fill === true) {
    fill = false;
    mode.innerHTML = "Fill";
  } else {
    fill = true;
    mode.innerHTML = "Paint";
  }
}
function filling(event) {
  if (fill) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
function handleSave(event) {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "whaaaat a masterpiece!!";
  link.click();
}
if (canvas) {
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("click", filling);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColor)
);

if (range) {
  range.addEventListener("input", handleSize);
}

if (mode) {
  mode.addEventListener("click", handleMode);
}

if (save) {
  save.addEventListener("click", handleSave);
}
