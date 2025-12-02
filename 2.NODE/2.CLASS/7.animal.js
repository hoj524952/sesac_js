class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "아무 말..."
    }
}

class Dog extends Animal {
    makeDogSound() {
        return "멍멍"
    }
}
class Cat extends Animal {
    makeCatSound() {
        return "야오"
    }
}


const myDog = new Dog('Doooggy');

console.log(myDog.name);
console.log(myDog.makeSound());

console.log(myDog.makeDogSound());

const myCat = new Cat('Cattt');
console.log(myCat.name);

console.log(myCat.makeSound());
console.log(myCat.makeCatSound());

const myCow = new Animal("한우");

console.log(myCow.name);
console.log(myCow.makeSound());

// console.log(myCow.makeCatSound());