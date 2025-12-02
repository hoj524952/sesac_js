class Car {
    constructor(name){
        this.name = name;
    }
}

class Person{
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `"나의 이름은: ${this.name}임"`;
    }
}

const myCar = new Car('테슬라');
const myPerson = new Person('나');

console.log(myCar);
console.log(`내 자동차는 ${myCar}임.`);
console.log(`내 자동차는 ${myCar.name}임.`);
console.log(`나는 ${myPerson}임.`);
console.log(`내 자동차는 ${myPerson.name}임.`);



