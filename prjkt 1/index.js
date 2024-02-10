let c;
let a;
let b;

document.getElementById("SubmitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);
    b = document.getElementById("bTextBox").value;
    b = Number(b);
    
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C:" + c.toFixed(2);
//.toFixed() limits number of decimal points, it makes me happy
}


