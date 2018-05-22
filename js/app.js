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
    this.enemySpeed = enemySpeed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(locX, locY) {
    ctx.drawImage(Resources.get(this.sprite), this.locX, this.locY);
};

let allEnemies = [Enemy.sprite];

let update = new.Enemy() {};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


let Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for player
    this.charboy = 'images/char-boy.png';

    // Start location for player
    this.locX = 200;
    this.locY = 400;


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

// Draw the enemy on the screen, required method for game
Player.prototype.render = function(locX, locY) {
    ctx.drawImage(Resources.get(this.charboy), this.locX, this.locY);
};
// Now instantiate your objects.

// Enemy objects in an array called allEnemies
let allEnemies = [];

// Player object in a variable called player
let player = [];

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
