class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "아무 말..."
    }
}

class Dog extends Animal {
    makeSound() {
        return "멍멍"
    }
}
class Cat extends Animal {
    makeSound() {
        return "야오"
    }
}


const myDog = new Dog('Doooggy');

console.log(myDog.name);
console.log(myDog.makeSound());


const myCat = new Cat('Cattt');
console.log(myCat.name);

console.log(myCat.makeSound());

const myCow = new Animal("한우");

console.log(myCow.name);
console.log(myCow.makeSound());
