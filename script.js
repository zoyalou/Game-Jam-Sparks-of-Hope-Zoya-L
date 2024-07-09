/* VARIABLES */
let screen = 2;
let exitDoor;
let diningButton, bedroomButton;
let leftButton, rightButton;
let xButton;
let mazeGame, keyBox;
let gameWindow, gameInstructions;
let mazeWindow;
  let player, walls, mazeSpark;
let code1, code2, code3;
let code1Value = 0, code2Value = 0, code3Value = 0;
let keyBoxUnlock;
let collectWindow;
  let catcher, fallingObject, scoreCounter = 0, score, collectSpark, collectWon = false;
let platWindow;
  let platSpark;
let platGame, collectGame;
let spark1 = false, spark2 = false, spark3 = false;
let key;
let keyObtained = false;
let escapeMsg, noEscapeMsg;

/* PRELOAD LOADS FILES */
function preload(){
  doorRoom = loadImage("assets/sad_doorsroom.png");
  bedRoom = loadImage("assets/sad_bedroom.png");
  diningRoom = loadImage("assets/sad_diningroom.png");
  outsideScreen = loadImage("assets/happy_outside.webp");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(doorRoom);

  //set maze game button
  mazeGame = new Sprite(-100, -100, 130, 90, "k");
  strokeWeight(0);
  // mazeGame.text = "Maze Game";
  
  //set key box button
  keyBox = new Sprite(-100, -100, 60, 110, "k");
  strokeWeight(0);
  // keyBox.text = "Key Box";

  //set platformer game button
  platGame = new Sprite(-100, -100, 70, 100, "k");
  strokeWeight(0);
  // platGame.text = "Platformer \nGame";
  
  //set collect game button
  collectGame = new Sprite(-100, -100, 160, 70, "k");
  strokeWeight(0);
  // collectGame.text = "Collect Game";
  
  //set exit door
  exitDoor = new Sprite(200, 215, 80, 175, "s");
  // exitDoor.color = "purple";
  // exitDoor.text = "exit door";
  exitDoor.shapeColor.setAlpha(0);

  //set escape messages
  noEscapeMsg = new Sprite(-100, -100, 290, 120, "s");
  noEscapeMsg.color = color(3, 48, 70);
  noEscapeMsg.text = "This door needs a key...";
  noEscapeMsg.textSize = 20;
  noEscapeMsg.textColor = color(255, 255, 255);

  escapeMsg = new Sprite(-100, -100, 310, 60, "s");
  escapeMsg.color = "white";
  escapeMsg.text = "You've escaped the Room of Doubt and Despair!";
  escapeMsg.textColor = color(3, 48, 70);
  escapeMsg.textSize = 14;

  //set game windows
  //window
  gameWindow = new Sprite(-500, -500, 320, 320, "none");
  gameWindow.color = color(120, 144, 157);
  //instructions
  gameInstructions = new Sprite(-500, -500, 250, 50, "none");
  gameInstructions.shapeColor.setAlpha(0);
  gameInstructions.textColor = "white";
  //maze window
  mazeWindow = new Sprite(-500, -500, 270, 250, "none");
  mazeWindow.color = "white";
    //maze sprites
    mazeSpark = new Sprite(-100, -100, 30, "s");
    mazeSpark.color = "yellow";
    mazeSpark.text = "4";
  //keybox code windows
    code1 = new Sprite(-100, -100, 80, 110, "static");
    code1.color = "white";
    code1.text = code1Value;
    code1.textColor = color(3, 48, 70);
    code1.textSize = 50;
    code2 = new Sprite(-100, -100, 80, 110, "static");
    code2.color = "white";
    code2.text = code2Value;
    code2.textColor = color(3, 48, 70);
    code2.textSize = 50;
    code3 = new Sprite(-100, -100, 80, 110, "static");
    code3.color = "white";
    code3.text = code3Value;
    code3.textColor = color(3, 48, 70);
    code3.textSize = 50;
  //keybox unlock button/text
  keyBoxUnlock = new Sprite(-500, -500, 100, 50, "static");
  keyBoxUnlock.shapeColor.setAlpha(0);
  //platformer window
  platWindow = new Sprite(-500, -500, 270, 250, "none");
  platWindow.color = color(3, 48, 70);
    //platformer sprites
    platSpark = new Sprite(-100, -100, 30, "s");
    platSpark.color = "yellow";
    platSpark.text = "5";
  //collect window
  collectWindow = new Sprite(-500, -500, 270, 250, "none");
  collectWindow.color = "white";
    //collect sprites
    catcher = new Sprite(-100, -100, 100, 20, "k");
    fallingObject = new Sprite(-500, -500, 20, "s");
    score = new Sprite(-500, -500, 50, 50, "none");
    score.shapeColor.setAlpha(0);
    score.textColor = color(3, 48, 70);
    score.textSize = 13;
    collectSpark = new Sprite(-100, -100, 20, "s");
    collectSpark.color = "yellow";
    collectSpark.text = "6";
  //game sprites (general)
  player = new Sprite(-1000, -1000, 30, 30);
  player.color = color(183, 183, 183);
  player.rotationLock = true;
  walls = new Group();
  walls.collider = 'static';

  //set buttons
  leftButton = new Sprite(-100, -100, 35, 25, "s");
  leftButton.color = color(14, 107, 104);
  leftButton.text = "<";
  leftButton.textColor = color(255, 255, 255);

  rightButton = new Sprite(-100, -100, 35, 25, "s");
  rightButton.color = color(14, 107, 104);
  rightButton.text = ">";
  rightButton.textColor = color(255, 255, 255);

  diningButton = new Sprite(30, 230, 35, 25, "s");
  diningButton.color = color(14, 107, 104);
  diningButton.text = "<";
  diningButton.textColor = color(255, 255, 255);

  bedroomButton = new Sprite(370, 230, 35, 25, "s");
  bedroomButton.color = color(14, 107, 104);
  bedroomButton.text = ">";
  bedroomButton.textColor = color(255, 255, 255);

  xButton = new Sprite(-100, -100, 25, 25, "s");
  xButton.text = "X";
  xButton.textColor = color(255, 255, 255);
  xButton.textSize = 15;
  xButton.shapeColor.setAlpha(0);

  //the key!!
  key = new Sprite(-100, -100, 40, 20, "none");
  key.color = color(219, 172, 52);
  key.text = "key";
  key.textColor = color(255, 255, 255);
}

