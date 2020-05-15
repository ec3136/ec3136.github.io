
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
function guessNote() { 
  console.log(freq)
  /* assume "in tune" with 5% accuracy */
  if (freq>=70 && freq<=78) {
    noteGuess = "Maybe a flat E2?";
  }
  else if(freq>=78 && freq<=86){
    noteGuess = " perfect E2! ";
  }
  else if(freq>=87 && freq<=95){
    noteGuess = "That's a sharp E2 ";
  }
  else if (freq>=96 && freq<=104){
    noteGuess = " Flat A2";
  }
  else if (freq>=105 && freq<=115){
    noteGuess = "perfect A2!";
  }
  else if (freq>=116 && freq<=130){
    noteGuess = "sharp A2";
  }
  
  else if (freq>=130 && freq<=137){ /*146*/
    noteGuess = "that seems like a flat D3";
  }
  else if (freq>=138 && freq<=154){ /*146*/
    noteGuess = "perfect D3!";
  }
  else if (freq>=155 && freq<=170){ /*146*/
    noteGuess = "maybe a sharp D3?";
  }
  else if (freq>=171 && freq<=185){ /*196*/
    noteGuess = "flat G3";
  }
  else if (freq>=186 && freq<=206){ /*196*/
    noteGuess = "perfect G3";
  }
  else if (freq>=207 && freq<=225){ /*196*/
    noteGuess = "sharp G3";
  }
  else if (freq>=226 && freq<=233){/*246*/
    noteGuess = "flat B3";
  }
  else if (freq>=234 && freq<=258){/*246*/
    noteGuess = "perfect B3!";
  }
  else if (freq>=259 && freq<=300){/*246*/
    noteGuess = "sharp B3!";
  }
  else if (freq>=301 && freq<=312){/*246*/
    noteGuess = "flat E4";
  }
  else if (freq>=313 && freq<=345){/*329*/
    noteGuess = "perfect E4";
  }
  else if (freq>=346 && freq<=360){/*329*/
    noteGuess = "sharp E4";
  }
  else if (freq>=361){
    noteGuess="Too High!";
  }
  else if (freq<49){
    noteGuess="Too Low!";
  }
  console.log(noteGuess)
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
  n.innerHTML =  noteGuess;

  o.frequency.value = freq;
}
function startTone(){ 
  o.start();
}
function stopTone(){ 
  o.stop();
}


$('#max').click(function(){
  $('.expanded-side-bar').animate({'marginLeft':0}, 200);
  $('#guitar').animate({'marginLeft':+200}, 200);
  $('.test').animate({'marginLeft':"294px"}, 200);
  $('#myCanvas').animate({'marginLeft':"-180px"}, 200);
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
$('#python').click()(function(){
  window.location.href = "https://ec3136.github.io/final-version-2/demo.html";
})


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
  ctx.stroke();
  ctx.save();
}
function drawOne() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, 900, 900);
  showAxes(context);
  context.save();            
  
  plotSine(context, step, 10);
  context.restore();
  
  step += 4;
  window.requestAnimationFrame(drawOne);
}
function init() {
  if($("#myCanvas").css("display")==="block"){
    $('#myCanvas').css("display","none");}
  else {
    $('#myCanvas').css("display","block");}
    window.requestAnimationFrame(drawOne);
}
var step = -10;

function calc_tension(){
  tension = mu*(freq/(1/2*length))^2;
  console.log(tension)

}


let Aslider,FreqSlider,ThetaSlider;
let osc, playing;
let xspacing = 6; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let frequency = 0.02;
let period = 400; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {

  let ctx = createCanvas(750, 300);
  ASlider = createSlider(0, 85, 75);
  ASlider.position(680, 420);
  FreqSlider = createSlider(50, 350, 70);
  FreqSlider.position(680, 450);
  WaveSpeedSlider = createSlider(5, 800, 5);
  WaveSpeedSlider.position(680, 480);
  w = width + xspacing;
  yvalues = new Array(floor(w / xspacing));  
  textSize(15);
  noStroke();

  ctx.position(660,400);
  osc = new p5.Oscillator('sine');
}
function startMyTone(){
  osc.start();
  playing=true;
}
function stopMyTone(){
  osc.amp(0,0.5);
  playing=false;
}
function calcWave() {
  f = FreqSlider.value()/40000;
  T = 1/f; 
  theta += WaveSpeedSlider.value()/1000;
  dx = (TWO_PI / T) * xspacing;
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * ASlider.value();
    x += dx;
  }
}
function renderWave() {
  noStroke();
  fill(0,0,0);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}
function draw() {
  background(255,255,255);
  for (var x = 0; x < width; x += width / 100) {
    for (var y = 0; y < height; y += height / 50) {
      stroke(0);
      strokeWeight(0.04);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  let c = color(255, 255,255); 
  fill(c);
  rect(0, 0, 320, 110);
  calcWave();
  renderWave();
  text(ASlider.value() +' Amplitude (Gain)', 160, 35);
  text(FreqSlider.value()+" (Hz) Frequency ", 160, 65);
  text(WaveSpeedSlider.value()+' (m/s) Wave Speed', 160, 95);

  osc_freq = FreqSlider.value();
  osc_amp = ASlider.value();

  if (playing){
    osc.freq(osc_freq,0.1);
    osc.amp(osc_amp,0.1);
  }
}
function init2(){ 
  setup();
  draw();
}
function hideWaveform(){
  ctx.hide();
}

