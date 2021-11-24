class Ball {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
}

  draw(){
    ellipse(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 25 || this.x >= 475){
      this.vx = this.vx * -1;
    }

    if(this.y < 25 || this.y >= 375){
      this.vy = this.vy * -1;
    }
  }
}


var x, y, vx, vy
var x2, y2, vx2, vy2

function setup() {
  createCanvas(500, 400);
  
  vx = 100;
  vy = 5;
  y = 200;
  x = 30;
  vx2 = 5;
  vy2 = 5;
  y2 = 20;
  x2 = 30;
}
var ball1, ball2, ball3;

function setup() {
	createCanvas(500, 400);

  ball1 = new Ball(300,200,50,50,5,5);
  ball2 = new Ball(200,100,50,50,10,7);
  ball3 = new Ball(200,150,50,50,1,-1);
}

function draw() {
	background(225);  
  
  ball1.draw();
  ball2.draw();
  ball3.draw();
}


