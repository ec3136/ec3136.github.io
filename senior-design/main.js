
sine = new p5.SinOsc();

var freq = 0;
var noteGuess = "";
var tension = 2;
var mu = 0;
var length = 0.3302; /* m */
var deg = 0;
var indicator = 0; 


function generate_random_note(){
  freq = Math.floor((Math.random() * 100) + 300)+ Math.floor((Math.random() * 100) + 1)/100;
}
function calculateTension() { 
  tension = ((2*freq*length)**2)*mu;
  var y = document.getElementById("tension")
  y.innerHTML = "Tension:"+ tension.toFixed(2)+" N";
}
function guessNote() { 
  console.log(freq)
  /* assume "in tune" with 2% accuracy */
  if (freq>=364 && freq<=383) {
    noteGuess = "flat G4";
  }
  else if (freq>=384 && freq<=399) {
    noteGuess = "perfect G4!";
  }
  else if (freq>=400&& freq<=418) {
    noteGuess = "sharp G4";
  }
  else if(freq>=243 && freq<=255){
    noteGuess = " flat C4 ";
  }
  else if(freq>=256 && freq<=266){
    noteGuess = " perfect C4! ";
  }
  else if(freq>=267 && freq<=279){
    noteGuess = " sharp C4 ";
  }
  else if(freq>=306 && freq<=322){
    noteGuess = " flat E4 ";
  }
  else if(freq>=323 && freq<=336){
    noteGuess = " perfect E4! ";
  }
  else if(freq>=337 && freq<=352){
    noteGuess = " sharp E4 ";
  }
  else if(freq>=408 && freq<=430){
    noteGuess = " flat A4! ";
  }
  else if(freq>=431 && freq<=448){
    noteGuess = " perfect A4! ";
  }
  else if(freq>=449 && freq<=471){
    noteGuess = " sharp A4 ";
  }

  else if (freq>=470){
    noteGuess="Too High!";
  }
  else if (freq<300){
    noteGuess="Too Low!";
  }
  var n = document.getElementById("noteGuess")
  n.innerHTML =  noteGuess;
  calculateTension();

  console.log(noteGuess)
}
function myFunction() { 
  generate_random_note();
  guessNote();
  var x = document.getElementById("freq")
  var y = document.getElementById("tension")
  var w = document.getElementById("mass")
  var m = document.getElementById("length")
  var n = document.getElementById("noteGuess")

  x.innerHTML = "Frequency:"+ freq +" Hz";
  y.innerHTML = "Tension:"+ tension.toFixed(2) +" N";
  w.innerHTML = "Mass/Length:" + mu.toExponential(3) + " kg/m";
  m.innerHTML = "Length:" +length +"m";
  n.innerHTML =  noteGuess;

  /*o.frequency.value = freq;*/
  sine.freq(freq);

}
function startTone(){ 
  sine.start();
}
function stopTone(){ 
  /*o.stop();*/
  sine.stop();
}


