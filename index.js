// Selecciona el elemento de texto
const neonText = document.getElementById('neonText');

// Define colores que se alternarán
let colors = ['#ff007f', '#00ffff', '#ff00ff', '#00ff7f'];
let index = 0;

// Cambia los colores cada segundo
setInterval(() => {
    neonText.style.color = colors[index];
    neonText.style.textShadow = `
        0 0 10px ${colors[index]},
        0 0 20px ${colors[index]},
        0 0 30px ${colors[(index + 1) % colors.length]},
        0 0 40px ${colors[(index + 1) % colors.length]}`;
    index = (index + 1) % colors.length;
}, 1000); // Cambia los colores cada segundo
