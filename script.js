const effects = [
shrinkPage,
washingMachine,
crunchyColors,
//crunchyAudio, 
//possibly ^
notification,
//spawnParticles,
growPage,
//buttonExplode,
askew,
//partiallyWrongSpelling,
//TechnicallyCorrect
];
 
  


function crunchyColors() {
    let page = document.getElementById("deepFryable");

    page.classList.add("deepfried");
}

const alertList = [
"Can you stop pressing me?",
"This is very uncomfortable.",
"Please stop",
"You know, I can call a laywer",
"I have rights too!",
"Leave me alone",
"Can you go away?",
"Are you blind?",
"Please stop pressing me \nit is not very nice to do \nI will call the cops",
"I will recite haikus against you",
"I don't like this, no \ncan you please just go away now \n I am getting very angry"
];

function notification() {
    let message = alertList[Math.floor(Math.random() * alertList.length)];
    alert(message);
}

let button = document.getElementById("bigButton");

function pressButton() {
    let effect = effects[Math.floor(Math.random() * effects.length)];
    effect(); 
}

button.addEventListener("click", pressButton);


 let spinAmount = 0;
 
function washingMachine() {
    let number = Math.floor(Math.random() * 10) +1;
spinAmount += 360 * number;
    document.body.style.transition = "transform 2s ease-in-out";
    document.body.style.transform = `rotate(${spinAmount}deg)`;

}
let alreadySkewed = false;

function askew() {
    if (alreadySkewed === false) {
 document.body.style.transform = `rotate(25deg)`;
    } else {
        alreadySkewed = "false"
         document.body.style.transform = `rotate(-25deg)`;

    } 

 alreadySkewed = true; 
}

function growPage() {
    document.getElementById("bigButton").style.transform = "scale(2.75)";
}

function shrinkPage() {
    document.getElementById("bigButton").style.transform = "scale(0.25)";
} 
     


function blueReset() {
    document.body.removeAttribute("style");
    document.body.className = ""; 
    spinAmount = 0;

    const button = document.getElementById("bigButton");
    button.removeAttribute("style");
 alreadySkewed = false;

    document.querySelectorAll(".temporary").forEach(el => el.remove());
let counter = document.getElementById("pressCount");

if (counter) counter.textContent = "0";

document.getElementById("deepFryable").classList.remove("deepfried");

}
 

document.getElementById("blueButton").addEventListener("click", blueReset);
