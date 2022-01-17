// const util = require('util');

// function Parent() {
// }

// Parent.prototype.sayHello = function () {
//   console.log('Hello World, from Parent Class!');
// }

// let obj = new Parent();
// obj.sayHello();



// function Child() {

// }


// util.inherits(Child, Parent);

// let obj2 = new Child();
// obj2.sayHello();


// const rawMixin = function () {
//   const attrs = {};
//   return Object.assign(this, {
//     set (name, value) {
//       attrs[name] = value;
//       this.emit('change', {
//         prop: name,
//         value: value
//       });
//     },
//     get (name) {
//       return attrs[name];
//     }
//   }, Events.prototype);
// };

const { path } = require('express/lib/application');
const event = require('node:events');

let customEvent = new event.EventEmitter();
// customEvent.on('tick', () => console.log('occure custom event!!'));
// customEvent.emit('tick');
// process.on('exit', code => console.log('exit code : ', code));

// process.on('uncaughtException', code => console.log('uncaughtException'));

// sayhello();

const p = require('node:path');
const fs = require('node:fs');
const url = require('node:url');
const qrystring = require('querystring');


// const normal_path = p.normalize('/user/temp/..////local/bin');
// console.log(normal_path);

// var is = process.stdin;
// var os = fs.createWriteStream('output.txt');

// os.on('pipe', (src) => console.log('pipe event!!'));

// is.on('data', data => {
//   if( data.trim() =='exit') {
//     is.unpipe(os);
//     os.end();
//   }
// });

// is.pipe(os


// const urlStr = 'http://idols.com/hot/g?group=EXID&name=하니&since=2010';
// let parsedUrl = url.parse(urlStr,true,true);
// console.log(parsedUrl.query.group, parsedUrl.query.name);
// const queryObj = {
//   name:'IU',
//   song:'좋은날'
// };

// const qString = qrystring.stringify(queryObj, null, null, { decodeURIComponent: gbkDecodeURIComponent});
// console.log(qString);


// const cluster = require('node:cluster');


//readable stream events : 'readable', 'data', 'end', 'close'
//cluster events : 'fork', 'online', 'listening', 'disconnect', 'exit'
// worker events : 'message', 'disconnect'


