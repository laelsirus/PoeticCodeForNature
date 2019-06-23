var yoyo = [];

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

  for (var i = 0; i < 50; i++) {
    yoyo[i] = new Yoyo(random(width), random(height));
  }
}

function draw() {
  for (var i = 0; i < yoyo.length; i++) {
     yoyo[i].update();
     yoyo[i].display();
   }
  
}

function Yoyo(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.acc = mouse.sub(this.pos);    
    this.acc.mult(random(0.0001, 0.2));
    this.vel.add(this.acc);
    this.vel.mult(random(0.8,0.99));
    this.pos.add(this.vel);
    var cirVel = (abs(this.vel.x) + abs(this.vel.y)) * 0.5;
    background(floor(255 - cirVel), 10);
  }
  
  this.display = function() {
    fill((random(1,10)));
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}