const Car = require('./Car');

class Sedan extends Car {
    constructor(brand, model, autopilot) {
        super(brand, model);
        this.autopilot = autopilot;
    }
    autoPilot() {
        if(this.autopilot == true) {
            console.log(`${this.brand}, ${this.model}의 자율주행을 시작합니다...`);
        }
        else {
            console.log(`자율 주행 옵션이 없습니다... 돈을 더 내야 합니다...`);
        }
    }
}


module.exports = Sedan;