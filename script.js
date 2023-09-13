const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.style.height = "12.5%";
  tile.style.width = "12.5%";
  tile.style.boxSizing = "border-box";

  const row = Math.floor(i / 8);
  const col = i % 8;

  let red = Math.floor((row / 7) * 255);
  let blue = Math.floor((col / 7) * 255);

  if ((row + col) % 2 === 0) {
    red = Math.min(255, red + 50);
  } else {
    red = Math.max(0, red - 50);
  }

  blue = Math.max(0, blue);

  tile.style.background = `rgb(${blue}, 0, ${red})`;
  tile.style.border = "1px solid black";

  container.append(tile);
}

document.body.append(container);
