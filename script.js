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

  const red = Math.floor((row / 7) * 255);
  const blue = Math.floor((col / 7) * 255);
  tile.style.background = `rgb(${red}, 0, ${blue})`;
  tile.style.border = "1px solid black";

  container.append(tile);
}
document.body.append(container);
