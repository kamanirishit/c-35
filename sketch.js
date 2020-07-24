var database,canvas,playerCount,form,player,game,gameState;

function setup(){
    canvas=createCanvas(500,500);
    database=firebase.database();
    gameState=0;
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
   
}