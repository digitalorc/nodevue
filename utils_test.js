// const util = require('util');
// const utils = require('./utils');

// let map = utils.makeMap('name', 'hong');
// util.log(map.get('name'));

// return;

// let str = "NodeJS";

// let enc = utils.encrypt(str, 'xxxx');
// util.log('enc=', enc);

// let dec = utils.decrypt(enc,'xxxx');
// util.log('dec=', dec);
// return;

// let url = 'http://naver.com';

// utils.ogsInfo(url, (err, ret) => {
//   util.log(err, ret);
// });

const fs = require('fs');
const Promise = require('bluebird');
Promise.promisifyAll(fs);

fs.readAsyncFile("file.json").then(JSON.parse).then(function (val) {
  console.log(val.success);
})
.catch(SyntaxError, function (e) {
  console.error("invalid json in file");
})
.catch(function (e) {
  console.error("unable to read file");
});