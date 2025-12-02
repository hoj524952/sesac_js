const Shape = require('./Shape');

class Trapezium extends Shape{
    constructor(base1, base2, height) {
        super();
        this.base1 = base1;
        this.base2 = base2;
        this.height = height;
        
    }
    getArea() {
        return (this.base1 + this.base2) * this.height / 2;
    }
}


module.exports = Trapezium;