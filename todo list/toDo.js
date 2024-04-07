let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItems(){
    itemsDiv.innerHTML = null; //this bit is removing items that are inside of a itemsDiv

    //below will take all items and it will give "PARENTS"(index of 0 is item 1, index of 1 is item 2 and so on)
   //(0, "item 1")   (1, "item 2")
    for(const[idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

                                                //"p" is actualy thing to call a paragraph
        const text = document.createElement("p") //creates element in DOM or a intrerface
        text.style.display="inline"  //obvious what is this for....
        text.style.marginRight="10px"
        text.textContent = item;  //we have created a pragraph tag

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx) //this is wraping call of a function in another function
                //this is called WRAPPER SYNTAX
        //otherwise JS will do remItem function anyways even if we dont click the button
       
       container.appendChild(text)
       container.appendChild(button)
       
        itemsDiv.appendChild(container)  //creates text element and adds it inside of a div so we can keep ading different div elements
    
    }

}


//this will use the local storage for storing stuff, like strings, numbers etc
function loadItems(){
    const oldItems = localStorage.getItem(storageKey)  
    //because this is an string, we will need to convert it to an array wich we can use

    if(oldItems) items = JSON.parse(oldItems)  //this reads it and converts into an JS object(an array)
    renderItems()

}   


function removeItem(idx){
    items.splice(idx, 1)    
    //removes element at specific index (idx,1)(index, number of elemeents)
    renderItems()  
    saveItems()
}

function saveItems(){
    const stringItems = JSON.stringify(items)  //we are converting an aray into a string
    localStorage.setItem(storageKey, stringItems)  //this will keep uptodate version of items
        //we have local storage, its not to be used for sensitive information
}

function addItem(){
    const value = input.value;
    if(!value){
        alert("you can not add an empty item")
        return      //this is called naked return
    }

    items.push(value) //puhses a value/the thing that is written into an array
    renderItems()
    input.value="" //resets textbox to be empty
    saveItems()

}

document.addEventListener("DOMContentLoaded", loadItems)
            //we are adding eventlistener to HMTML so we can listen for particular event, afterwords it will do function witch follows
