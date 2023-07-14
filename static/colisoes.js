let vida = 3
let ivuneravel = false

const isVerticalCloudOutOfBoard = () =>{
    const imgElements = document.querySelectorAll('.cloud')
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

    const img2 = document.querySelectorAll('.cloud-H-D')
    img2.forEach(element => {
      if(parseInt(element.offsetLeft)<-50){
        element.parentNode.removeChild(element)
      }
    })

    const img3 = document.querySelectorAll('.cloud-H-E')
    img3.forEach(elemen => {
      if(parseInt(elemen.offsetRight)<50){
        elemen.parentNode.removeChild(elemen)
      }
    })
}

setInterval(isVerticalCloudOutOfBoard, 50)  