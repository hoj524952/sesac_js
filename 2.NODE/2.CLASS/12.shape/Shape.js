class Shape {
    constructor(length) {
        this.length = length;
    }

    getArea() {
        throw Error("구현 필요");
    }
}

module.exports = Shape;