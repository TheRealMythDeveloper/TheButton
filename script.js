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
 


function pressButton() {
    let effect = effects[Math.floor(Math.random() * effects.length)];
    effect();
}
 
function washingMachine(number) {
    for (number in number) {
        document.body.style.transform = "rotate(2dedg)";
    }
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