const rngBtn = document.getElementById ("rngBtn");
const rngLabel = document.getElementById("rngLabel");
const min = 1;
const max = 20;

let randomNum;
rngBtn.onclick = function(){
    randomNum = Math.floor((Math.random() * max) + min);
    rngLabel.textContent = randomNum;
    
}