$('#max').click(function(){
  $('.expanded-side-bar').animate({'marginLeft':0}, 200);
  $('#guitar').animate({'marginLeft':+200}, 200);
  $('.test').animate({'marginLeft':"294px"}, 200);
  $('#uke').animate({'marginLeft':"-150px"}, 200);
  $('#tune-C').animate({'marginLeft':"642px"}, 200);
  $('#tune-E').animate({'marginLeft':"642px"}, 200);
  $('#tune-G').animate({'marginLeft':"548px"}, 200);
  $('#tune-A').animate({'marginLeft':"545px"}, 200);
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
$('#python').click(function(){
  window.location.href = 'https://ec3136.github.io/senior-design/page2/';
  return false;
});

$('#a').click(function(){
  indicator = 1;
  console.log(indicator)
  mu = 2.65e-3;
  var w = document.getElementById("mass");
  w.innerHTML = "Mass/Length:" + mu.toExponential(3) + " kg/m";
  $("#a").css('background-color','#9bcfd8');
  $("#c").css('background-color','#eeeeee');
  $("#g").css('background-color','#eeeeee');
  $("#e").css('background-color','#eeeeee');
});
$('#e').click(function(){
  indicator = 2;
  console.log(indicator)
  mu = 5.08e-3;
  var w = document.getElementById("mass");
  w.innerHTML = "Mass/Length:" + mu.toExponential(3) + " kg/m";
  $("#a").css('background-color','#eeeeee');
  $("#c").css('background-color','#eeeeee');
  $("#g").css('background-color','#eeeeee');
  $("#e").css('background-color','#9bcfd8');
});
$('#c').click(function(){
  indicator = 3;
  console.log(indicator)
  mu = 5.76e-2;
  var w = document.getElementById("mass");
  w.innerHTML = "Mass/Length:" + mu.toExponential(3) + " kg/m";
  $("#a").css('background-color','#eeeeee');
  $("#c").css('background-color','#9bcfd8');
  $("#g").css('background-color','#eeeeee');
  $("#e").css('background-color','#eeeeee');
});
$('#g').click(function(){
  indicator = 4;
  console.log(indicator)
  mu = 3.61e-3;
  var w = document.getElementById("mass");
  w.innerHTML = "Mass/Length:" + mu.toExponential(3) + " kg/m";
  $("#a").css('background-color','#eeeeee');
  $("#c").css('background-color','#eeeeee');
  $("#g").css('background-color','#9bcfd8');
  $("#e").css('background-color','#eeeeee');
});

/// you may change the tension by pressing the up and down keys or pressing the tension increase
// and tension decrease buttons on the screen 
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$('#increase-tens').click(function(){
  freq=freq+1.4;
  var x = document.getElementById("freq");
  x.innerHTML = "Frequency:"+ freq.toFixed(2)+" Hz";
  guessNote();
  sine.freq(freq);
  if (deg<=180){
    deg += 10 ;}
  else deg = 0;
  if (indicator===3){
    $("#tune-C").rotate(deg);
  }
  else if (indicator===4){
    $("#tune-G").rotate(deg);
  }
  else if (indicator===2){
    $("#tune-A").rotate(deg);
  }
  else if (indicator===1){
    $("#tune-E").rotate(deg);
  } 
});
$('#decrease-tens').click(function(){
  freq=freq-1.4;
  freq.toFixed(2);
  var x = document.getElementById("freq");
  x.innerHTML = "Frequency:"+ freq.toFixed(2)+" Hz";
  guessNote();
  sine.freq(freq);
  if (deg<=180){
    deg -= 10 ;}
  else deg = 0;
  if (indicator===3){
    $("#tune-C").rotate(deg);
  }
  else if (indicator===4){
    $("#tune-G").rotate(deg);
  }
  else if (indicator===2){
    $("#tune-A").rotate(deg);
  }
  else if (indicator===1){
    $("#tune-E").rotate(deg);
  }

});
$(document).keydown(function(e){
  if (e.keyCode ===38) {
    freq=freq+1.4;
    var x = document.getElementById("freq");
    x.innerHTML = "Frequency:"+ freq.toFixed(2)+" Hz";
    guessNote();
    sine.freq(freq);
    if (deg<=180){
      deg += 10 ;}
    else deg = 0;
    if (indicator===3){
      $("#tune-C").rotate(deg);
    }
    else if (indicator===4){
      $("#tune-G").rotate(deg);
    }
    else if (indicator===2){
      $("#tune-A").rotate(deg);
    }
    else if (indicator===1){
      $("#tune-E").rotate(deg);
    }
  } 
  if (e.keyCode ===40) {
    freq=freq-1.4;
    freq.toFixed(2);
    var x = document.getElementById("freq");
    x.innerHTML = "Frequency:"+ freq.toFixed(2)+" Hz";
    guessNote();
    sine.freq(freq);
    if (deg<=180){
      deg -= 10 ;}
    else deg = 0;
    if (indicator===3){
      $("#tune-C").rotate(deg);
    }
    else if (indicator===4){
      $("#tune-G").rotate(deg);
    }
    else if (indicator===2){
      $("#tune-A").rotate(deg);
    }
    else if (indicator===1){
      $("#tune-E").rotate(deg);
    }
  }
});


let Aslider;
let xspacing = 6; // space between circles
let w; // length of entire wave
let theta = 0.0; 
let amplitude = 75.0; // Gain
let dx; 
let yvalues; // Using an array to store height values for the wave

function setup() {

  let ctx = createCanvas(750, 300);
  ASlider = createSlider(0, 85, 75);
  ASlider.position(200, 420);
  w = width + xspacing;
  yvalues = new Array(floor(w / xspacing));  
  textSize(15);
  noStroke();
  ctx.position(175,400);
}
function calcWave() {
  f = freq;
  T=1/f;
  theta += 0.1;
  dx = (TWO_PI / T) * xspacing;
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * ASlider.value();
    x += dx;
  }
}
function generateWave() {
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
  rect(0, 0, 320, 60);
  calcWave();
  generateWave();
  text(ASlider.value() +' Amplitude (Gain)', 160, 35);

}
function init2(){ 
  setup();
  draw();
}