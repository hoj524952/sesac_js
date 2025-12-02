class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`안녕, 나는 ${this.name}임.`);
    }
}
// module.exports를 통해 내 파일 내에서 다른 곳에서 쓸거임.
module.exports = Person;