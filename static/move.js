const hero = document.querySelector('.hero')

const move_left = () => {
    if(parseInt(hero.style.right)<1020){
        let x = parseInt(hero.style.right)+10
        let novo =  parseInt(x)+'px'
        hero.style.right = novo
    }
}

const move_right = () => {
    if(parseInt(hero.style.right)>0){
        let x = parseInt(hero.style.right)-10
        let novo =  parseInt(x)+'px'
        hero.style.right = novo
    }
}

const move_up = () => {
    if(parseInt(hero.style.top)>100){
        let x = parseInt(hero.style.top)-10
        let novo =  parseInt(x)+'px'
        hero.style.top = novo
    }
}

const move_down = () => {
    if(parseInt(hero.style.top)<450){
        let x = parseInt(hero.style.top)+10
        let novo =  parseInt(x)+'px'
        hero.style.top = novo
    }
}

document.addEventListener('keydown',(event)=>{
    if(event.code == 'ArrowRight' || event.code == 'KeyD'){
        move_right()
    }else
    if(event.code == 'ArrowLeft' || event.code == 'KeyA'){
        move_left()
    }else
    if(event.code == 'ArrowUp' || event.code == 'KeyW'){
        move_up()
    }else
    if(event.code == 'ArrowDown' || event.code == 'KeyS'){
        move_down()
    }
})