/* DRAW LOOP REPEATS */
function draw() {
  //if in dining room
  if (screen == 1) {
    background(diningRoom);
    
    // if right button pressed
    if (rightButton.mouse.presses()) {
      setDoorRoom();
    }
    
    //if maze game button pressed
    if (mazeGame.mouse.presses()) {
      // game window & x button & header appears
      gameWindow.pos = {x: 180, y: 205};
      xButton.pos = {x: 35, y: 60};
      gameInstructions.pos = {x: 180, y: 75};
      gameInstructions.text = "Collect the Spark of Hope!\nUse the arrow keys to move the player through the maze."
      gameInstructions.textSize = 12;
      // maze window appears
      mazeWindow.pos = {x: 180, y: 220};
      keyBox.collider = "none";
      mazeGame.collider = "none";
      // maze game sprites appear
      world.gravity.y = 0;
      player.pos = {x: 195, y: 120};
      walls.color = color(0);
      new walls.Sprite(180, 95, 270, 2); //top wall
      new walls.Sprite(315, 220, 2, 250); // right wall
      new walls.Sprite(180, 345, 270, 2); // bottom wall
      new walls.Sprite(45, 220, 2, 250); // left wall
      new walls.Sprite(90, 143, 2, 95);
      new walls.Sprite(220, 120, 2, 50);
      new walls.Sprite(175, 145, 90, 2);
      new walls.Sprite(135, 190, 90, 2);
      new walls.Sprite(265, 190, 2, 90);
      new walls.Sprite(195, 235, 140, 2);
      new walls.Sprite(245, 280, 140, 2);
      new walls.Sprite(265, 190, 2, 90);
      new walls.Sprite(240, 295, 2, 30);
      new walls.Sprite(125, 267, 2, 65);
      new walls.Sprite(155, 213, 2, 45);
      new walls.Sprite(105, 300, 40, 2);
      if (spark1 == false) {
        mazeSpark.pos = {x: 130, y: 215};
        mazeSpark.diameter = 30;
      }
    }
    // actually the maze game
    //move player
    if (kb.pressing("left")) {
      player.vel.x = -3;
    } else if (kb.pressing("right")) {
      player.vel.x = 3;
    } else if (kb.pressing("down")) {
      player.vel.y = 3;
    } else if (kb.pressing("up")) {
      player.vel.y = -3;
    } else {
      player.vel.x = 0;
      player.vel.y = 0;
    }
    //if player touches maze spark
    if (player.collides(mazeSpark)) {
      closeWindow();
      mazeSpark.pos = {x: 50, y: 20};
      mazeSpark.diameter = 20;
      spark1 = true;
    }
    
    //if key box button pressed
    if (keyBox.mouse.presses()) {
      // game window & x button & header appears
      gameWindow.pos = {x: 180, y: 205};
      xButton.pos = {x: 35, y: 60};
      gameInstructions.pos = {x: 180, y: 85};
      gameInstructions.text = "Click to change the numbers";
      gameInstructions.textSize = 20;
      gameInstructions.textColor = color(3, 48, 70);
      // key box code windows appear
      code1.pos = {x: 90, y: 170};
      code2.pos = {x: 180, y: 170};
      code3.pos = {x: 270, y: 170};
      keyBox.collider = "none";
      mazeGame.collider = "none";
      // key box button/message appears
      if (spark1 == true && spark2 == true && spark3 == true) {
        keyBoxUnlock.pos = {x: 180, y: 300};
        keyBoxUnlock.color = color(14, 107, 104);
        keyBoxUnlock.text = "Unlock";
        keyBoxUnlock.textColor = color(255, 255, 255);
        keyBoxUnlock.textSize = 17;
        keyBoxUnlock.collider = "static";
      } else {
        keyBoxUnlock.pos = {x: 180, y: 300};
        keyBoxUnlock.text = "You're too sad to do anything...maybe playing a few \ngames will lift your spirits? You remember that you \nleft *three* games lying around here somewhere...";
        keyBoxUnlock.textColor = color(3, 48, 70);
        keyBoxUnlock.textSize = 13;
      }
    }
    // if key box code windows are pressed
    if (code1.mouse.presses()) {
      print ("code 1 box pressed");
      if (code1Value < 9) {
        code1Value += 1;
        code1.text = code1Value;
      } else if (code1Value >= 9) {
        code1Value = 0;
        code1.text = code1Value;
      }
    }
    if (code2.mouse.presses()) {
      if (code2Value < 9) {
        code2Value += 1;
        code2.text = code2Value;
      } else if (code2Value >= 9) {
        code2Value = 0;
        code2.text = code2Value;
      }
    }
    if (code3.mouse.presses()) {
      if (code3Value < 9) {
        code3Value += 1;
        code3.text = code3Value;
      } else if (code3Value >=9) {
        code3Value = 0;
        code3.text = code3Value;
      }
    }
    //if all sparks collected and unlock button pressed
    if (spark1 == true && spark2 == true && spark3 == true) {
      if (keyBoxUnlock.mouse.presses()) {
        print ("unlock button pressed")
        if (code1Value == 6 && code2Value == 4 && code3Value == 5) {
          print ("key obtained");
          keyObtained = true;
          key.pos = {x: 120, y: 20};
          closeWindow();
        } else {
          print ("key not obtained");
          closeWindow();
        }
      }
    }
    //if x button pressed
    if (xButton.mouse.presses()) {
      print ("x pressed");
      closeWindow();
    }
  }

  //if in bedroom
  if (screen == 3){
    background(bedRoom);
    // if left button pressed
    if (leftButton.mouse.presses()) {
      setDoorRoom();
    }
    //if platformer game button pressed
    if (platGame.mouse.presses()) {
      // game window & x button & header appears
      gameWindow.pos = {x: 220, y: 205};
      xButton.pos = {x: 75, y: 60};
      gameInstructions.pos = {x: 220, y: 75};
      gameInstructions.text = "Collect the Spark of Hope!\nUse the arrow keys to move the player and space bar to jump."
      gameInstructions.textSize = 12;
      // platformer window appears
      platWindow.pos = {x: 220, y: 220};
      collectGame.collider = "none";
      platGame.collider = "none";
        //platformer game sprites appear
        world.gravity.y = 40;
        player.pos = {x: 170, y: 295};
        walls.color = "white";
        new walls.Sprite(220, 95, 270, 2); //top wall
        new walls.Sprite(355, 220, 2, 250); // right wall
        new walls.Sprite(220, 345, 270, 2); // bottom wall
        new walls.Sprite(85, 220, 2, 250); // left wall
        new walls.Sprite(165, 320, 160, 20); // 1st block
        new walls.Sprite(285, 255, 140, 20); // 2nd block
        new walls.Sprite(155, 200, 100, 20); // 3rd block
        new walls.Sprite(290, 140, 130, 20); // 4th block
        if (spark2 == false) {
          platSpark.pos = {x: 330, y: 120};
          platSpark.diameter = 20;
        }
    }
    //actually the platformer game
      //move player
      if (kb.pressing("left")) {
        player.vel.x = -5;
      } else if (kb.pressing("right")) {
        player.vel.x = 5;
      } else if (kb.presses(" ")) {
        player.vel.y = -10;
      }
      //if player touches platformer spark
      if (player.collides(platSpark)) {
        closeWindow();
        platSpark.pos = {x: 80, y: 20};
        platSpark.diameter = 20;
        spark2 = true;
      }
    //if collection game button pressed
    if (collectGame.mouse.presses()) {
      // game window & x button & header appears
      gameWindow.pos = {x: 220, y: 205};
      xButton.pos = {x: 75, y: 60};
      gameInstructions.pos = {x: 220, y: 75};
      gameInstructions.text = "Collect 10 Pieces of Confidence to gain a Spark of Hope!\nUse the arrow keys to move the basket."
      gameInstructions.textSize = 12;
      // collect window appears
      collectWindow.pos = {x: 220, y: 220};
      collectGame.collider = "none";
      platGame.collider = "none";
      //collect game sprites appear
      walls.color = "black";
      new walls.Sprite(220, 95, 270, 2); //top wall
      new walls.Sprite(355, 220, 2, 250); // right wall
      new walls.Sprite(220, 345, 270, 2); // bottom wall
      new walls.Sprite(85, 220, 2, 250); // left wall
      fallingObject.pos = {x: 150, y: 110};
      fallingObject.collider = "d";
      score.pos = {x: 115, y: 110};
      score.text = "Score: " + scoreCounter;
      catcher.pos = {x: 200, y: 330};
      world.gravity.y = 3;
    }
    //actually the collection game
      //if falling object reaches bottom, move back to random position at top
      if (fallingObject.collides(walls)) {
        fallingObject.pos.y = 110;
        fallingObject.pos.x = random(220, 355);
        fallingObject.vel.y = random(1,5);
        fallingObject.direction = "down";
      }
      //move catcher
      if (kb.pressing("left")) {
        catcher.vel.x = -3;
      } else if (kb.pressing("right")) {
        catcher.vel.x = 3;
      } else {
        catcher.vel.x = 0;
      }
      //Stop catcher at edges of screen
      if (catcher.x < 135) {
        catcher.x = 135;
      } else if (catcher.x > 305) {
        catcher.x = 305;
      }
    //If fallingObject collides with catcher, move back to random position at top
    if (fallingObject.collides(catcher)) {
      scoreCounter ++;
      score.text = "Score: " + scoreCounter;
      fallingObject.pos.y = 110;
      fallingObject.pos.x = random(220, 355);
      fallingObject.vel.y = random(1,5);
      fallingObject.direction = "down";
    }
    //win condition
    if (scoreCounter >= 10) {
      if (collectWon == false) {
        print ("collect game win");
        collectWon = true;
        collectSpark.pos = {x: 20, y: 20};
        spark3 = true;
        closeWindow();
      }
    }
    //if x button pressed
    if (xButton.mouse.presses()) {
      print ("x pressed");
      closeWindow();
    }
  }
  
  //if in doors room
  if (screen == 2) {
    background(doorRoom);
    // if left button pressed
    if (diningButton.mouse.presses()) {
      print ("to dining room");
      setDiningRoom();
    }
    // if right button pressed
    else if (bedroomButton.mouse.presses()) {
      print ("to bedroom");
      setBedRoom();
    }
    // if exit door pressed
    else if (exitDoor.mouse.presses()) {
      print ("exit door pressed");
      if (keyObtained == true) {
        print ("to outside");
        setOutside();
      }
      else if (keyObtained == false) {
        print ("no key");
        //no escape window pops up
        noEscapeMsg.pos = {x: 200, y: 230};
        xButton.pos = {x: 68, y: 183};
      }
    }
    // if x button pressed
    if (xButton.mouse.presses()) {
      print ("x pressed");
      closeWindow();
    }
  }
  
}

