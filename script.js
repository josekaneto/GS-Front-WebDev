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
    'Imagem de um carro inundado',
    'Imagem de uma placa inundada',
    'Imagem de uma placa inundada'
]
let time = 3000

function changeImg() {
    document.getElementById("slide").src = image[i]
    document.getElementById("antes-depois-subtitulo").textContent = labels[i]
    document.getElementById("slide").alt = labels[i]

    if (i < image.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout(changeImg, time)
}
window.onload = changeImg;
