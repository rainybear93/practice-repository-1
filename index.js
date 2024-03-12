const minNum = 1;
const maxNum = 20;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running=true){
guess = window.prompt(`guess a number betwen ${minNum} and ${maxNum}`)
guess = Number(guess);

if(isNaN(guess)){
    window.alert("please enter a valid number")
}
else if(guess < minNum || guess > maxNum){
window.alert("please enter a valid number")
}

else{ 
    attempts ++;
    if(guess < answer){
        window.alert("too low try again")
    }
    else if (guess > answer){
        window.alert("too high try again")

    }
    else{
        window.alert(`the answer is ${answer}. It took you ${attempts}  to guess right.`)
        running = false;
    }
}
    
}