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



document.querySelector('.menu-hamburguer').addEventListener('click', function() {
    document.querySelector('.lista-menu').classList.toggle('ativo');
});
