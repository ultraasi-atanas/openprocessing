function setup() {
	let canvasHeight = 600;
	let canvasWidth = 600;
	createCanvas(canvasHeight,canvasWidth);
	background(100);
}

function draw() {
	
	let variableX = random(0,600);  //random location
	let variableY = random(0,600);  //random location
	
	
	//some nice colours from https://www.colourlovers.com/palette/92095/Giant_Goldfish
	let myColourNames = ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900","#69D2E7","#A7DBD8","#E0E4CC"];
	
	blendMode(SOFT_LIGHT); //change the way colour is blended by the program.
	//(1)(2) Random position / random colours
	// don't want any stroke
	noStroke();
	// choose a random colour each time
	fill(random(myColourNames));
	// draw one square random position with random colours / per frame
	
	//(4)
	// draw one square random position / per frame
	rect(variableX, variableY, 20, 20, 20, 15, 10, 5);
}