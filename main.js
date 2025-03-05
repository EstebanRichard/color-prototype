const button = document.getElementById("addColorButton");
let colorPalette = [];

button.addEventListener("click", () => {
  if (button.id === "addColorButton") {
    // Création du container des couleurs
    const palette = document.createElement("div");
    palette.id = "palette";
    document.body.appendChild(palette);

    // Génération et affichage de la première couleur
    addColorSection(getRandomColor(), palette);

    // Transformation du bouton
    button.innerText = "+";
    button.id = "addMoreColorButton";
  } else if (button.id === "addMoreColorButton") {
    // Génération d'une couleur harmonieuse
    const newColor = getHarmoniousColor(colorPalette[colorPalette.length - 1]);
    addColorSection(newColor, document.getElementById("palette"));
  }
});

// Fonction pour ajouter une nouvelle section de couleur
function addColorSection(color, container) {
  const colorSection = document.createElement("section");
  colorSection.style.backgroundColor = color;
  colorSection.style.height = "100vh";
  colorPalette.push(color);

  // Sélecteur de couleur
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = colorObj.hex;
  colorInput.addEventListener("input", (e) => {
    colorSection.style.backgroundColor = e.target.value;
  });

  // Affichage du code
  const p = document.createElement("p");
  p.innerHTML = color;
  p.appendChild;

  colorSection.appendChild(colorInput);
  colorSection.appendChild(p);
  container.appendChild(colorSection);

  palette.appendChild(button);
}
