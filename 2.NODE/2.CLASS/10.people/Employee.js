const Person = require('./Person')

class Employee extends Person {
    constructor(name, company) {
        super(name);
        this.company = company;
    }

    greet() {
        console.log(`안녕... 나는 ${this.name} 이고 ${this.company}에서 일함`);
    }
}

module.exports = Employee;