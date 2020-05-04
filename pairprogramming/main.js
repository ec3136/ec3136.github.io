

// pass the HTML element into a javascript variable 
const theButton = document.querySelector("#firstButton");
//the argument is some HTML element that you want

// when the button is clicked - the "hello world" text changes 
let theTxt = document.querySelector("h2") // use let() so you can change the variable
let theTxt2 = document.querySelector("h3");
let theBody = document.querySelector("body");
let theImage = document.querySelector("img");
//console.log('theTxt');
let iteration = 0; 


theButton.addEventListener("click",isClicked);

function isClicked() { 
    iteration += 1;
    console.log("clicked it!"); // when the button is clicked - receive a console log message that it has been clicked
    if (iteration===1){
        theTxt.textContent = "Bye Earth, you're now on Mars";
        theTxt.style.color = "white";
        theBody.style.backgroundImage="url('assets/mars.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/mars.jpg";    

    }
    else if (iteration===2){ 
        theTxt.textContent = "Bye Mars, you're now on Mercury";
        theTxt.style.color = "white";
        theBody.style.backgroundImage="url('assets/mercury.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/mercury.jpg";
    }
    else if (iteration===3){
        theTxt.textContent = "Whoops! Mercury was in retrograde so you're back on Mars";
        theTxt.style.color = "white";
        theBody.style.backgroundImage="url('assets/mars.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/mars.jpg";
    }
    else if (iteration===4){
        theTxt.textContent = "G** Damnit that's the wrong Venus";
        theTxt.style.color = "black";
        theBody.style.backgroundImage="url('assets/venus.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/venus2.jpg";
    }
    else if(iteration===5){
        theTxt.textContent = "There we go. Now let's head back to Earth.";
        theTxt.style.color = "white";
        theBody.style.backgroundImage="url('assets/venusbackground.gif')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/venus.jpg";
    }
    else if(iteration===6){
        theTxt.textContent = "Oh no! We've been gone so long it's winter now.";
        theTxt.style.color = "black";
        theBody.style.backgroundImage="url('assets/winter.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/earth.jpg";
    }
    else if(iteration===7){
        theTxt.textContent = "Avalanche!!!";
        theTxt.style.color = "black";
        theBody.style.backgroundImage="url('assets/avalanche.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/earth.jpg";
    }
    else if(iteration===8){
        theTxt.textContent = "That sucked. Let's go";
        theTxt.style.color = "black";
        theBody.style.backgroundImage="url('assets/winter2.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/earth.jpg";
    }
    else if(iteration===9){
        theTxt.textContent = "So this is what Jupiter is like. Hey, what's that over there?";
        theTxt.style.color = "white";
        theBody.style.backgroundImage="url('assets/jupiter.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/jupiter.jpg";
    }
    else if(iteration===10){
        theTxt.textContent = "It's Channing Tatum and Mila Kunis from 'Jupiter Ascending'! What are you two doing here?";
        theTxt.style.color = "white";
        theBody.style.backgroundImage="url('assets/jupiterascending.jpg')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/jupiter.jpg";
    }
    else if(iteration===11){
        theTxt.textContent="";
        theTxt2.textContent = "       We're stuck here until we understand the plot of our movie.";
        theTxt2.style.color = "black";
        theBody.style.backgroundImage="url('assets/jupiterascending.jpg')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/jupiter.jpg";
    }
    else if(iteration===12){
        theTxt2.textContent="";
        theTxt.textContent="Sheesh. Who has that kind of time";
        //theTxt2.textContent = "We're stuck here until we can explain the plot of our movie.";
        //theTxt2.style.color = "black";
        theBody.style.backgroundImage="url('assets/jupiterascending.jpg')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/jupiter.jpg";
    }
    else {
        theTxt.textContent = "Back to Earth? This isn't so bad.";
        theTxt.style.color = "black";
        theBody.style.backgroundImage="url('assets/yellowstone.webp')";
        theBody.style.backgroundRepeat="no-repeat";
        theBody.style.backgroundSize="cover";
        theImage.src="assets/earth.jpg";
    }
}

 // create a user index to keep track of clicks