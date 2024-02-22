const meniOpcija1 = document.getElementById ("meniOpcija1");
const meniOpcija2 = document.getElementById ("meniOpcija2");
const meniOpcija3 = document.getElementById ("meniOpcija3");

const prilog1 = document.getElementById("prilog1");
const prilog2 = document.getElementById("prilog2");
const prilog3 = document.getElementById("prilog3");
const prilog4 = document.getElementById("prilog4");

const mysubmit = document.getElementById("mysubmit");
const narudzba_rezultat = document.getElementById("narudzba_rezultat");
const prilog_submit = document.getElementById("prilog_submit");
const narudžba_rezultat = document.getElementById("narudžba_rezultat");


mysubmit.onclick = function(){
    if (meniOpcija1.checked){
        narudzba_rezultat.textContent =  "Vaša narudžba je VELIKI svinjski giros";
    }
    else if (meniOpcija2.checked){
        narudzba_rezultat.textContent = `Vaša narudžba je srednji svinjski giros`;
    }
    else if (meniOpcija3.checked){
        narudzba_rezultat.textContent = `Vaša narudžba je mali svinjski giros`;
    }
        
}
prilog_submit.onclick = function getValue(){
    let kvadratici = document.getElementsByName("prilog");
    let result ="";
    for (var i = 0; i < kvadratici.length; i++) {
        if (kvadratici[i].checked) {
            result += kvadratici[i].value
                + " " + " , ";
        }
    }
    narudžba_rezultat.textContent = "Vaši prilozi su " + result +".";
}



//there is just character , after last multiple option meni and i cant get rid of it....so i will just settle with this
//basicly a simple(not for me) meni for Gyros fast food


