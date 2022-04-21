//alert("Segundo Desafio da Dio")
// aplicação  para simular a mudança das palavras de forma simples
let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++

    const ALLOW_LOOP = currentImageIndex >= max;

    if (ALLOW_LOOP) {

         currentImageIndex = 0
     }

    images[currentImageIndex].classList.add("selected")
    
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)

}

window.addEventListener("load", start)
