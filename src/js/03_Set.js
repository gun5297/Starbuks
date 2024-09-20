/** new Set () : 중복처리 제거 */
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add(3);
console.log(mySet);

mySet.delete(2);
mySet.delete(3);
console.log(mySet);

console.log(mySet.has(1));
console.log(mySet.has(3));

mySet.clear();
console.log(mySet);

const arr = ['홍길동', '김철수', '이순길', '홍길동'];
const obj = new Set('감자', '고구마', '감자', '우동', '김치');
const arr1 = new Set(arr);
console.log(obj);
console.log(arr1);

const arr2 = ['김치', '우동', '치킨', ...new Set(arr)];
console.log(arr2);

const obj1 = [
    {
        id: 1,
        text: '우동',
    },
    {
        id: 2,
        text: '라면',
    },
    {
        id: 3,
        text: '라멘',
    },
    {
        id: 4,
        text: '우동',
    },
    {
        id: 5,
        text: '김밥',
    },
    {
        id: 6,
        text: '우동',
    },
    {
        id: 7,
        text: '라멘',
    },
    {
        id: 8,
        text: '고기',
    },
    {
        id: 9,
        text: '감자탕',
    },
    {
        id: 10,
        text: '우동',
    },
];

const arr3 = ['사탕', '과자', ...new Set(obj1.map((itme) => itme.text))];
console.log(arr3);
