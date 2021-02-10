var blackAnt_img, greenAnt_img, mainAnt_img, redAnt_img, yellowAnt_img;
var blackAnt, greenAnt, mainAnt, redAnt, yellowAnt;
var blackAntGroup, greenAntGroup, mainAntGroup, redAntGroup, yellowAntGroup;
var ouch_img, youLose_img, youWin_img, score_img, start_img, restart_img;
var bgStart_img, bgGame_img;
var bgStart, bgGame;
var gameState = 0;
var WAIT = 0;
var PLAY = 1;
var END = 2;

function preload(){
  blackAnt_img = loadImage("images/black_ant.png");
  greenAnt_img = loadImage("images/green_ant.png");
  mainAnt_img = loadImage("images/big_ant.png");
  redAnt_img = loadImage("images/red_ant.png");
  yellowAnt_img = loadImage("images/yellow_ant.png");
  bgStart_img = loadImage("images/bg_start.png");
  bgGame_img = loadImage("images/bg_game.png");
  ouch_img = loadImage("images/ouch_text.png");
  youLose_img = loadImage("images/you_lose.png");
  youWin_img = loadImage("images/you_win.png");
  score_img = loadImage("images/score.png");
  start_img = loadImage("images/start_text.png");
  resetart_img = loadImage("images/restart.png");
}
 
function setup(){
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width/2, height/2, width, height);
  bg.addImage("bg1", bgStart_img);
  bg.addImage("bg2", bgGame_img);
  bg.scale = 2.95;
}

function draw(){
 background("white");
  if(gameState === WAIT){
     bg.changeImage("bg1", bgStart_img);
     if(keyDown("space")){
        gameState = PLAY;
     }
  }else if(gameState === PLAY){
           bg.changeImage("bg2", bgGame_img);
  }
  drawSprites();
}