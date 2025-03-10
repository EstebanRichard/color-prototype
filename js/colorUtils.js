function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function getHarmoniousColor(baseColor, variation = 30) {
  let r = parseInt(baseColor.slice(1, 3), 16);
  let g = parseInt(baseColor.slice(3, 5), 16);
  let b = parseInt(baseColor.slice(5, 7), 16);

  r = Math.min(
    255,
    Math.max(0, r + (Math.random() * (2 * variation) - variation))
  );
  g = Math.min(
    255,
    Math.max(0, g + (Math.random() * (2 * variation) - variation))
  );
  b = Math.min(
    255,
    Math.max(0, b + (Math.random() * (2 * variation) - variation))
  );

  return `#${Math.round(r).toString(16).padStart(2, "0")}${Math.round(g)
    .toString(16)
    .padStart(2, "0")}${Math.round(b).toString(16).padStart(2, "0")}`;
}
