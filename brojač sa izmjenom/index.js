const increseBy1BTN = document.getElementById ("increseBy1BTN"); 
const decreaseBy1BTN = document.getElementById ("decreaseBy1BTN"); 
const resetItBTN = document.getElementById("resetItBTN") ; 
const cubeItBTN = document.getElementById ("cubeItBTN") ; 
const squareItBTN = document.getElementById ("squareItBTN") ; 



const countLabel = document.getElementById ("countLabel") ;

let count = 0;

increseBy1BTN.onclick = function() {
    count ++;
    countLabel.textContent = count;
}
decreaseBy1BTN.onclick = function() {
    count --;
    countLabel.textContent = count;
}
resetItBTN.onclick = function() {
    count = 1;
    countLabel.textContent = count;
}
cubeItBTN.onclick = function() {
    count = Math.pow(count,2);
    countLabel.textContent = count;
}
squareItBTN.onclick = function() {
    count = Math.sqrt(count);
    countLabel.textContent = count;
}