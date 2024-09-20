/* 
    함수가 선언될 때의 유효범위( 렉시컬 범위)를 기억하고 있다가 함수가 외부에서 호출 될 때
    그 유효범위의 특정 변수를 참조할 수 있는 개념입니다.
*/

/** 함수 스코프 (블록 영역) */
const outer = () => {
    const x = 10;
    const y = 20;
    console.log(x);
    const inner = () => {
        const x = 30;
        console.log(x);
        console.log(y);
    };
    return inner;
};

const z = outer();
z();

console.log();

const cnt = () => {
    let a = 0;
    return () => {
        return (a += 1);
    };
};

const count = cnt();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log();
const count1 = cnt();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
