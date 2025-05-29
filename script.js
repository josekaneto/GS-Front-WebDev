let i = 0
let image = [
    'images/casas-inundadas.jpg', // Antes
    'images/inundacao-carro.jpg', // Depois
    'images/placa-inundada.jpg', // Antes
    'images/placa-inundada.jpg' // Depois
]
let labels = [
    'Antes',
    'Depois',
    'Antes',
    'Depois'
]
let time = 3000

function changeImg() {
    document.getElementById("slide").src = image[i]
    document.getElementById("antes-depois-subtitulo").textContent = labels[i]

    if (i < image.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout(changeImg, time)
}
window.onload = changeImg;
