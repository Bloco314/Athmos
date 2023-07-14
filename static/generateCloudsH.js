function criarNuvemHorizontal() {
  let x
  for (x=0;x<poluicao;x++){
      const imgElement = document.createElement('img');
      imgElement.src = "/static/assets/clouds.png";
      imgElement.classList.add('cloud-H-D')
      var random = Math.floor(Math.random() * (801)) + 50;
      imgElement.style.position = 'absolute'
      imgElement.style.top = random + 'px'
      const gameboard = document.querySelector('.game-board')
      gameboard.appendChild(imgElement);

      const imgElement2 = document.createElement('img');
      imgElement2.src = "/static/assets/clouds.png";
      imgElement2.classList.add('cloud-H-E')
      var random = Math.floor(Math.random() * (801)) + 50;
      imgElement2.style.position = 'absolute'
      imgElement2.style.top = random + 'px'
      gameboard.appendChild(imgElement2);
  }
}
setInterval(criarNuvemHorizontal, 5000);