var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle1, rectangle2, rectangle3;
var rectangleBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rectangle1=createSprite(width/2,650,200,20);
	rectangle1.shapeColor=color(255,0,0);

	rectangle2=createSprite(300,610,20,100);
	rectangle2.shapeColor=color(255,0,0);

	rectangle3=createSprite(500,610,20,100);
	rectangle3.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , 
		{restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	rectangleBody = Bodies.rectangle(width/2,650,200,20,
	{isStatic:true});
	World.add(world,rectangleBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rectangle1.x = rectangleBody.position.x
  rectangle1.y = rectangleBody.position.y

 keyPressed();

  drawSprites();

  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	
	Matter.Body.setStatic(packageBody,false);
	
	
	}
    
  }