/* FUNCTIONS */
function setDiningRoom() {
  background(diningRoom);
  //add buttons
  exitDoor.pos = {x: -200, y: -200};
  rightButton.pos = {x: 370, y: 230};
  //remove buttons
  leftButton.pos = {x: -100, y: -100};
  diningButton.pos = {x: -100, y: -100};
  bedroomButton.pos = {x: -100, y: -100};
  
  //add box w key button
  keyBox.pos = {x: 35, y: 270};
  keyBox.collider = "s";
  keyBox.shapeColor.setAlpha(0);

  //add maze game button
  mazeGame.pos = {x: 200, y: 230};
  mazeGame.collider = "s";
  mazeGame.shapeColor.setAlpha(0);
  
  //set screen
  screen = 1;
}

function setDoorRoom() {
  print ("in door room");
  background(doorRoom);
  //add buttons
  exitDoor.pos = {x: 200, y: 215};
  diningButton.pos = {x: 30, y: 230};
  bedroomButton.pos = {x: 370, y: 230};
  //remove buttons
  leftButton.pos = {x: -100, y: -100};
  rightButton.pos = {x: -100, y: -100};
  keyBox.pos = {x: -100, y: -100};
  mazeGame.pos = {x: -100, y: -100};
  platGame.pos = {x: -100, y: -100};
  collectGame.pos = {x: -100, y:-100};
  //set screen
  screen = 2;
}

