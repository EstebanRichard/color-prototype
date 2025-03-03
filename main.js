const button = document.getElementById('addColorButton');

button.addEventListener('click', () => {
    const section = document.createElement('section');    
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    section.style.backgroundColor = randomColor;
    section.style.height = '100vh';
    
    const palette = document.createElement('div');
    palette.id = "palette";
    palette.appendChild(section);
    
    document.body.appendChild(palette);
    
    const button = document.createElement('button');




    button.remove();
});
