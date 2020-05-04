
var canvas = document.getElementById("gameFrame");
var ctx = canvas.getContext("2d");
// draw and place the ball
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 70;
// move the ball
var dx = 2;
var dy = -2;
// draw the paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
// draw the score panel
var panelHeight=15;
var panelWidth=canvas.width;
// game play + controls 
var rightPressed = false;
var leftPressed = false;
var lives = 3; 
var score = 0; 

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#e3f7ff";
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight-20, paddleWidth, paddleHeight);
  ctx.fillStyle = "e3f7ff";
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}
function drawPanel() { 
    ctx.beginPath();
    ctx.rect(0,canvas.height-panelHeight,canvas.width,panelHeight);
    ctx.fillStyle="rgb(255,255,255";
    ctx.strokeStyle="rgb(0,0,0)";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.font="14px Georgia";
    ctx.fillStyle="rgb(255,0,0)";
    ctx.fillText("Remaining Lives: "+lives,0,canvas.height-2);
    ctx.fillText("Score: "+score,canvas.width-60,canvas.height-2)
}
function resetBall() { 
    x=canvas.width/2;
    y=canvas.height-70;
    dx = 2;
    dy = -2;
}
function resetGame() { 
    resetBall();
    lives = 3; 
    score = 0;
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawPanel();

  if ((x+dx>canvas.width-ballRadius) || (x + dx < ballRadius)) {dx = -dx;}
  if (y + dy < ballRadius) {dy = -dy;}
  if (y+dy>canvas.height-ballRadius){
    if (lives!=1){
      lives=lives-1;
      resetBall();}
    else {
      alert("You lose!")
      resetGame(); ///
    }
    }
    else if (x > paddleX && x < paddleX + paddleWidth && 
    (y + dy > canvas.height - paddleHeight - 20)) 
    {dy=-dy-1;dx=1+dx;score+=1;}
    
    // had some errors trying to 
    else {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;}
    else if (leftPressed && paddleX > 0) {
      paddleX -= 7;}

    x += dx;
    y += dy;}
    }

  setInterval(draw, 10);

  