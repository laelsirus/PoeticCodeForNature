function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목");
  title.position(20, 0);

  canvas = createCanvas(300, 300);
  canvas.position(20, 60);
  canvas.class("artwork");

  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

}

let walker;
let a;

function setup() {
  createCanvas(640,360);
  walker = new Walker(a);
  background(127);
}

function draw() {
  if (mouseIsPressed){
    walker.step(1);
    walker.render(1);
  }
}



class Walker {
  constructor(){
    this.x = random(0, width);
    this.y = height/2;
  }

  render() {
    stroke(50);
    point(this.x,this.y);
  }

  step() {
    var choice = floor(random(6));
    if (choice == 0 && 1) {
      this.x++;
    } else if (choice == 2 && 3) {
      this.x--;
    } else if (choice == 4) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
}
