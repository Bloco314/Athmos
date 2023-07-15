function criarNuvemVertical() {
  for (let x = 0; x < dificuldade; x++) {
    const imgElement = document.createElement('img');
    imgElement.src = "/static/assets/cloud_grey.png";
    imgElement.classList.add('obstaculo-vertical');
    const random = Math.floor(Math.random() * 1000);
    imgElement.style.position = 'absolute';
    imgElement.style.left = random + 'px';
    const gameboard = document.querySelector('.game-board');
    gameboard.appendChild(imgElement);
  }
}

let invulneravel = false;

const isVerticalCloudOutOfBoard = () => {
  const imgElements = document.querySelectorAll('.obstaculo-vertical');
  imgElements.forEach((img) => {
    if (img.offsetTop > 460) {
      const placar = document.querySelector('.placar');
      placar.innerHTML = parseInt(placar.innerHTML) + 1;
      img.remove();

      if (parseInt(placar.innerHTML) >= 100) {
        window.location.href = nextLevel;
      }
    } else {
      if (Math.abs(img.offsetLeft - hero.offsetLeft) < 30 && Math.abs(img.offsetTop - hero.offsetTop) < 30) {
        if (!invulneravel) {
          invulneravel = true;
          setTimeout(() => {
            invulneravel = false;
          }, 2500);
          if (vida === 3) {
            vida -= 1;
            const core = document.querySelector('.core-tree');
            core.remove();
          } else if (vida === 2) {
            vida -= 1;
            const core = document.querySelector('.core-two');
            core.remove();
          } else {
            window.location.href = '/gameover';
          }
        }
      }
    }
  });
}

setInterval(isVerticalCloudOutOfBoard, 50);
setInterval(criarNuvemVertical, 3000);
setInterval(criarNuvemVertical, 7000);
