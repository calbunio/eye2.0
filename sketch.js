
// The setup function runs once
function setup() {
  
  createCanvas(1500, 800);
  background(70,400,200);
  frameRate(10);
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
	cursor(CROSS, mouseX, mouseY);
	
	var randomRed = random(0,255);
	var randomGreen = random(0,225);
	var randomBlue = random(0, 225);
	
  	background(randomRed,randomGreen,randomBlue);
	
	fill(500,500,500);
	stroke(225,0,0);
	ellipse(300,300,400,400);
	
	
 	if ((mouseX > 100)&(mouseY < 500)&(mouseY > 100)&(mouseY < 500)){
 		var c = color(25,200,32);
		fill(c); 
		stroke(0,0,225);
 		rect(mouseX,mouseY,200,200);
 		}
 	else{
 		var c = color(25,200,32);
		fill(c); 
		stroke(0,0,225);
 		rect(200,200,200,200);
 		}
	
 	
 	if ((mouseX > 200)&(mouseY < 400)&(mouseY > 200)&(mouseY < 400)){
 		fill(0,0,0);
 		ellipse(mouseX,mouseY,100,100);
 		}
 	else{
 		fill(0,0,0);
 		ellipse(300,300,100,100);
 		}
 	
 	textSize(32);
 	text("I've got my eye on you", 400, 50);
 	fill(0,0,0);

}
