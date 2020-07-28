const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var umbrella;
var drops = [];
var singleDrop;
var maxDrops = 100;
var rand;

function preload(){
thunder1 = loadImage("image/thunder1.gif");
thunder2 = loadImage("image/thunder2.gif");
thunder3 = loadImage("image/thunder3.gif");
thunder4 = loadImage("image/thunder4.gif");
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,700);
   umbrella = new Umbrella(200,500);
   if(frameCount%150 == 0){
   for(var i = 0;i<maxDrops;i++){
   singleDrop = new createDrops(random(0,400),random(0,400));
   drops.push(singleDrop);
   }
   }
}

function draw(){
Engine.update(engine);
background("black");
rand = Math.round(random(1,4));
if(frameCount%80==0){
thunder = createSprite(random(10,370),random(10,30),10,10);
switch(rand){
case 1:thunder.addImage(thunder1);
       break;
case 2:thunder.addImage(thunder2);
       break;
case 3:thunder.addImage(thunder3);
       break;
case 4:thunder.addImage(thunder4);
       break;
default:break;
}

}
umbrella.drawUmbrella();
for(var i = 0;i<maxDrops;i++){
drops[i].showDrop();
drops[i].updateY;
}
}   

