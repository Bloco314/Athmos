const hero = document.querySelector('.hero')
let heroRight = parseInt(hero.style.right) || 0
let heroTop = parseInt(hero.style.top) || 0

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight' || event.code === 'KeyD') {
    if (heroRight > 0) {
      heroRight -= 10
      hero.style.right = heroRight + 'px'
    }
  } else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
    if (heroRight < 1020) {
      heroRight += 10
      hero.style.right = heroRight + 'px'
    }
  } else if (event.code === 'ArrowUp' || event.code === 'KeyW') {
    if (heroTop > 100) {
      heroTop -= 10
      hero.style.top = heroTop + 'px'
    }
  } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {   
    if (heroTop < 450) {
      heroTop += 10
      hero.style.top = heroTop + 'px'
    }
  }
});
