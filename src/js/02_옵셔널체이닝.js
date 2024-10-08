/* 
    optional chaining 연산자 (?.) 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고,
    연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.

    ?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 nullish (null 또는 undefined)이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락된다. 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면, undefined를 리턴한다.
*/

const user = { name: '홍길동', addrs: { city: '인천' } };
console.log(user?.name);
console.log(user?.addr?.city);
console.log(user?.addr?.email);
console.log(user?.addr?.dog);
