function criarNuvemVertical() {
  for (x = 0; x<dificuldade ; x++){
    const imgElement = document.createElement('img');
    imgElement.src = "/static/assets/cloud_grey.png";
    imgElement.classList.add('cloud')
    var random = Math.floor(Math.random() * (1000));
    imgElement.style.position = 'absolute'
    imgElement.style.left = random + 'px'
    const gameboard = document.querySelector('.game-board')
    gameboard.appendChild(imgElement);
  }
}

setInterval(criarNuvemVertical, 3000);
setInterval(criarNuvemVertical, 7000);