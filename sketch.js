
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var paper1,log1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,640,40);
	ground=new Ground(400,680,800,10)
	log1= new Log(300,600,120,PI/4)
	log2=new Log(600,600,120,PI/4)
	log3=new Log(450,600,120,PI/4)
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper1.display();
  ground.display()
  log1.display()
  log2.display()

  drawSprites();
 
}



