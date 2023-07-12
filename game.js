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


gameoveraudio = new Audio('gameover.mp3');
// setTimeout(() => {
//   Audio.play
// }, 1000);

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

    if(offsetX < 90 && offsetY < 158){
        gameover.style.visibility = 'visible';
        car.classList.remove('carani')
        
     gameoveraudio.play();
     setTimeout(() => {
      gameoveraudio.pause();
     }, 1000);
    }

    else if(offsetX < 115 && cross){
        score +=1;
        updatescore(score);
        cross =false;
        setTimeout(()=>{
            cross = true;
        },1000)
        setTimeout(() => {
          durationani = parseFloat(window.getComputedStyle(car, null).getPropertyValue('animation-duration'));
       newduration = durationani - 0.1 ;
       car.style.animationDuration =  newduration + 's' ;
        }, 2000);
       
    }
   

},60)


function updatescore(score) {
  yourscore.innerHTML = "Your Score: " + score;
}





