// document.onkeydown = function (e){
//     console.log("key code is", e.keyCode)

//     if(e.keyCode== 38){
//         heroo = document.querySelector('.hero');
//         heroo.classList.add('animatehero');
//         setInterval(()=>{
//             heroo.classList.remove('animatehero');
//         },800);
//     }
//  }

score = 0;
cross = true;


let animationInterval;

document.onkeydown = function(e) {
  console.log("key code is", e.keyCode);

  if (e.keyCode === 38) {
    const hero = document.querySelector('.hero');
    hero.classList.add('animatehero');

    clearInterval(animationInterval); // Clear any existing intervals

    animationInterval = setInterval(() => {
      hero.classList.remove('animatehero');
      setTimeout(() => {
        hero.classList.remove('animatehero');
      }, 0); // Add the class back immediately after removing it
    }, 700);
  }
   if(e.keyCode == 39) {
     hero = document.querySelector('.hero');
   
   heroX =parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
     hero.style.left = heroX + 112 + "px";
 }
 if(e.keyCode == 37) {
    hero = document.querySelector('.hero');
  
  heroX =parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
    hero.style.left = (heroX - 112 )+ "px";
}
}




setInterval(()=>{

    hero = document.querySelector('.hero');
    gameover = document.querySelector('.gameover');
    car = document.querySelector('.car');

    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));
    cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('top'));

    offsetX = Math.abs(hx-cx);
    offsetY = Math.abs(hy-cy);

    console.log(offsetX,offsetY)

    if(offsetX < 97 && offsetY < 178){
        gameover.style.visibility = 'visible';
        car.classList.remove('carani')
    }
    else if(offsetX < 115 && cross){
        score +=1;
        updatescore(score);
        cross =false;
        setTimeout(()=>{
            cross = true;
        },1000)
    }
   

},100)


function updatescore(score) {
  yourscore.innerHTML = "Your Score: " + score;
}





