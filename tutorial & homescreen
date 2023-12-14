

// HOME SCREEN && TUTORIAL 
function homeScreen() {
  screen = 0;
  background(132, 141, 217);
  noStroke();

  //Game title
  fill(255);
  textSize(40);
  textAlign(CENTER, TOP);
  text("Me when videogame", width / 2, height / 2 - 150);

  //Play button
  playButton = new Sprite(width / 2, height / 2, 100, 50, 'k');
  playButton.color = color(106, 113, 173);
  playButton.textColor = "white";
  playButton.textSize = 20;
  playButton.text = "Play!";

  //Directions button
  directionsButton = new Sprite(width / 2, height / 2 + 50, 90, 30, 'k');
  directionsButton.color = color(106, 113, 173);
  directionsButton.textColor = "white";
  directionsButton.textSize = 15;
  directionsButton.text = "TSA stuff";

}

function directionsScreen() {
  background(132, 141, 217);
  playButton.pos = { x: -11200, y: -1300 };
  directionsButton.pos = { x: -1500, y: -4100 };

  //Directions (description of game)
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);


  //Back button
  backButton = new Sprite(width / 2, height / 2 + 50, 125, 40, "k");
  backButton.color = color(106, 113, 173);
  backButton.textColor = "white";
  backButton.textSize = 15;
  backButton.text = "Back to Home";
}

function tutorialScreenAssests() {//MAIN TUTORIAL SCREEN
  lvl = 0;
  totHealth = 100;
  eHealth = 100;
  canMove = true; 


  //Create player
  playButton.pos = { x: -5100, y: -5100 };
  directionsButton.pos = { x: -6100, y: -6110 };
  //player

  //(x,y,w,h,collider)
  e1 = new enemies.Sprite(1300, 320, 20);
  eh1 = new enemyHealthBar.Sprite(1300, 300, 50, 5, "n");
  eMove = false; 

  e2 = new enemies.Sprite(1200, 220, 20);
  eh2 = new enemyHealthBar.Sprite(1200, 200, 50, 5, "n");


  //RADIO LAMP 
  lamp1 = new lamps.Sprite(lampImg, 300, 375);
  lamp2 = new lamps.Sprite(lampImg, 1000, 375);

  //TRIGGERING EVENTS
  invis1 = new invisibles.Sprite(clearImg, 300, 200); 
  invis2 = new invisibles.Sprite(clearImg, 1000, 200); 
  //TEXT BUBBLES



  // design layout
  tallFloorRock = new rocks.Sprite(500, 300);
  shortTopRock = new rocks.Sprite(500, 20);
  tallTopRock = new rocks.Sprite(800, 20);
  shortFloorRock = new rocks.Sprite(800, 450);

  tallFloorRock.w = 50;
  tallFloorRock.h = 300;
  shortTopRock.w = 50;
  shortTopRock.h = 30;
  tallTopRock.w = 50;
  tallTopRock.h = 500;
  shortFloorRock.w = 50;
  shortFloorRock.h = 130;




  //CREATE GROUND
  ground = new Sprite(width / 2, 500, windowWidth, 150, "s"); //"k = kinetic, s = static"
  ground.color = color(100, 200, 200);
  ground.friction = 0;
  ground.x = camera.x;
  getPlayer();

  player.pos = { x: 20, y: 350 };


  healthBar.x = player.x;
  if (eHealth == 0) {
    enemies.remove();
  }

  //end of tutorial
  theEnd = new Sprite(1450, 50, 20, 40, "k");
}

function getPlayer() {
  if (!player) {  // Check ifplayer has not been created
    player = new Sprite(boatImg, 20, 350);
    player.width = 85;
    player.height = 40;
    player.color = color(67, 66, 140);
    player.rotationLock = true;
    player.vel.x = 0;
    player.vel.y = 0;
    player.acceleration = 0;
    player.friction = 0;
    camera.x = player.x + 102;
    playerSetUp();
  }



}
