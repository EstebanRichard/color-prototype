const button = document.getElementById("addColorButton");
let colorPalette = [];

button.addEventListener("click", () => {
  if (button.id === "addColorButton") {
    // Création du container des couleurs
    const palette = document.createElement("div");
    palette.id = "palette";
    document.body.appendChild(palette);

    // Génération aléatoire de la première couleur
    const colorSection = document.createElement("section");
    colorPalette[0] = `hsl(${Math.random() * 360}, 100%, 50%)`;
    colorSection.style.backgroundColor = colorPalette[0];
    colorSection.style.height = "100vh";
    palette.appendChild(colorSection);

    // Sélecteur de couleur
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = colorPalette[0];
    colorInput.addEventListener("input", (e) => {
      colorSection.style.backgroundColor = e.target.value;
    });
    colorSection.appendChild(colorInput);

    // Création du nouveau bouton
    button.innerText = "+";
    button.id = "addMoreColorButton";
  } else if (button.id === "addMoreColorButton") {
    // Génération aléatoire (inclure un algorithme en React + tard) des autres couleurs
    const colorSection = document.createElement("section");

    function getHarmoniousColors(hex) {
      return chroma
        .scale([hex, chroma(hex).set("hsl.h", "+60")])
        .mode("lab")
        .colors(1);
    }

    colorSection.style.backgroundColor = getHarmoniousColors(
      colorPalette[colorPalette.length - 1]
    )[0];
    colorSection.style.height = "100vh";
    palette.appendChild(colorSection);

    // Sélecteur de couleur
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = colorPalette[colorPalette.length - 1];
    colorInput.addEventListener("input", (e) => {
      colorSection.style.backgroundColor = e.target.value;
    });
    colorSection.appendChild(colorInput);
    palette.appendChild(colorSection);
  }
  palette.appendChild(button);
});
