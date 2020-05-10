

  let Aslider,FreqSlider,ThetaSlider;

  let xspacing = 6; // Distance between each horizontal location
  let w; // Width of entire wave
  let theta = 0.0; // Start angle at 0
  let amplitude = 75.0; // Height of wave
  let freq = 0.02;
  let period = 400; // How many pixels before the wave repeats
  let dx; // Value for incrementing x
  let yvalues; // Using an array to store height values for the wave
  
  function setup() {
    let ctx = createCanvas(710, 400);
    ASlider = createSlider(0, 85, 75);
    ASlider.position(120, 120);
    FreqSlider = createSlider(50, 350, 70);
    FreqSlider.position(120, 150);
    WaveSpeedSlider = createSlider(5, 800, 5);
    WaveSpeedSlider.position(120, 180);
    w = width + xspacing;
    yvalues = new Array(floor(w / xspacing));  
    textSize(15);
    noStroke();
  
    ctx.position(1024,100);
    
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
    // A simple way to draw the wave with an ellipse at each location
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
    
    text(ASlider.value() +' Amplitude', 160, 35);
    text(FreqSlider.value()+" (Hz) Frequency ", 160, 65);
    text(WaveSpeedSlider.value()+' (m/s) Wave Speed', 160, 95);
  }
  
  

