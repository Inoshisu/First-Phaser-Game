// inside this file - script.js - we are going to create  the beginning phrase of our first phrase video game

// outline of the steps we are going to take to create a game in the browser

// step 1. define all of the properties for a new phaser game object that orgnize game (width/height and etc.)
let config = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	physics: {
		default: "arcade"
	},
	scene: {
		preload: myPreloadCode,
		create: myCreateCode,
		update: myUpdateCode
	}
};

// step 2. deinfe some variables that we will use as the game's data model to represent score, or the game objects we control

// step 3. define a fucntion for the preload event for our game's scene (where we load all of the files we need)
function myPreloadCode() {
	// load all of the files that contain assets our game needs (bitmap images)
	// the image() method takes 2 arguments: the made-up key name of the asset [nickname we use later on]
	// (2) the path for phaser to find the bitmap file I want to load for the asset
	this.load.image("sky", "assets/sky.png");
	this.load.image("star", "assets/star.png");
	this.load.image("dude", "assets/dudeWutlsScratch.png")
}
// step 4. define a function for the create event where we write code to layout the game objects and initialize values like score
function myCreateCode() {
	// create a background game object
	// add.image() method takes 3 arguments
	// (1) the horizontal (x-axis) coordiante position
	// (2) the vertical (y-axis) coordiante
	// (3) the key (or nickname) for the asset we loaded during preload
	this.add.image(400, 300, "sky");
}
// step 5. define a fucntion for the update event that automatically is repeated over and over by the phaser game engine in a loop
function myUpdateCode() {

}
// step 6. create a new phaser game object to start the game
let myGame = new Phaser.Game(config);