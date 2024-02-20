const textbox1 = document.getElementById("textbox1");
const button1 = document.getElementById("button1");
const result1 = document.getElementById("result1");


let age;

button1.onclick = function() {
    age = textbox1.value;
    age = Number (age);

    if (age >= 18){
        result1.textContent = "You are old enough to enter this site.";
    }
    else if (age < 18){
        result1.textContent = "You are NOT old enough to enter this site.";
    }
    
}





