
/*class Sound {
  
    constructor(context) {
      this.context = context;
    }
    
    init() {
      this.oscillator = this.context.createOscillator();
      this.gainNode = this.context.createGain();
  
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
    }
  
    play(value) {
      this.init();
  
      this.gainNode.gain.setValueAtTime(0.5, this.context.currentTime);
              
      this.oscillator.start();
    }
    
    stop() {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
      this.oscillator.stop(this.context.currentTime + 1);
    }
   
  }  
  
  var context = new AudioContext();
  var sound = new Sound(context);
  sound.init();
  var wave = 'sine';
  var state = 'paused';
  
  var buttons = document.querySelectorAll('.waveform');
  var playBtn = document.querySelector('#play');
  var container = document.querySelector('.container');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {           
      cleanClass('active');
      wave = button.dataset.wave;
      sound.oscillator.type = wave;
      button.classList.add('active');
    })
  })
  
  playBtn.addEventListener('click', function(){
    container.classList.toggle('playing');
    
    if(playBtn.text == 'Play') {
      sound.play();
      sound.oscillator.type = wave;
      playBtn.text = 'Pause';
    } else {
      sound.stop();
      playBtn.text = 'Play';
    }
  })
  
  function cleanClass(rclass) {
    buttons.forEach(function(button) {
      button.classList.remove(rclass);
    })
  }

var freq = 0;
var noteGuess = "";
var tension = 0;
var mu = 2.3e-4; /* kg/m 
var length = 0.6477; /* m 


function random_note_generator(){
    freq = Math.floor((Math.random() * 350) + 50)+ Math.floor((Math.random() * 100) + 1)/100; 
    tension = mu*(freq/(1/2*length))^2;

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
}
function myFunction() {
    var x = document.getElementById("demo")
    var y = document.getElementById("demo2")
    var w = document.getElementById("demo3")
    var m = document.getElementById("demo4")
    var n = document.getElementById("demo5")
    random_note_generator();
    x.innerHTML = freq +" Hz";
    y.innerHTML = noteGuess;
    w.innerHTML = tension +" N/m";
    m.innerHTML = length +" m";
    n.innerHTML = mu + " kg/m";
    o.frequency.value = freq;
  }
*/

var context = new AudioContext()
var o = context.createOscillator()
o.type = "sine"
o.connect(context.destination)


var freq = 0;
var noteGuess = "";
var tension = 0;
var mu = 2.3e-4; /* kg/m */
var length = 0.6477; /* m */


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
}
function myFunction() { 
  freq = Math.floor((Math.random() * 350) + 50)+ Math.floor((Math.random() * 100) + 1)/100; 
  tension = mu*(freq/(1/2*length))^2;
  guessNote();
  var x = document.getElementById("freq")
  var y = document.getElementById("tension")
  var w = document.getElementById("mass")
  var m = document.getElementById("length")
  var n = document.getElementById("noteGuess")

x.innerHTML = freq +" Hz";
y.innerHTML =tension +" N/m";
w.innerHTML = mu + " kg/m";
m.innerHTML = length +" m";
n.innerHTML =  noteGuess ;

o.frequency.value = freq;
}


$('.mini-side-bar').mouseover(function(){
  $('.expanded-side-bar').animate({'marginLeft':0}, 200);
  $('#guitar').animate({'marginLeft':+250}, 200);
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

function startTone(){ 
  o.start();
}
function stopTone(){ 
  o.stop();
}
