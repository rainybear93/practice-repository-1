class Animal{
    constructor(name, age){
        this.name = name; 
        this.age = age; 
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}kmph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age)
        
        this.runSpeed = runSpeed;
            }
        run(){
            console.log(`This ${this.name} can run`);
            super.move(this.runSpeed);
        }
}


const rabbit = new Rabbit("rabbit", 1, 25);

rabbit.run();