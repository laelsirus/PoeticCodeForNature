var walker = [];

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME</a> yoyo");
  title.position(20, 0);

  canvas = createCanvas(960, 540);
  canvas.position(20, 120);
  canvas.class("artwork");

  description1 = "\
  yoyo\
  ";

  description2 = "\
  yoyo\
  ";

  text = createDiv(description1);
  text.position(20, 60);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  text = createDiv(description2);
  text.position(20, 680);
  text.style("font-family", "monospace");
  text.style("font-size", "10pt");

  for (var i = 0; i < 1; i++) {
    walker[i] = new Walker(random(width), random(height));
  }

  background(0);
  speed = 3;
  recover = 13;
  infect = 0;
  stepProb = 13;
}

function draw() {
  background(50);
  //w.update();
  //w.display();
  for (var i = 0; i < walker.length; i++) {
     walker[i].update();
     walker[i].display();
   }
  
}

function Walker(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.acc = mouse.sub(this.pos);    
    this.acc.mult(0.1);
    this.vel.add(this.acc);
    this.vel.mult(0.95);
    this.pos.add(this.vel);
    var cirVel = (abs(this.vel.x) + abs(this.vel.y)) * 0.5;
    background(cirVel * 2);
  }
  
  this.display = function() {
    fill(10);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}