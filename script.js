let gravityActive = false;
window.addEventListener("load", () => {
    gravity.pauseSimulation();
});
const effects = [
shrinkPage,
washingMachine,
crunchyColors,
notification,
spawnParticles,
growPage,
buttonExplode,
askew,
splitButton,
gravity
];  
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 

function gravity() {
   gravity.resumeSimulation(); 
gravity.applyImpulse("bigButton", 0, 300);}
function splitButton() {
    let extraButton = document.getElementById("ANOTHERBUTTON");
    extraButton.classList.remove("hidden");
extraButton.addEventListener("click", buttonTwo); 
}   
   
function buttonTwo() {
      let rick = document.getElementById("Rick");
        rick.classList.add("rick");
        rick.classList.remove("noRick");
        sleep(2000);
        rick.classList.remove("rick");
        rick.classList.add("noRick");
        let buttonTwo = document.getElementById("ANOTHERBUTTON");
        buttonTwo.classList.add("hidden");
}

function buttonExplode() {  
    let explode = document.getElementById("gif");
    explode.classList.remove("noexplosion");
    sleep(1000);
    explode.classList.add("explosion");
    
}

let particleAnimation;
let particles = [];

function animateParticles() {
    for (let p of particles) {
        p.x+= p.velocityx;
        p.y += p.velocityy;
        if (p.x <= 0 || p.x >= window.innerWidth-7) {
            p.velocityx *= -1;
        }
        if (p.y <= 0 || p.y >= window.innerHeight - 7) {
            p.velocityy *= -1;
        }
        p.element.style.left = p.x + "px";
        p.element.style.top = p.y + "px";
    }
    particleAnimation = requestAnimationFrame(animateParticles);
}

function spawnParticles() {
cancelAnimationFrame(particleAnimation);
document.querySelectorAll(".particle").forEach(p => p.remove());

particles = [];

for (let i = 0; i < 120; i++) {
    let p = document.createElement("div");
    p.classList.add("particle")
    //squareorcircle
    if (Math.random() > 0.5) {
        p.style.borderRadius = "50%";
    }   
    //color
    p.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;

let velocityx = (Math.random() - 0.5) * 24;
let velocityy = (Math.random() - 0.5) * 24;
document.body.appendChild(p);

particles.push({element:p, x:x, y:y, velocityx:velocityx, velocityy:velocityy

});
}
animateParticles();
}


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
let counterTick = 0;

function pressButton() {
    let effect = effects[Math.floor(Math.random() * effects.length)];
    effect(); 
    let counter = document.getElementById("buttonText");
   
    counterTick++;
    changeText();
    checkRick();
    checkBoom();
}
const text = [
    "Oh",
    "hello",
    "Welcome to the button room",
    5,
    "I see you are enjoying yourself",
    10,
    "I don't know how you are still intrested with this stupid button",
    12,
    "I never invited you in here",
    "so technically you are tresspassing",
    20,
    "please leave?",
    25,
    "no?",
    30,
    "..",
    40,
    "fine.",
    42,
    "It isn't my button anyways",
    45,
    "I don't know what it does",
    50,
"to be honest, I've been to scared to click it.",
52,
"and then you come along",
55,
"and just press away!!",
65,
"seriously.",
"you don't know what this thing could even do!",
75,
"what if it blows up!",
80,
"or..",
85,
"what if..",
90,
"it were to..",
95,
"...",
110,
"Got you - Myth", //rickroll?
115,
"also bomb",
"",
200,
"You have nothing better to do.. huh.",
300,
"how in the world are you still going?",
450,
"I give up.",


500,
"Have fun with the button.. you obviously like it a lot.",

1000,
"If you made it this far.. thats just impressive.",
1500,
"I commend you for you amazingness.",
2000,
"I declare you king of button. - Myth",
5000,
"what more do you want",
"to be the emperor?",
"Thats a lot of power you know,",
"I couldn't take that much..",
"I wouldnt.",
"You should stop before you lose your mind",
"Trust me",
"Its not a good Idea.",
"Look at all the disney movies!!",
"*Sigh*",
"You know what?",
"Its a button.",
"You may be..",
"The dictator.",
"You are very welcome.",
"goodbye mr.dictator."
];

let counterText = 0;

function checkRick() {
    if (counterTick === 110){
        let rick = document.getElementById("Rick");
        rick.classList.add("rick");
        rick.classList.remove("noRick");
        sleep(10000);
        rick.classList.remove("rick");
        rick.classList.add("noRick");
    }
}
function checkBoom() {
    if (counterTick === 115){
        let rick = document.getElementById("gif");
        rick.classList.add("nuke");
        rick.classList.remove("nonuke");
        sleep(10000);
        rick.classList.remove("nuke");
        rick.classList.add("nonuke");
    }
}

function changeText() {
    let current = text[counterText];

    if (typeof current === "string") {
        document.getElementById("buttonText").textContent = current;
        counterText++;
        return;
    }

    if (typeof current === "number") {
        if (counterTick >= current) {
            counterText++;
            changeText();
        }
    }
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
     document.body.style.transform = "rotate(25deg)";
        alreadySkewed = true;
    } else {
        document.body.style.transform = "rotate(-25deg)";
alreadySkewed = false;
    } 
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
cancelAnimationFrame(particleAnimation);
particles = [];
    const button = document.getElementById("bigButton");
    button.removeAttribute("style");
 alreadySkewed = false;

 let explode = document.getElementById("gif");
explode.classList.add("noexplosion");
    explode.classList.remove("explosion");

    document.querySelectorAll(".temporary, .particle").forEach(el => el.remove());
let counter = document.getElementById("pressCount");
gravity.pauseSimulation();
gravityActive = "false";
if (counter) counter.textContent = "0";

document.getElementById("deepFryable").classList.remove("deepfried");

}
 
 
document.getElementById("blueButton").addEventListener("click", blueReset);
   