const Shape = require('./Shape');

class Triangle extends Shape{
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
        
    }
    getArea() {
        return this.base * this.height / 2;
    }
}


module.exports = Triangle;