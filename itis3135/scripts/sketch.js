let x = 100;
let y = 100;
let xspeed = 4;
let yspeed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
  fill(100, 150, 255);
  ellipse(x, y, 50, 50);

  
  x += xspeed;
  y += yspeed;

  
  if (x > width - 25 || x < 25) {
    xspeed *= -1;
  }
  if (y > height - 25 || y < 25) {
    yspeed *= -1;
  }
}
