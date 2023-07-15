function criarNuvemVertical() {
    for (x = 0; x<dificuldade ; x++){
      const imgElement = document.createElement('img');
      imgElement.src = "/static/assets/meteoroide.png";
      imgElement.classList.add('obstaculo-vertical2')
      var random = Math.floor(Math.random() * (1000));
      imgElement.style.position = 'absolute'
      imgElement.style.left = random + 'px'
      const gameboard = document.querySelector('.game-board')
      gameboard.appendChild(imgElement);
    }
  }
  
  let ivuneravel = false
  
  const isVerticalCloudOutOfBoard = () =>{
      const imgElements = document.querySelectorAll('.obstaculo-vertical2')
      imgElements.forEach( img => {
        if (parseInt(img.offsetTop) > 460){
          const placar = document.querySelector('.placar')
          let temp = parseInt(placar.innerHTML)+1
          placar.innerHTML = temp
          img.parentNode.removeChild(img)
  
          if( temp>=100 ){
            window.location.href = nextLevel
          }
        }else{
          if(Math.abs(img.offsetLeft - hero.offsetLeft)<30 
          && Math.abs(img.offsetTop - hero.offsetTop)<30){
            if (!ivuneravel){
              ivuneravel = true
              setTimeout(()=>{
                ivuneravel = false
              },2500)
              if (vida == 3){
                vida -= 1
                const core = document.querySelector('.core-tree')
                core.parentNode.removeChild(core)
              }else
              if (vida == 2){
                vida -= 1
                const core = document.querySelector('.core-two')
                core.parentNode.removeChild(core)
              }else{
                window.location.href = '/gameover'
              }
            }
          }
        }
      })
  }
  
  setInterval(isVerticalCloudOutOfBoard, 50)  
  setInterval(criarNuvemVertical, 3000);
  setInterval(criarNuvemVertical, 7000);