const tel = '010-9417-7260';

const regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel));

// const  regexp = new RegExp(/is/i);
// const  regexp = new RegExp(/is/, i);
// const  regexp = new RegExp('is',i);

// const count = (str,char) => (str.match(new RegExp(char, 'gi'))?? []).length;

// console.log(count('Is this all there is?', 'is'));
// console.log(count('Is this all there is?', 'xx'));

// const target = 'Is This all there is?';
// const regexp =/is/ig;
// console.log(regexp.exec(target));+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++------------------------------------------
// console.log(target.match(regexp));


// A{m,n} : A repeates as many as from m to n , 

// const target = 'A AA B BB Aa AAA AAAAA';
// const regexp =/A{3}/g;
// const regexp1 =/A+/g;
// const regexp2 =/A{1,}/g;


// console.log(target.match(regexp1));
// console.log(target.match(regexp2));

//+ === {1,} , ? ==={0,1}

// const target = 'color , colour, colouur';

// const regexp =/colou?r/g;

// console.log(target.match(regexp));


//[]범위 지정, 스페이스는 오류, \d ===[0-9], \D는 반대, \w=[A-Za-z0-9_],  \W는 반대(특수문자)
//[^] means NOT, outside ^[] 는 문자열의 시작 $은 문자열의 마지막


// const target = 'A AA B BB Aa ABC AAAA Bb 12.345 6,88 6_7 a_11';
// const regexp = /A+|B+/g;
//const regexp = /[A-Z]+/g;
//const regexp = /[\w]+/g;
// const regexp = /[^\d]+/g;

// console.log(target.match(regexp));


const target = 'https://poiemaweb.com';
const regexp =/^https/;
console.log(regExp.test(target));
console.log(/^(https|http):\/\//.test(target));


