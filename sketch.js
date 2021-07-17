
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object=Bodies.rectangle(100,50,50,50);
  World.add(world,object);
  object2=Bodies.circle(200,50,40);
  World.add(world,object2);
  object3=Bodies.rectangle(100,30,30);
  World.add(world,object3);
  object4=Bodies.circle(200,50,40);
  World.add(world,object4);
  object5=Bodies.rectangle(100,70,70,70);
  World.add(world,object5);
  object6=Bodies.circle(200,50,40);
  World.add(world,object6);
  console.log(object.position.x);
  console.log(object.position.y);
}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  
  fill("red");
    rect(object.position.x,object.position.y,50,50);
    fill("yellow");
    circle(object2.position.x,object2.position.y,40);
    fill("pink");
    rect(object3.position.x,object3.position.y,30,30);
    fill("green");
    circle(object4.position.x,object4.position.y,40);
    fill("pink");
    rect(object5.position.x,object5.position.y,20,20);
    fill("green");
    circle(object6.position.x,object6.position.y,10);
  
  
}
