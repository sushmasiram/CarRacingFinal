var gameState = 0;
var playerCount = 0;

var player, game, form;
var allPlayers,carsAtEnd=0;
var car1, car2,car3,car4, cars=[];
var car1Img,car2Img,car3Img,car4Img;
var totalSeconds = 0;
var winner;

var reset = false
var bg;
function preload(){
  car1Img = loadImage("car1.png")
  car2Img = loadImage("car2.png")
  car3Img = loadImage("car3.png")
  car4Img = loadImage("car4.png")
  track = loadImage("track.jpg")
  bg = loadImage("ground.png")
  formImg = loadImage("race.jpeg")
  starImg = loadImage("star.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  game = new Game()
  game.getState()
  game.start()

}

function draw() {
  background(formImg)
  checkPage()
  if(playerCount === 4 && carsAtEnd === 0){
    game.update(1)
  }
  
  if(gameState === 1){
    clear()
    game.display()
    game.play()
    if(player.ended === false && frameCount%30 === 0 ){
      countTimer()
    }
    
  }
  if(gameState === 2){
    game.display()
    game.end()
  }

}


function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;

           game.time = hour + ":" + minute + ":" + seconds
        }

function checkPage() {
  
  console.log(player.index, playerCount)
  if (player.index !==0 &&  playerCount ===0){
    
    location.reload()
      
  }
}