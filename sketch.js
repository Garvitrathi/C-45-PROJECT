const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var bg;
var form,player,game ; 
var car1,car2,car3,car4,hurlde;
var car1img,car2img,car3img,car4img,hurdleimg;
var cars = [] ;
var gameState = 0 ;
var playerCount,database,allPlayers;
var hurdle1,hurdle2,hurdle3,hurdle4,hurdleimg;

function preload() {
  bg = loadImage("Images/background.jpg");
  car1img = loadAnimation("Images/Car 1.png");
  car2img = loadImage("Images/Car 2.png");
  car3img = loadImage("Images/Car 3.png");
  car4img = loadImage("Images/Car 4.png");
  hurdleimg = loadImage("Images/Hurdle.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 143);
  
  engine = Engine.create();
  world = engine.world ; 

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  console.log(displayHeight-143);
}

function draw() {
  Engine.update(engine);

  if(playerCount===4){
    game.update(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
}

  
}
function keyPressed(){
  if(keyCode==72){
    
  }
}