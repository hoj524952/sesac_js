const SUV = require('./SUV')
const Sedan = require('./Sedan')
const Parent = require('./Parent')
const Child = require('./Child')
const Person = require('./Person');
const Car = require('./Car');



// 자동차를 상속받은 Sedan, SUV 도 있음...

const myCar = new SUV('테슬라', 'Model X');
const dadCar = new Sedan('테슬라', 'Model X', true);

// Person을 상속받아서 Parent, Child가 있음
const dad = new Parent('빌게이츠', 40, '남성', '회사원');

const son = new Child('주니어빌', 20, '남성', '대학생');


// 사람이 차를 타는 함수 구현
dad.getInCar(dadCar);
son.getInCar(dadCar);


// 차에는 움직이는 함수 구현
dadCar.start();
dadCar.autoPilot();
// son.playInCar();
dadCar.stop();
