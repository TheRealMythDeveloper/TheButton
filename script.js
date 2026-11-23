const effects = [
shrinkPage,
washingMachine,
crunchyColors,
crunchyAudio, 
//possibly ^
notification,
spawnParticles,
growPage,
buttonExplode,
askew,
partiallyWrongSpelling,
TechnicallyCorrect
];
 

let button = document.getElementById("bigButton");
function pressButton() {
    let effect = effects[Math.floor(Math.random() * effects.length)];
    effect();
}
button.addEventListener("click", pressButton);



 
function washingMachine(number) {
    let number = Math.floor(Math.random() * 10) +1;

    document.body.style.transform = "transform 2s ease-in-out";
    document.body.style.transform = `rotate(${360 * (i+1)}deg)`;
   
        
}
function growPage() {
    document.getElementById("bigButton").style.transform = "scale(2.75)";
}
function shrinkPagePage() {
    document.getElementById("bigButton").style.transform = "scale(0.25)";
}
    


function blueReset() {
    document.body.removeAttribute("style");
    document.body.className = "";
    const button = document.getElementById("bigButton");
    button.removeAttribute("style");

    document.querySelectorAll(".temporary")
    .forEach(el => el.remove());

    document.getElementById("pressCount").textContent = "0";
}