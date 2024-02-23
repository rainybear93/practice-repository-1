const mjestoOcjena = document.getElementById("mjestoOcjena");
const btnOcjene = document.getElementById("btnOcjene");

let studentScore ;
let letterGrade;
const p1 = document.getElementById("p1");


btnOcjene.onclick = function(){

    studentScore = mjestoOcjena.value;
    studentScore = Number (studentScore);

    switch (true){ 
    case studentScore >=101:
        p1.textContent = "Ponovo preračunati bodove, broj bodova ne može ići preko 100."
        break
    case studentScore >= 90:
        p1.textContent = "Vaša ocjena je 10."
        break
    case studentScore >= 80:
        p1.textContent = "Vaša ocjena je 9."
        break
    case studentScore >=70:
        p1.textContent = "Vaša ocjena je 8."
        break
    case studentScore >=60:
            p1.textContent = "Vaša ocjena je 7."
         break
    case studentScore >=51:
        p1.textContent = "Vaša ocjena je 6."
        break
    case studentScore <=50:
        p1.textContent = "Niste položili"
        break
   
}
}