// function setup() {
//   title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목!");
//   title.position(20, 0);

//   canvas = createCanvas(300, 300);
//   canvas.position(20, 60);
//   canvas.class("artwork");

//   description = "\
//   작품에 대한 설명이 들어갑니다. <br/> \
//   HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
//   ";
//   text = createDiv(description);
//   text.position(20, 400);
//   text.style("font-family", "monospace");
//   text.style("font-size", "12pt");

// }

var walkerTop = [];
var walkerBottom = [];
let stepProb;
let randomColor;
let randomStroke;
let choice;
let speed;
let infect;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 반디");
  title.position(20, 0);
  description = "\
  작품설명 <br/> \
  작품설명 \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  createCanvas(1920,1080);
  background(0);
  speed = 1;
  
  for (var i = 0; i < 100; i++) {
     walkerTop[i] = new WalkerTop();
   }
    for (var j = 0; j < 100; j++) {
     walkerBottom[j] = new WalkerBottom();
}


function draw() {
  background(0, 1);
  stepProb = 13;
  
  if (mouseIsPressed) {
    upDown = -abs(speed);   
    infect = 0;
    for (var i = 0; i < walkerTop.length; i++) {
      walkerTop[i].step();
      walkerTop[i].render();
   }
    for (var j = 0; j < walkerBottom.length; j++) {
      walkerBottom[j].step();
      walkerBottom[j].render();
   }
  }
  else {
    upDown = +abs(speed); 
    infect = 1;
    for (var i2= 0; i2 < walkerTop.length; i2++) {
     walkerTop[i2].step();
     walkerTop[i2].render();
   }  
    for (var j2 = 0; j2 < walkerBottom.length; j2++) {
     walkerBottom[j2].step();
     walkerBottom[j2].render();
   }  
  }
}



class WalkerTop {
  constructor(){
    this.x = random (width/2-50, width/2+50)
    this.y = 0;
  }

  render() {
    randomStroke = random (0, 7);
    
    strokeWeight(randomStroke);
    stroke(random(200) * infect, random(100) * infect, 255 * infect, 13);
    point(this.x,this.y);
  }

  step() {     
      choice = floor(random(0, stepProb));
      if (choice < 5) {
        this.x++;
      }
      else if (choice > 5 && choice <= 10) {
        this.x--;
      }
      else if (choice > 10) {
        this.y = this.y + upDown;
      }
    this.x = constrain(this.x,1,width);
    this.y = constrain(this.y,-10,height+10);
  }
}

class WalkerBottom {
  constructor(){
    this.x = random (width/2-50, width/2+50)
    this.y = height;
  }

  render() {
    randomStroke = random (0, 7);
    
    strokeWeight(randomStroke);
    stroke(random(200) * infect, random(100) * infect, 255 * infect, 13);
    point(this.x,this.y);
  }

  step() {     
      choice = floor(random(0, stepProb));
      if (choice < 5) {
        this.x++;
      }
      else if (choice > 5 && choice <= 10) {
        this.x--;
      }
      else if (choice > 10) {
        this.y = this.y - upDown;
      }
    this.x = constrain(this.x,1,width);
    this.y = constrain(this.y,-10,height+10);
  }
}