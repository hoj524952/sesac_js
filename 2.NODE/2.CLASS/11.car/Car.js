class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model}이 시동검.`)
    }
    
    drive() {
        console.log(`${this.brand} ${this.model}이 운전함.`)
    }
    
    stop() {
        console.log(`${this.brand} ${this.model}이 멈춤.`)
    }

}

module.exports = Car;