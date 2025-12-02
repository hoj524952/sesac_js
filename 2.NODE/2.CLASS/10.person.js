class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;

    }

    greet() {
        console.log(`안녕하세요, 저는 ${this.age}살, ${this.name} 입니다.`);
    }

    walk() {
        console.log(`${this.name}은/는 걷고 있음.`)
    }

    eat() {
        console.log(`${this.name}은 ${this.place}에서 밥을 먹고 있음.`)
    }
    
    goto(place) {
        this.place = place;
    }
}

const person1 = new Person("철수", 25, "남성");
// console.log(person1.name);

person1.greet();
person1.walk();
// person1.place = '공원';  권장하지 않음. 코드 복잠해짐..
person1.eat();

const person2 = new Person("영희", 22, "여성");

person2.greet();
person2.walk();
person2.eat();
person2.goto('편의점'); // getter/setter 또는 함수를 통해 접근...
person2.eat();