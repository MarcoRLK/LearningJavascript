window.onload = function() {
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 15);
  createEnemies();
};

//main char position
var px = 10;
var py = 10;
var gs = 20; //grid size
var xv = 0; //x velocity
var yv = 0; // y velocity
var ex = 20; //x enemy position
var ey = 0; //y enemy position



function game() {

  px = px + xv;
  py = py + yv;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);

  //plotting the main char
  ctx.fillStyle = "white";
  ctx.fillRect(px * gs, py * gs, gs - 2, gs - 2);

  moveEnemy();

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

    ey = (Math.random() * 20);

}

function moveEnemy(){
  ctx.fillStyle = "red";
  ex = ex - 1;  
  ctx.fillRect(ex*gs , ey * gs, gs - 2, gs - 2);
}
