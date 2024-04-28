

const submit = document.getElementById("BTNfreqEntry");
let input = document.getElementById("freqEntry");
let output = document.getElementById("freqReveal");



function freqRevealer(){
    let freq;
    freq = input.value
if (freq>=300 && freq<1000){
    output.innerHTML = "Frequency you have entered is in UHF band."
   }
else if(freq<300 && freq>30){
    output.innerHTML = "Frequency you have entered is in VHF band."    
}
else if(freq<=30 && freq>3){
    output.innerHTML = "Your freq is in HF band."    
}
else if(freq<=3 && freq>0){
    output.innerHTML = "You have entered ELF band."    
}
else if(freq<=0){
    output.innerHTML = "Please enter a number that is higher then 0."
}
else if(freq>=1000 && freq<2000){
    output.innerHTML = "Frequency you have entered is in 1G range."
}
else if(freq>=2000 && freq<3000){
    output.innerHTML = "Frequency you have entered is in 2G range."
}
else if(freq>=3000 && freq<4000){
    output.innerHTML = "Frequency you have entered is in 3G range."
}
else if(freq>=4000 && freq<5000){
    output.innerHTML = "Frequency you have entered is in 4G range."
}
else if(freq>=5000 && freq<6000){
    output.innerHTML = "Frequency you have entered is in 5G range."
}
else if(freq>6000){
    output.innerHTML = "Please enter a somewhat smaller number."
}
}




function clearLine(){
    input.innerHTML = ""
}//zamarati se poslije sa ovim

