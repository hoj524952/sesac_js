const Person = require('./Person')

class Parent extends Person {
    constructor(name, age, gender, jobtitle) {
        super(name, age, gender);
        this.jobtitle = jobtitle;
    }
    say() {
        console.log(`${this.name}, ${this.age}, ${this.job}입니다.`)
    }

}

module.exports = Parent;