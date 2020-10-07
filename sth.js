function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();
  frameRate(200);
  cursor(CROSS);
}

function draw() {
  fill(random(255), random(255), mouseY);
  ellipse(mouseX, mouseY, mouseX - 300);
}

function mousePressed() {
  //saveCanvas('My Drawing'+frameCount, 'png')
  background(255);
}
