const effects = [
shrinkPage,
washingMachine,
//crunchyColors,
//crunchyAudio, 
//possibly ^
//notification,
//spawnParticles,
growPage,
//buttonExplode,
//askew,
//partiallyWrongSpelling,
//TechnicallyCorrect
];
 

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
function growPage() {
    document.getElementById("bigButton").style.transform = "scale(2.75)";
}
function shrinkPage() {
    document.getElementById("bigButton").style.transform = "scale(0.25)";
}
    

document.getElementById("blueButton").addEventListener("click", blueReset);
function blueReset() {
    document.body.removeAttribute("style");
    document.body.className = ""; 
    spinAmount = 0;

    const button = document.getElementById("bigButton");
    button.removeAttribute("style");

    document.querySelectorAll(".temporary")
    .forEach(el => el.remove());
let counter = document.getElementById("pressCount");
if (counter) counter.textContent = "0";
}