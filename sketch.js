
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,bobDiameter

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObject=new ground(400,100,width,20);
bob1=new bob(200,300,50,50)
bob2=new bob(300,300,50,50)
bob3=new bob(400,300,50,50)
bob4=new bob(500,300,50,50)
bob5=new bob(600,300,50,50)
rope1=new rope(bob1.body,groundObject.body,-bobDiameter*2,0)
rope2=new rope(bob2.body,groundObject.body,-bobDiameter*2,0)
rope3=new rope(bob3.body,groundObject.body,-bobDiameter*2,0)
rope4=new rope(bob4.body,groundObject.body,-bobDiameter*2,0)
rope5=new rope(bob5.body,groundObject.body,-bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObject.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rope1.show()
rope2.show()
rope3.show()
rope4.show()
rope5.show()
  drawSprites();
 
}



