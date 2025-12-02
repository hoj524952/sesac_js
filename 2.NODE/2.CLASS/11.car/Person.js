const Car = require('./Car');

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;

    }

    greet() {
        console.log(`안녕하세요, 저는 ${this.age}살, ${this.gender}, ${this.name} 입니다.`);
    }

    getInCar(car) {
        console.log(`안녕하세요. 저는 ${this.name}이고 ${car.brand}인 ${car.model}을 타고 있습니다.`)
    }

}

module.exports = Person;