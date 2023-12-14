
/* VARIABLES */
let playButton, directionsButton, backButton, tryAgain, giveUp; //for homescreen
let player, ground, theEnd, bullets, light; //for ALL
let healthBar, enemyHealthBar, e1, eH1, e2, eh2; //for ALL
let totHealth = 100;
let enemies, kelps, platforms,lamps, rocks, invisibles, lanterns, corals; //ALL INTERACTIVE SPRITES 
let canMove = true; 
let eMove = false;
let textBubbles; 
let lvl1End;//for lvl1
let lvl2End;
let lvl3End;
let lvl4End;
let lvl5End;
let screen = 0;
let lvl = 0; 

/* PRELOAD LOADS FILES */
function preload() {
boatImg = loadImage('assets/TestFish.png');
platImg = loadImage('assets/TestCoral.png');
backImg = loadImage('assets/TestBackground.jpg');
  kelpImg = loadImage('assets/TestKelp.png');
  lampImg = loadImage('assets/TestRadio.png');
  coralImg = loadImage('assets/TestCoral.png');
  clearImg = loadImage('assets/clear.png');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  homeScreen();
  
  boatImg.resize(100,0);// (controls width, 0)
  
  platImg.resize(25, 0);
  lampImg.resize(150, 0);
  kelpImg.resize(50, 0);
  coralImg.resize(50, 0);
  

  platforms = new Group(); //just in general--- walls
  platforms.color = color(16,14,54);
  platforms.collider = "s";
  platforms.friction = 0;
  

  enemies = new Group(); //any enemy 
  enemies.collider = "k";
  enemies.color = color(16,14,54);
  


  enemyHealthBar = new Group();
  enemyHealthBar.collider = "n";  //Enemy health bar display 
  enemyHealthBar.color = 'red';
  enemyHealthBar.w = 50; 
  enemyHealthBar.h = 5; 

  enemyHealthBar.x = enemies.x;
  enemyHealthBar.y = enemies.y - 25;

  bullets = new Group();  //bullet shot by player
  bullets.vel.x = 0;
  bullets.vel.y = 0;
  bullets.life = 50; 

  kelps = new Group(); //player can hide in kelp 
  kelps.collider = "s";
  kelps.friction = 0;

  rocks = new Group(); //player runs into rocks 
  rocks.collider = "s";
  rocks.friction = 0;
  rocks.color = 'grey';

  corals = new Group(); // player moves over coral
  corals.coliider = "n"
  corals.friction = 0;
  corals.w = 20;
  corals.h = 50;

  lamps = new Group();  //Guiding player; tutorial
  lamps.collider = "n";
  lamps.friction = 0;
  lamps.color = 'yellow';
  lamps.w = 10;
  lamps.h = 100; 
  

  invisibles = new Group();  //when player crosses, it triggers an event 
  invisibles.collider = "n";   //REMEMBER: y value must be 200 for it to cover whole screen 
  invisibles.color = 'white'; 
  invisibles.w = 1;
  invisibles.h = windowHeight; 
   

  lanterns = new Group();  //When player touches, they 'win' a level 

  textBubbles = new Group();  //text that appears when player triggers event
  textBubbles.collider = "n"; 
  textBubbles.color = 'white'; 
  
  

 lamps.layer = 2.5; //light is layer 2, player is layer 3
  textBubbles.layer = 1; 
  corals.layer = 4; 
   
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen == 0) {
    if(directionsButton.mouse.presses()){
      screen = 1; //directions
      directionsScreen();
    } else if (playButton.mouse.presses()){
      screen = 2;
      tutorialScreenAssests();
      
    }
  }


  if (screen == 1 ){//directions stuff 
    if(backButton.mouse.presses()){
      screen = 0;
      backButton.pos = {x: -500, y:-500};
      homeScreen(); //back to home 
      
    }
  }
  //MAIN GAME HOMIES 
  if (screen == 2){ //TUTORIAL SLIDE 
    background(backImg);
    player.debug = mouse.pressing();
    player.mirror.x = true;
    invisibles.debug = mouse.pressing();
    playerSetUp();
   
    

      e1.moveTowards(player);  //ENEMY NUMBER ONE 
      e1.rotateTowards(player); 
      e1.speed = 0;
       
       eh1.x = e1.x; 
       eh1.y = e1.y - 25;
        /*END*/
      
      e2.moveTowards(player);  //ENEMY NUMBER TWO
      e2.rotateTowards(player); 
      e2.speed = 0.7;

       eh2.x = e2.x; 
       eh2.y = e2.y - 25;
        /*END*/
     //EVENT NUMBER 1: RADIO TELLS U HOW TO MOVE
     
   if (player.overlapping(invis1))
   {
     txt = new textBubbles.Sprite(200, 200, 50, 50, "n");
      txt.text = "W A S D to move \n Press E to Continue";
      txt.textSize = 10;
       canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
     player.vel.x = 0; 
     player.vel.y = 0; 
      invis1.remove(); 
     }
    /*ALL TEXT STUFF */ 
    if(canMove == false){
        if(kb.presses("e")){
          canMove = true;
          textBubbles.remove(); 
        } else{
          canMove = false; 
        }
    }
    //END EVENT NUMBER 1: RADIO1 ============================================

    /* EVENT NUMBER 2: RADIO 2 ENEMY BATTLES */
    if (player.overlapping(invis2)){
       txt = new textBubbles.Sprite(200, 200, 50, 50, "n");
      txt.text = "W A S D to move \n Press E to Continue";
        txt.textSize = 10;
         canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
       player.vel.x = 0; 
       player.vel.y = 0; 
        invis2.remove(); 
    }

    if(canMove == false){
        if(kb.presses("e")){
          canMove = true;
           eMove = true;
          textBubbles.remove(); //obeth yeah go off  
        } else{
          canMove = false; 
        }
    }
    //END EVENT 2: ENEMY BATTLES ===========================================


    if(totHealth == 0){
      screen = 100;
      death();
    }

    
    if(player.collides(theEnd)){
      platforms.remove(); 
      theEnd.remove(); 
      enemies.remove(); 
      rocks.remove();
      lamps.remove();
      invisibles.remove();
      corals.remove();
      textBubbles.remove();
      enemyHealthBar.remove();
      player.y = 350;
      player.x = 20; 
      playLvl1();
      screen = 30; 
    }

    
  }

  if(screen == 30){ //lvl 1: coral reef//chemical enemy
    background(132, 141, 217);
     
    playerSetUp();
    if(player.collides(lvl1End)){
      lvl1End.remove(); 
      platforms.remove(); 
      enemies.remove();
      player.y = 350;
      player.x = 20; 
      screen = 40;
      playLvl2();
  }
    
  }

  if(screen ==40){ //lvl2: kelp forest // oil enemy
    background(132, 141, 217);
    playerSetUp();
    if(player.collides(lvl2End)){
        lvl2End.remove();
      platforms.remove(); 
      enemies.remove();

      player.y = 350;
      player.x = 20; 
      screen = 50;
      playLvl3();
  }
  }

  if (screen == 50){//lvl 3:sunken ship //plastic enemy
    background(132, 141, 217);
    playerSetUp();
    if(player.collides(lvl3End)){
        lvl3End.remove();
      platforms.remove(); 
      enemies.remove();

      player.y = 350;
      player.x = 20; 
      playLvl4();
      screen = 60;
  }
  }

  if (screen == 60){ //lvl 4: whale fall // net releasing
    background(132, 141, 217);

    playerSetUp();
    if(player.collides(lvl4End)){
      lvl4End.remove();
      platforms.remove(); 
      enemies.remove();

      player.y = 350;
      player.x = 20; 
      playLvl5();
      screen = 70;
  }
  }

  if (screen == 70){ //lvl 5: underwater volcano 
    background(132, 141, 217);

    playerSetUp();
    if(player.collides(lvl5End)){
      lvl5End.remove();
      platforms.remove(); 
      enemies.remove();

      player.y = 350;
      player.x = 20; 
      screen = 80;
  }
  }

  if(screen == 80){ //END SCREEN
    background(132, 141, 217);
    player.remove(); 
    enemies.remove();
    platforms.remove();
    light.remove(); 
    
    fill(255);
    textSize(40);
    textAlign(CENTER, TOP);
    text("thank for playing", width / 2, height / 2 - 150);
  }
if(screen == 100){ //death for tutorial 
  background(255);
  deathCard();
    if (mouse.pressed()){
        tutorialScreenAssests(); 
      screen = 2;  
  }

  }//end death


}//end of DRAW
