const texty = document.getElementById("texty");

function reverseString(str){
    return str.split("").reverse().join("");

}

function check(){
    const value = texty.value;
    const reverse = reverseString(value)
    if(value===reverse){
alert("palindrome")
    }
    else{
        alert("not today")
    }
    texty.value="";

}