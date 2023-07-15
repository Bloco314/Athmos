function criarMeteoroideVertical() {
  const gameboard = document.querySelector('.game-board');
  const imgElements = [];

  for (let x = 0; x < dificuldade; x++) {
    const imgElement = document.createElement('img');
    imgElement.src = "/static/assets/meteoroide.png";
    imgElement.classList.add('obstaculo-vertical2');
    const random = Math.floor(Math.random() * 1000);
    imgElement.style.position = 'absolute';
    imgElement.style.left = random + 'px';
    gameboard.appendChild(imgElement);
    imgElements.push(imgElement);
  }

  return imgElements;
}

let invulneravel = false;

const isMeteoroideVerticalOutOfBoard = () => {
  const placar = document.querySelector('.placar');
  const imgElements = document.querySelectorAll('.obstaculo-vertical2');

  imgElements.forEach((img) => {
    if (img.offsetTop > 460) {
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

setInterval(isMeteoroideVerticalOutOfBoard, 50);
setInterval(criarMeteoroideVertical, 3000);
setInterval(criarMeteoroideVertical, 7000);
