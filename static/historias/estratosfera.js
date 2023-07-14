const texto = document.querySelector('.info')

let index = 0
let lista_falas = [
    "ganhe 100 pontos!",
    "Estava facil ... até agora",
    "A faixa ao fundo é a camada de ozônio!",
    "stratus signifca camada em latim"
]

function fala () {
    if (lista_falas.length > index){
        texto.innerHTML = lista_falas[index]
        index++
    }
}

setInterval(fala,5000)
