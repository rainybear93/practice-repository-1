
const banana = {
    name : "Banana",
    price : 3.00,
    amount : 1,
    value:1.00,

}
const apple ={
    name:"apple",
    price:1.33,
    amount:1,
    value:1.00,
}


function addData(){
    let input = document.getElementById("barCodeReader").value;
   let table = document.getElementById("table");
   let newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = '<input type="button" id="button1">';
    newRow.insertCell(1).innerHTML = apple.name;
    newRow.insertCell(2).innerHTML = apple.amount;
    newRow.insertCell(3).innerHTML = apple.value;
    newRow.insertCell(4).innerHTML = apple.price;

    clearInputs();
    }




function clearInputs(){
    let input = document.getElementById("barCodeReader").value = "";
}
