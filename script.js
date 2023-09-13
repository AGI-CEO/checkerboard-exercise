const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const tiles = [];
for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.style.height = "12.5%";
  tile.style.width = "12.5%";
  tiles.push(tile);
  container.append(tile);
}
document.body.append(container);

function updateColors() {
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    tile.style.background = getRandomColor();
  }
}

setInterval(updateColors, 2000);
