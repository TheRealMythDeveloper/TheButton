const effects = [
shrinkPage,
washingMachine,
crunchyColors,
notification,
spawnParticles,
growPage,
buttonExplode,
askew,
//partiallyWrongSpelling,
//TechnicallyCorrect
]; 

function buttonExplode() {
    let explode = document.getElementById("gif");
    explode.classList.remove("noexplosion");
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

if (counter) counter.textContent = "0";

document.getElementById("deepFryable").classList.remove("deepfried");

}
 

document.getElementById("blueButton").addEventListener("click", blueReset);
