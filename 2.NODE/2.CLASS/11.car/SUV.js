const Car = require('./Car');

class SUV extends Car {
    constructor(brand, model, color) {
        super(brand, model);
        this.color = color;
    }

    say() {
        console.log(`${this.brand}, ${this.model}의 ${this.color}색상 세단임.`);
    }

}

module.exports = SUV;