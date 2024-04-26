
class Person{
                //... spread operator(we can pass in 
                    //different parts of an adress and store it as an array)
    constructor(name, age, ...address){ //this must be taken care not to confuse with the class Adress
        this.name=name;         //adress here is a parameter in a constructor
        this.age=age;
        this.address = new Address(...address);
    }
}



class Address {
    constructor(street, city, country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

const person1 = new Person("Bro", 30, "124 St.",
                            "City Big one", "State of State");

const person2 = new Person("Dude", 24, "223 St.", 
                            "City Littletown", "State of State");

console.log(person1.name);
console.log(person2.address.country)