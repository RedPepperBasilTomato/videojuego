function playerSetUp(){ 

if(canMove == true){
  if ((kb.pressing('w'))) {
    player.vel.y = -4;
    
  

  } else if ( (kb.pressing('s'))) {
    player.vel.y = 4;
  

  }  else {
    player.vel.y = 0;

  }

  if (  (kb.pressing('a'))) {
    player.vel.x = -4;
    player.mirror.x = false;
   

  } else if ( (kb.pressing('d')))  {
    player.vel.x =4;
    player.mirror.x = true;


  } else {
    player.vel.x = 0;

  }
  }
  if (player.x  < 20) {
    player.x = 20;
  }
  if (player.x  > 1500) {
    player.x = 1500;
  }
  if (player.y > 380) {
    player.y = 380;
  }
  if (player.y < 0){
  player.y = 0;
  }
  camera.x = player.x + 102;
  ground.x = camera.x; 

  //mechanics
health();
hide();
  shoot();




  
}// END OF DEFAULT PLAYER SET UP

/*MECHANICS*/

function hide(){ //KELP FOREST
  if (kb.pressing('shift')) {
    player.overlaps(kelps);
  } 
  else {
    player.collides(kelps);
  }
}

function dash() {
  if (kb.presses('space')) {
    if(kb.pressing('w') || ( kb.pressing('s'))){
      player.vel.y *= 10;
    }
    else if( kb.pressing('a') || ( kb.pressing('d'))){
    player.vel.x *= 10;
    }
   else{
   player.vel.x += 76;
    }
}
}



function shoot(){ //MAIN ABILITY
  if (kb.presses('z')){
    bullet = new bullets.Sprite(player.x+50, player.y, 10, "n");
    
    if ((kb.pressing('left'))){
    
    bullet.vel.x = -8; 

  }
     else if ((kb.pressing('right'))){
  
    bullet.vel.x = 8; 

  }
    else if ((kb.pressing('up'))){
  
    bullet.vel.y = -8; 

  }

      else if ((kb.pressing('down'))){
 
    bullet.vel.y = 8; 

  } else{
        bullet.vel.x = 5;
  }

    

    
    }

  
}

function shine(){ //SUNKEN SHIP
  if (!light) {  
    noStroke();
    light = new Sprite(player.x, player.y, 80, "n");
     light.color = (255, 255, 0, 150);
    

  }

  light.x = player.x; 
  light.y = player.y; 
   light.layer = 2;
   player.layer = 5;

/*middle finger*/
}








/*DAMAGE AND HEALTH*/ 

function health(){
if(!healthBar){
  healthBar = new Sprite(50, 20, 100, 10, "n"); 
}
  healthBar.x = player.x;
  collision();
  

  if(totHealth <= 100 && totHealth > 50){
      healthBar.color = "green";
  } else if(totHealth <= 50  && totHealth >25){
    healthBar.color = "yellow";
  } else{
    healthBar.color = "red";
  }
  
}

function collision()
{

  //if player collides with certain enemies, decAmt is a certain amt. 
  if(player.colliding(enemies)){
  healthBar.w --;
  totHealth --;
  
  }

  if (bullets.overlaps(enemies)){
    enemyHealthBar.w -= 12.5;
    
  }

  if(enemyHealthBar.w <= 0)
  {
    enemyHealthBar.remove();
    enemies.remove();
    
  }

  }

  
  
  


function death(){
    player.x = -1000; 
  player.y = -1000; 
    enemies.remove();
    platforms.remove(); 
    enemyHealthBar.remove();
    healthBar.x = -1500;
  healthBar.w = 100; 
}

function deathCard(){
  fill(0);
  textSize(20);
  textAlign(CENTER, TOP);
  text("Loser lmao \n Click anywhere to try again", width/2, height/2 -150);
}

