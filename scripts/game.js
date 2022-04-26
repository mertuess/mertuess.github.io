var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var player = new Image();
var bg = new Image();
var meteor = new Image();
var go = new Image();

var score = 0;
var game_over = false;

player.src = "img/ThatGuy_1.png";
bg.src = "img/background.png";
meteor.src = "img/Meteor.png";
go.src = "img/go.png";

// Позиция игрока
posX = 10;
posY = 59;

// Позиция метеорита
meteor_posX = 10;
meteor_posY = -100;
gravity = 3;
meteor_rotation = 0

function draw(){
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(player, posX, canvas.height - posY-player.height);
    ctx.drawImage(meteor, meteor_posX, meteor_posY);

    meteor_posY += gravity;

    if(meteor_posY >= canvas.height - posY - meteor.height){

        if(meteor_posX == posX && meteor_posY >= canvas.height - posY-player.height){
            game_over = true;
        }else{
            score++;
        }
        
        meteor_posY = -100;
        if(Math.random() >= 0.5){
            meteor_posX = 10;
        }else{
            meteor_posX = 130;
        }
    }

    

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("" + score, 10, 25);

    if(game_over){ 
        ctx.drawImage(go, 0, 0);
        gravity = 0;
        ctx.fillText("Your Score: " + score, 20, canvas.height - 70);
    }

    requestAnimationFrame(draw);
}

function swapPlayer(){
    if(posX == 10){
        posX = 130;
    }else{
        posX = 10;
    }
}

function restart(){
    score = 0; 
    meteor_posY = -100;
    game_over = false; 
    gravity = 3;
}

meteor.onload = draw;
