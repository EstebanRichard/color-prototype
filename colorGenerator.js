function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // Convertit en hex
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function getHarmoniousColor(baseColor) {
  const baseHue = parseInt(baseColor.match(/\d+/)[0]);
  const newHue = (baseHue + 60) % 360;
  return `hsl(${newHue}, 100%, 50%)`;
}
