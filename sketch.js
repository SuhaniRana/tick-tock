var ml,hr,sc;
var hrAngle,scAngle,mnAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(200,200);  
  rotate(-90);
  hr = hour();
  ml = minute();
  sc= second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(ml,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  push();
  rotate(scAngle);
//rotate the hand based on angle calculated
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
push();
  rotate(hrAngle);
//rotate the hand based on angle calculated
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();
push();
  rotate(mnAngle);
//rotate the hand based on angle calculated
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop();
stroke(255,0,255);
point(0,0);
strokeWeight(10); noFill();
 //Seconds
 stroke(255,0,0);
 arc(0,0,300,300,0,scAngle);
 //Minutes
 stroke(0,255,0);
 arc(0,0,280,280,0,mnAngle);
 //Hour
 stroke(0,0,255);
 arc(0,0,260,260,0,hrAngle);
  drawSprites();
}