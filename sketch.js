let leftRocket;
let rightRocket; 
let allRock = [];


const NUM_ROCK = 30;


let leftScore; 
let rightScore;

let spaceshipImage;

var timer = 60;


function setup() {
  createCanvas(400, 400);
  
  spaceshipImage = loadImage('spaceship.png');

  leftRocket = new Rocket(width * 0.33, spaceshipImage);
  rightRocket = new Rocket(width * 0.66, spaceshipImage);
  
  for (let i = 0; i < NUM_ROCK; i++) {
  	allRock.push(new Rock());
  
  }

  

  leftScore = new Score(width * 0.33 - 40);
  rightScore = new Score(width * 0.66 + 40);



  
}

function draw() {
  background(0);
  
  leftRocket.update();
  rightRocket.update();
  
  leftRocket.display();
  rightRocket.display();
  
  updateRockAndCheckCollisions();
  
  

  leftScore.display(leftRocket.score);
  rightScore.display(rightRocket.score);
  
  textSize(20)
  text("Timer = "+timer,50,40);
  if (frameCount % 60 === 0){
    timer = timer-1;
  }
  
  if(timer===0){
    leftRocket.respawn();
    rightRocket.respawn();
    leftRocket.score = 0;
    rightRocket.score = 0;
    timer = 60;
    
  }

}



function updateRockAndCheckCollisions() {
  for (let i = 0; i < allRock.length; i++) {
    allRock[i].update();
  	allRock[i].display();
    
    if (allRock[i].hasHitRocket(leftRocket)) {
    	leftRocket.respawn();
    } else if (allRock[i].hasHitRocket(rightRocket)) {
    	rightRocket.respawn();
    }
  }
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
  	rightRocket.isUp = true;
    rightRocket.isDown = false;
  } else if (keyCode == DOWN_ARROW) {
  	rightRocket.isDown = true;
    rightRocket.isUp = false;
  }
  
  
  if (keyCode == 87) {
    leftRocket.isUp = true;
    leftRocket.isDown = false;
  } else if (keyCode == 83) {
    leftRocket.isDown = true;
    leftRocket.isUp = false;
  }
}


function keyReleased() {
	if (keyCode == UP_ARROW) {
  	rightRocket.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
  	rightRocket.isDown = false;
  }
  
  if (keyCode == 87) {
    leftRocket.isUp = false;
  } else if (keyCode == 83) {
    leftRocket.isDown = false;
  }
}
 



