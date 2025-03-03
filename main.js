const button = document.getElementById("addColorButton");

button.addEventListener("click", () => {
  if (button.id === "addColorButton") {
    // Création du container des couleurs
    const palette = document.createElement("div");
    palette.id = "palette";
    document.body.appendChild(palette);

    // Génération aléatoire de la première couleur
    const colorSection = document.createElement("section");
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    colorSection.style.backgroundColor = randomColor;
    colorSection.style.height = "100vh";
    palette.appendChild(colorSection);

    // Sélecteur de couleur
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = randomColor;
    colorInput.addEventListener("input", (e) => {
      colorSection.style.backgroundColor = e.target.value;
    });
    colorSection.appendChild(colorInput);
    palette.appendChild(colorSection);

    // Création du nouveau bouton
    button.innerText = "+";
    button.id = "addMoreColorButton";
  } else if (button.id === "addMoreColorButton") {
    // Génération aléatoire (inclure un algorithme en React + tard) des autres couleurs
    const colorSection = document.createElement("section");
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    colorSection.style.backgroundColor = randomColor;
    colorSection.style.height = "100vh";
    palette.appendChild(colorSection);

    // Sélecteur de couleur
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = randomColor;
    colorInput.addEventListener("input", (e) => {
      colorSection.style.backgroundColor = e.target.value;
    });
    colorSection.appendChild(colorInput);
    palette.appendChild(colorSection);
  }
  palette.appendChild(button);
});
