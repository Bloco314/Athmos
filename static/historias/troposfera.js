const texto = document.querySelector('.info')

let index = 0
let lista_falas = [
    "ganhe 100 pontos!",
    "A troposfera é a camada mais baixa da atmosfera terrestre. Ela ontém aproximadamente 75% da massa atmosférica",
    "Como um ser de energia posso renascer se derrotado, mas só segue o roteiro ok?"
]

function fala () {
    if (lista_falas.length > index){
        texto.innerHTML = lista_falas[index]
        index++
    }
}

setInterval(fala,5000)