function setBedRoom() {
  background(bedRoom);
  //add buttons
  leftButton.pos = {x: 30, y: 230};
  //remove buttons
  exitDoor.pos = {x: -200, y: -200};
  rightButton.pos = {x: -100, y: -100};
  diningButton.pos = {x: -100, y: -100};
  bedroomButton.pos = {x: -100, y: -100};
  keyBox.pos = {x: -100, y: -100};
  mazeGame.pos = {x: -100, y: -100};

  //add collection game button
  collectGame.pos = {x: 240, y: 260};
  collectGame.collider = "s";
  collectGame.shapeColor.setAlpha(0);

  //add platformer game button
  platGame.pos = {x: 360, y: 285};
  platGame.collider = "s";
  platGame.shapeColor.setAlpha(0);
  
  //set screen
  screen = 3;
}

function mazeGamePlay() {
  //move player
  if (kb.pressing("left")) {
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
  } else if (kb.pressing("up")) {
    player.vel.y = -3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }
}

function closeWindow() {
  world.gravity.y = 0;
  //remove x button & header
  print ("x gone");
  xButton.pos = {x: -100, y: -100};
  gameInstructions.pos = {x: -1000, y: -1000};
  //no key
  print ("no escape gone")
  noEscapeMsg.pos = {x: -100, y: -100};
  //game window
  print ("game window gone");
  gameWindow.pos = {x: -500, y: -500};
  //maze window
  print ("maze window gone");
  mazeWindow.pos = {x: -500, y: -500};
    //maze sprites
    player.pos = {x: -1000, y: -1000};
    walls.remove();
    if (spark1 == false) {
      mazeSpark.pos = {x: -100, y: -100};
    }
    else if (spark1 == true) {
      mazeSpark.pos = {x: 50, y: 20};
      mazeSpark.diameter = 20;
    }
  //key box window
  print ("key box window gone");
  code1.pos = {x: -500, y: -500};
  code2.pos = {x: -500, y: -500};
  code3.pos = {x: -500, y: -500};
  keyBoxUnlock.pos = {x: -500, y: -500};
  //platformer window
  print ("platformer window gone");
  platWindow.pos = {x: -500, y: -500};
    //platformer sprites
    player.pos = {x: -1000, y: -1000};
    walls.remove();
    if (spark2 == false) {
      platSpark.pos = {x: -100, y: -100};
    } 
    else if (spark2 == true) {
      platSpark.pos = {x: 80, y: 20};
      platSpark.diameter = 20;
    }
  //collect window
  print ("collect window gone");
  collectWindow.pos = {x: -500, y: -500};
  catcher.pos = {x: -100, y: -100};
  fallingObject.collider = "static";
  fallingObject.pos = {x: -100, y: -100};
  score.pos = {x: -100, y: -100};
  //make buttons clickable
  mazeGame.collider = "s";
  keyBox.collider = "s";
  collectGame.collider = "s";
  platGame.collider = "s";
}

function setOutside() {
  background(outsideScreen);
  //remove buttons
  leftButton.pos = {x: -100, y: -100};
  rightButton.pos = {x: -100, y: -100};
  diningButton.pos = {x: -100, y: -100};
  bedroomButton.pos = {x: -100, y: -100};
  exitDoor.pos = {x: -200, y: -200};
  //remove items
  mazeSpark.pos = {x: -1000, y: -1000};
  platSpark.pos = {x: -100, y: -100};
  collectSpark.pos = {x: -100, y: -100};
  key.pos = {x: -100, y: -100};
  //add escape message
  escapeMsg.pos = {x: 200, y: 75};
  //set screen
  screen = 4;
}