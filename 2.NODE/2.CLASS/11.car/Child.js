const Person = require('./Person');


class Child extends Person {
    constructor(name, age, gender, jobtitle) {
        super(name, age, gender);
        this.jobtitle = jobtitle;
    }
}

module.exports = Child;