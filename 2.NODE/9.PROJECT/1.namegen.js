// class NameGenerator {
//     constructor() {
//         this.lastNames = ['김', '이', '박'];
//         this.firstNames = ['서준', '민준', '지윤'];
//     }

//     pickRandom(arr) {
//         return arr[Math.floor(Math.random() * arr.length)];
//     }

//     generateName() {
//         const lastname = this.pickRandom(this.lastNames);
//         const firstname = this.pickRandom(this.firstNames);
//         return lastname + firstname;
//     }
// }

// const gen = new NameGenerator();

// console.log(gen.generateName());

// const names = ['홍길동', '김길동', '박길동', '이길동'];

// function generateName() {
//     const index = Math.floor(Math.random() * names.length);
//     // 0~3까지의 숫자
//     // console.log(index);
//     return names[index];
// }

// function generateGender() {
//     const prob = Math.random();

//     if(prob < 0.5) {
//         return "남성";
//     }
//     else {
//         return "여성";
//     }

// }

// function generateGender2() {
//     return Math.random() < 0.5 ? "남성" : "여성"
// }

// function generateBirthdate() {
//     const year = Math.floor(Math.random() * 100);
//     const month = Math.floor(Math.random() * 12);
//     const day = Math.floor(Math.random() * 30);

//     return `${year}-${month}-${day}`
// }

// console.log(generateName());
// console.log(generateGender2());

const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

function randomItem(nameList) {
    return nameList[Math.floor(Math.random() * nameList.length)];
}

function generateName() {
    const lastNames = ['김', '이', '박', '최', '정', '조', '윤', '장', '임', '오'];

    const firstNames = ["나래","하나","다은","라온","하람","하늘","서하","채아","채윤","다온",
    "하윤","하린","지안","다인","소윤","서윤","나윤","예린","예나","민서",
    "지후","지훈","현우","민준","도윤","서준","하준","시우","주원","우진"]

    const lastName = randomItem(lastNames);
    const firstName = randomItem(firstNames);

    return lastName + firstName;
}

function generateGender() {
    return Math.random() < 0.5 ? "남성" : "여성";
}

function generateBirthdate() {
    const year = Math.floor(Math.random() * 100 + 1940);
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 30);

    return `${year}-${month}-${day}`
}

function generateAddress() {
    const metroes = ['서울특별시' ,'부산광역시', '대구광역시', '인천광역시', '광주광역시', 
        '대전광역시', '울산광역시','세종특별자치시','경기도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', 
        '경상남도', '제주특별자치도', '강원특별자치도']
    
    const district = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구',
        '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구',
        '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구']
    
    const metro = randomItem(metroes);
    
    const district = 
    return metro;
}


const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const names = generateName();

const names = Array.from({length: 300}, () => ({
    name: generateName(),
    age: Math.floor(Math.random() * 60) + 10,
    gender: generateGender(),
    birthDate: generateBirthdate(),
    uuid: uuidv4(),
    address: generateAddress()
}));

const csvWriter = createCsvWriter({
    path: 'user.csv',
    header: [
        {id: 'name', title: '이름'},
        {id: 'age', title: '나이'},
        {id: 'gender', title: '성별'},
        {id: 'birthDate', title: '생년월일'},
        {id: 'uuid', title: 'uuid'},
        {id: 'address', title: '주소'}
    ]
});

// const userName = Array.from({length:10}, () => generateName());



csvWriter.writeRecords(names)
    .then(() => console.log('이름 생성 완료'));