const texto = document.querySelector('.info')

let index = 0
let lista_falas = []

function fala () {
    if (lista_falas.length > index){
        texto.innerHTML = lista_falas[index]
        index++
    }
}

setInterval(fala,5000)
