
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,650,1300,20)
paper = new Paper(200,200)

	Engine.run(engine);
	
	
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
ground.display();
paper.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
  
	}
}






