const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var backimg;

function preload(){
backimg=loadImage("background.jpeg");


}

function setup(){
engine=Engine.create();
world=engine.world;
canvas=createCanvas(700,450);
enemy1=new enemy(300,200);
person1=new person(200,200,200,200);
grounds=new ground(350,380,700,20);
}

function draw(){    
background(backimg);
Engine.update(engine);
if (keyDown("space")&&person1.y) {
      
    trex.velocityY=-12; 
    
  }

person1.display();
enemy1.display();
grounds.display();
}






