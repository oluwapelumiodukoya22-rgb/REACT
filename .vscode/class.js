class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    }
}
const person1 = new Person("Pelumi",17);
person1.greet();