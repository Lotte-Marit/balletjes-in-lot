var x;
var v;
function setup() {
  createCanvas(500, 400);
  v = 5;
  x = 30;
}



function draw() {
  background(225);
  fill('red')
  circle(x, 130, 20);
  
  x = x + v;
  
  if (x < 0 || x > 500){ 
    v = v * -1;
    }
 
 
 }