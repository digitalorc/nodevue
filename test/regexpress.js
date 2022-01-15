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


const target = 'A AA B BB Aa ABC AAAA Bb';
const regexp = /A+|B+/g;
console.log(target.match(regexp));


