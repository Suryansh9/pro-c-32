const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
//backgroundImg = loadImage("sprites/bg.png");
getTime()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
  if(backgroundImg){  background(backgroundImg)}
  


    Engine.update(engine);

    // write code to display time in correct format here


}


async function getTime(){

    var response= await fetch('http://worldclockapi.com/api/json/est/now')
    var responseJson= await response.json()
    var dateTime= responseJson.currentDateTime
    var hour = dateTime.slice(11,13)
    console.log(responseJson)
    console.log(hour)
    if(hour>=04 && hour<=06 ){ bg = "sunrisel.png"; }
    else if(hour>=06 && hour<=08 ){ bg = "sunrise2.png"; }
    else if(hour>=23 && hour==0){ bg = "sunset10.png"; }
    else if(hour==0 && hour<=03){ bg = "sunsetll.png"; }
    else{ bg = "sunset12.png"; } 
    backgroundImg=loadImage(bg)
    }