const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin1,dustbin2,dustbin3;

function preload() {
	
}

function setup() {
	createCanvas(1000, 560);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(499,550,1000,18);
	paper = new Paper(100,400,10);
	
    dustbin1 = new Dustbin(760,500,165,150);
	//dustbin2 = new Dustbin(777,375,10,60);
	//dustbin3 = new Dustbin(623,375,10,60);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  paper.display();

  dustbin1.display();
 // dustbin2.display();
  //dustbin3.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	  
	  
	}
}



