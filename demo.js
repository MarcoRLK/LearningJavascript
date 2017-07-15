window.onload = function() {
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 15);
  createEnemies();
};

const NUM_OF_ENEMIES = 5;

//main char position
var px = 10;
var py = 10;
var gs = 20; //grid size
var xv = 0; //x velocity
var yv = 0; // y velocity
var ex = 20; //x enemy position
var ey = 0; //y enemy position
var points = 0;

var enemies = [];

function Enemy (posx, posy) {
  this.posx = posx;
  this.posy = posy;

}

function game() {

  points++;
  moveMainChar();

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);

  //plotting the main char
  ctx.fillStyle = "white";
  ctx.fillRect(px * gs, py * gs, gs - 2, gs - 2);

  moveEnemies();

}

function keyPush(evt) {

  switch (evt.keyCode) {
    case 37:
      xv = -1;
      yv = 0;
      break;
    case 38:
      xv = 0;
      yv = -1;
      break;
    case 39:
      xv = 1;
      yv = 0;
      break;
    case 40:
      xv = 0;
      yv = 1;
      break;
  }

}

function createEnemies() {

  for (var aux = 0; aux < NUM_OF_ENEMIES; aux++) {
    var newEnemy = new Enemy(Math.floor((Math.random() * 20) + 25), Math.floor(Math.random() * 20));
    enemies[aux] = newEnemy;
  }

}

function moveMainChar (){

  // the conditions below will avoid the char from getting out of the canvas
  if ((xv < 0 && px == 0) || (xv > 0 && px == 19)){
    return;
  }
  if ((yv < 0 && py == 0) || (yv > 0 && py == 19)){
    return;
  }

  px = px + xv;
  py = py + yv;
  xv = 0;
  yv = 0;

}

function moveEnemies() {
  ctx.fillStyle = "red";
  for (var aux = 0; aux < NUM_OF_ENEMIES; aux++) {
    enemies[aux].posx = enemies[aux].posx - 1;
    ctx.fillRect(enemies[aux].posx * gs, enemies[aux].posy * gs, gs - 2, gs - 2);
    //check colison
    if (enemies[aux].posx == px && enemies[aux].posy == py){
      resetGame();
    }
  }
}

function resetGame() {
  points = 0;
  px = 10;
  py = 10;
  createEnemies() ;
}
