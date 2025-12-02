const Shape = require('./Shape');

class Square extends Shape{
    constructor(length) {
        super();
        this.length = length;
        
    }
    getArea() {
        return this.length * this.length;
    }
}


module.exports = Square;