const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.style.height = "12.5%";
  tile.style.width = "12.5%";
  if (
    (i >= 8 && i < 16) ||
    (i >= 24 && i < 32) ||
    (i >= 40 && i < 48) ||
    (i >= 56 && i < 64)
  ) {
    if (i % 2 === 0) {
      tile.style.background = randomColor();
    } else {
      tile.style.background = randomColor();
    }
  } else if (i % 2 === 0) {
    tile.style.background = randomColor();
  } else {
    tile.style.background = randomColor();
  }
  container.append(tile);
}
document.body.append(container);
