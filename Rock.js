class Rock {

  
  constructor() {
    this.r = 5;
    this.resetRock();
  }
  
  resetRock() {
  	
    this.y = random(height - 70);
    
    let spawnLeftSide = random(1) < 0.5;
    
    if (spawnLeftSide) {
    	this.x = random(-width, 0);	
    	this.isGoingLeft = false;
    } else {
    	this.x = random(width, width * 2);
      this.isGoingLeft = true;
    }
    
    
  }
  
  update() {
  	if (this.isGoingLeft) {
    	this.x --;
    } else {
    	this.x ++;
    }
    
    if (this.isOffScreen()) {
    	this.resetRock();
    }
  }
  
  
  isOffScreen() {
    if (this.isGoingLeft && this.x < -5) {
    	return true;
    } else if(!this.isGoingLeft && this.x > width + 5) {
    	return true;
    }
    return false;
  }
  
  display() {
  	ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  
  hasHitRocket(rocket) {
  	if (dist(this.x, this.y, rocket.x, rocket.y) < this.r + rocket.r) {
    	return true;
    }
    return false
  }

}