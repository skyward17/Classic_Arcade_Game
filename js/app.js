// Enemies our player must avoid
let Enemy = function(locX, locY, enemySpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for enemies
    this.sprite = 'images/enemy-bug.png';

    //Locations of Enemies
    this.locX = locX;
    this.locY = locY;

    //Speed of Enemies based on user difficulty selection
    this.enemySpeed = 100;  //enemySpeed for Speed of Enemies based on user difficulty selection added later

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(locX, dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.locX = locX + this.enemySpeed * dt;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(locX, locY) {
    ctx.drawImage(Resources.get(this.sprite), this.locX, this.locY);
};

// Enemy objects in an array called allEnemies
let enemyOne = new Enemy(100,100);  // Not sure placement
let allEnemies = [enemyOne];

//let update = new.Enemy() {};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


let Player = function(locX, locY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for player
    this.charboy = 'images/char-boy.png';

    // Start location for player
    this.locX = locX;
    this.locY = locY;


/*
    this.charboy = 'images/char-boy.png';
    this.charCatGirl = 'images/char-cat-girl.png';
    this.charHornGirl = 'images/char-horn-girl.png';
    this.charPinkGirl = 'images/char-pink-girl.png';
    this.charPrincessGirl = 'images/char-princess-girl.png';
    this.charSEAL = 'images/char-seal-boy.png';
*/
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

Player.prototype.handleInput = function(key) {

// Handles LEFT KEY  noteToSelf: movement by square, handle off screen
  if (key === 'left') {
    // Left Screen Block.  If 0 x then remain there, cannot go further left.
      if (this.locX === 0) {
        this.locX = 0;
        return this.locX;
      }
      this.locX = this.locX -100;  // Set to 100's to move block by block
      console.log(this.locX);  // For testing readout
      return this.locX;
  }
  if (key === 'right') {
    // Left Screen Block.  If 0 x then remain there, cannot go further left.
      if (this.locX === 400) {
        this.locX = 400;
        return this.locX;
      }
      this.locX = this.locX +100;
      console.log(this.locX);  // For testing readout
      return this.locX;
  }
  if (key === 'up') {
    this.locY = this.locY -100;
    console.log(this.locY ); // For testing readout
    return this.locY;
  }
  if (key === 'down') {
    this.locY = this.locY +100;
    console.log(this.locY); // For testing readout
    return this.locY;
  }

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function(locX, locY) {
    ctx.drawImage(Resources.get(this.charboy), this.locX, this.locY);
};

// Now instantiate your objects.

let playerOne = new Player(200,400);

// Player object in a variable called player
let player = playerOne;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
