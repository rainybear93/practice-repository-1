const body = document.getElementsByTagName("body")[0]

function setColor (name){
    body.style.backgroundColor = name;
}
function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}



/* this is my previously learned method, above is simpler and more elegant way by invoking the function
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

body.style.backgroundColor = "pink";

btn1.onclick = function(){
    body.style.backgroundColor = "green";
}
btn2.onclick = function(){
    body.style.backgroundColor = "red";
}
btn3.onclick = function(){
    body.style.backgroundColor = "blue";
}
btn4.onclick = function(){
    body.style.backgroundColor = "random";
}
*/