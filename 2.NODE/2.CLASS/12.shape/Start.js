const Shape = require('./Shape');

class Star extends Shape{
    constructor(length) {
        super();
        this.length = length
        
    }
    getArea() {
        return this.length * this.length * Math.PI;
    }
}


module.exports = Circle;