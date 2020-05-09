
var context = new AudioContext()
var o = context.createOscillator()
o.type = "sine"
o.connect(context.destination)


var freq = 0;
var noteGuess = "";
var tension = 0;
var mu = 2.3e-4; /* kg/m */
var length = 0.6477; /* m */

function generate_random_note(){
  freq = Math.floor((Math.random() * 350) + 50)+ Math.floor((Math.random() * 100) + 1)/100; 
}
function myFunction() { 
  generate_random_note();
  calc_tension();
  guessNote();
  var x = document.getElementById("freq")
  var y = document.getElementById("tension")
  var w = document.getElementById("mass")
  var m = document.getElementById("length")
  var n = document.getElementById("noteGuess")

  x.innerHTML = "Frequency:"+ freq +" Hz";
  y.innerHTML = "Tension:"+ tension +" N/m";
  w.innerHTML = "Mass/Length:" + mu + " kg/m";
  m.innerHTML = "Length:" +length +" m";
  n.innerHTML =  noteGuess +" ?" ;

  o.frequency.value = freq;

  slider1.oninput = function() {
    demo.innerHTML = this.value;
    y.innerHTML = "Tension:"+ this.value +" N/m";
    var testing = this.value;
  }
}

function startTone(){ 
  o.start();
}
function stopTone(){ 
  o.stop();
}


$('#max').click(function(){
  $('.expanded-side-bar').animate({'marginLeft':0}, 200);
  $('#guitar').animate({'marginLeft':+250}, 200);
  $('.test').animate({'marginLeft':"294px"}, 200);
});
$('#min').click(function(){
  $('.expanded-side-bar').animate({'marginLeft':-200}, 200);
  $('#guitar').animate({'marginLeft':50}, 200);
  $('.test').animate({'marginLeft':"155px"}, 200);
});
$('#f').click(function(){
  if($("#freq").css("display")==="block"){
    $('#freq').css("display","none");}
  else {
    $('#freq').css("display","block");}
});
$('#t').click(function(){
  if($("#tension").css("display")==="block"){
    $('#tension').css("display","none");}
  else {
    $('#tension').css("display","block");}
});
$('#mu').click(function(){
  if($("#mass").css("display")==="block"){
    $('#mass').css("display","none");}
  else {
    $('#mass').css("display","block");}
});
$('#l').click(function(){
  if($("#length").css("display")==="block"){
    $('#length').css("display","none");}
  else {
    $('#length').css("display","block");}
});
$('#treble-clef').click(function(){
  if($("#noteGuess").css("display")==="block"){
    $('#noteGuess').css("display","none");}
  else {
    $('#noteGuess').css("display","block");}
});


function showAxes(ctx,axes) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var xMin = 0;
  ctx.beginPath();
  ctx.strokeStyle = "rgb(128,128,128)";
  ctx.moveTo(xMin, height/2);
  ctx.lineTo(width, height/2);
  ctx.moveTo(width/2, 0);
  ctx.lineTo(width/2, height);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, height);
  ctx.stroke();
}
function plotSine(ctx, xOffset, yOffset) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var scale = 20;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(66,44,255)";
  var x = 10;
  var y = 0;
  var amplitude = 40;
  var f = 400-freq;
  ctx.moveTo(x, y);
  while (x < width) {
      y = height/2 + amplitude * Math.sin((x+xOffset)/f);
      ctx.lineTo(x, y);
      x++;
  }
  console.log(freq)
  ctx.stroke();
  ctx.save();
}
function draw() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, 800, 800);
  showAxes(context);
  context.save();            
  
  plotSine(context, step, 10);
  context.restore();
  
  step += 4;
  window.requestAnimationFrame(draw);
}
function init() {
  window.requestAnimationFrame(draw);
}
var step = -10;

function calc_tension(){
  tension = mu*(freq/(1/2*length))^2;
  console.log(tension)

}
function guessNote() { 
  if (50 < freq < 100) {
    noteGuess = "~E2";
  }
  else if (100 < freq < 130){
    noteGuess = "~A2";
  }
  else if (130 < freq < 180){
    noteGuess = "~D3";
  }
  else if (180 < freq < 210){
    noteGuess = "~G3";
  }
  else if (210 < freq < 270){
    noteGuess = "~B3";
  }
  else if (270 < freq < 340){
    noteGuess = "~E4";
  }
  else {
    noteGuess="Unknown";
  }
  console.log(noteGuess)
}

var slider1 = document.getElementById("myRange");
var demo = document.getElementById("demo");
demo.innerHTML = slider1.value;
