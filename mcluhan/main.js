


let theButton = document.querySelector('#firstbutton');
let theOtherButton = document.querySelector('#secondbutton');

let theText = document.querySelector('.right');
let theMiniText = document.querySelector('#upper');
let theMiniText2 = document.querySelector('#lower');
let theImage = document.querySelector('img');
let theBody = document.querySelector('body');


theButton.addEventListener('click', isClicked);
theOtherButton.addEventListener('click',isBackClicked);
/*theImage.addEventListener('click',isImageClick);*/

let iteration =0; 

function isClicked(){
    iteration+=1;
    console.log("clicked it!");
    //theText.textContent = "Your Education";
    theMiniText.textContent= "At the high speeds of electric communication, purely visual means of apprehending the world are no longer possible; they are just too slow to be relevant or effective.";
    theMiniText2.textContent="McLuhan states that, electric circuitry is an extention of the central nervous system. That media has such great control over our environment that it is able to control how we think and perceive our world. Because information can be transmitted across the world instantaneously, we must be able to predict and understand the consequences of any actions that we may take. Because moreso than ever before, we will be faced with those consequences immediately." ;
    //theImage.src="assets/magglass.jpg";
    //theBody.style.backgroundImage ="url('assets/background2.jpg')";
    theImage.src="assets/circuit.jpg";
    theImage.style.width="100%";
    theImage.style.height="50%";
}
function isBackClicked(){
    console.log("back clicked it!");
    theImage.src="assets/neuralnetwork.webp";
    theBody.style.backgroundImage ="url('assets/background2.jpg')";
    theMiniText.textContent="Electric circuitry profoundly involves men with one another. Information pours upon us, instantaneously and continuously. As soon as information is acquired. It is very rapidly replaced by still newer information. Our electrically-configured world has forced us to move from the habit of data classification to the mode of pattern recognition. We can no longer build serially, block-by-block, step-by-step, because instant communication insures that all factors of the environment and of experience co-exist in a state of active interplay."
    theMiniText2.textContent="McLuhan is paralleling human communication with the function of neural networks. Communication is non-linear, and is happening on an infinite number of channels at any given time. Life as a large game of telephone, where in order for optimal classification you must focus on pattern recognition in a layered system in order to transmit messages.";

}
/*
function isImageClicked(){
    theBody.style.backgroundImage="url('assets/intcircuit.jpg')";
    theImage.src="none";
    theMiniText.textContent="";
    theMiniText2.textContent="";
    theText.textContent="";
}
*/

