class Car {
    constructor(make, model) {
        this.brand = make;
        this.model = model;
    }

    welcome() {
        return this.brand + " " + this.model + " 입니다."
    }

    drive() {
        return `${this.model}가 운전을 시작합니다.`
    }

}

const myCar = new Car('현대', '코나');
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.welcome());
console.log(myCar.drive());

const yourCar = new Car('기아', '모닝');

console.log(yourCar.brand);
console.log(yourCar.model);
console.log(yourCar.welcome());
console.log(yourCar.drive());