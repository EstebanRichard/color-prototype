const button = document.getElementById("addColorButton");
let colorPalette = [];

button.addEventListener("click", () => {
  if (button.id === "addColorButton") {
    const palette = document.createElement("div");
    palette.id = "palette";
    document.body.appendChild(palette);

    addColorSection(getRandomColor(), palette);

    document.body.appendChild(button);
    button.innerText = "+";
    button.id = "addMoreColorButton";
  } else if (button.id === "addMoreColorButton" && colorPalette.length < 8) {
    const newColor = getHarmoniousColor(colorPalette[colorPalette.length - 1]);
    addColorSection(newColor, document.getElementById("palette"));
  }
});

function addColorSection(color, container) {
  const colorSection = document.createElement("section");
  colorSection.style.backgroundColor = color;
  colorSection.style.height = "85vh";

  const p = document.createElement("p");
  p.innerHTML = color.toUpperCase();

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = color;

  colorPalette.push(color);

  colorInput.addEventListener("input", (e) => {
    const newColor = e.target.value;
    colorSection.style.backgroundColor = newColor;
    p.innerHTML = newColor.toUpperCase();

    const index = colorPalette.indexOf(color);
    if (index !== -1) {
      colorPalette[index] = newColor;
      color = newColor;
    }

    console.log(colorPalette)
  });

  colorSection.appendChild(p);
  colorSection.appendChild(colorInput);
  container.appendChild(colorSection);
}
