let i = 0
let image = [
    'images/casas-inundadas.jpg', // Antes
    'images/cidade-sem-agua.png', // Depois
    'images/inundacao-carro.jpg', // Antes
    'images/carro-sem-agua.png' // Depois
]
let labels = [
    'Antes',
    'Depois',
    'Antes',
    'Depois'
]

let alts = [
    'Imagem de casas inundadas',
    'Imagem da casas sem água',
    'Imagem de um carro inundado',
    'Imagem do carro sem água'
]
let time = 3000

function changeImg() {
    document.getElementById("slide").src = image[i]
    document.getElementById("antes-depois-subtitulo").textContent = labels[i]
    document.getElementById("slide").alt = alts[i]

    if (i < image.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout(changeImg, time)
}
window.onload = changeImg;



document.querySelector('.menu-hamburguer').addEventListener('click', function () {
    document.querySelector('.lista-menu').classList.toggle('ativo');
});

const html = document.querySelector('html');
const btnsDarkMode = document.querySelectorAll('#switch-dark');
const btnsLightMode = document.querySelectorAll('#switch-light');
const btnsOrangeMode = document.querySelectorAll('#switch-orange');

// Troca para branco no darkmode
btnsDarkMode.forEach(btn => {
    btn.addEventListener('click', () => {
        html.classList.add('darkmode');
        html.classList.remove('orangemode');
        document.querySelectorAll('#icon-sun').forEach(img => img.src = './images/icon-sun-light.png');
        document.querySelectorAll('#icon-moon').forEach(img => img.src = './images/icon-moon-light.png');
        document.querySelectorAll('#logo-zaster-branco').forEach(img => img.src = './images/logo.png');
        document.querySelectorAll('.logo-zaster').forEach(img => img.src = './images/logo-branco.png');
    });
});

// Troca para preto no lightmode
btnsLightMode.forEach(btn => {
    btn.addEventListener('click', () => {
        html.classList.remove('darkmode');
        html.classList.remove('orangemode');
        document.querySelectorAll('#icon-sun').forEach(img => img.src = './images/icon-sun.png');
        document.querySelectorAll('#icon-moon').forEach(img => img.src = './images/icon-moon.png');
        document.querySelectorAll('#logo-zaster-branco').forEach(img => img.src = './images/logo-branco.png');
        document.querySelectorAll('.logo-zaster').forEach(img => img.src = './images/logo.png');
    });
});
btnsOrangeMode.forEach(btn => {
    btn.addEventListener('click', () => {
        html.classList.remove('darkmode');
        html.classList.add('orangemode');
        document.querySelectorAll('#icon-sun').forEach(img => img.src = './images/icon-sun-brown.png');
        document.querySelectorAll('#icon-moon').forEach(img => img.src = './images/icon-moon-brown.png');
        document.querySelectorAll('#logo-zaster-branco').forEach(img => img.src = './images/logo-brown.png');
        document.querySelectorAll('.logo-zaster').forEach(img => img.src = './images/logo-brown.png');
    });
});

