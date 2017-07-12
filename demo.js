window.onload = function() {
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 15);
};

//main char position
var px = 10;
var py = 10;
var gs = 20; //grid size
var tc = 20; //tile counting
var xv = 0; //x velocty
var yv = 0;// y velocity

function game() {
  px = px + xv;
  py = py + yv;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = "white";
  ctx.fillRect(px*gs, py*gs, gs-2, gs-2);
}

function keyPush(evt) {

  switch (evt.keyCode) {
    case 37:
        console.log("37");
        xv=-1;yv=0;
        break;
    case 38:
        xv=0;yv=-1;
        break;
    case 39:
        xv=1;yv=0;
        break;
    case 40:
        xv=0;yv=1;
        break;
  }

}
