const canvas = document.getElementById("jsCanvas");

let paint = False;

function stopPainting(event) {
  paint = False;
}
function startPainting(event) {
  paint = True;
}

function mouseMove(event) {
  const x = event.offSetX;
  const y = event.offSetY;
  if (!paint) {
    context.beginPath();
  } else {
  }
}

if (canvas) {
  canvas.addEventListener("mouseenter", mouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
}
