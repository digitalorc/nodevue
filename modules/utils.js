const mdOgs = require('open-graph-scraper');
const mdHashmap = require('hashmap');
const mdCryto = require('crypto-js');
const mdSha256 = require('crypto-js/sha256');

const defaultKey = 'hyosubin';

 module.exports =  {
  ogsInfo(url, fn) {
    return mdOgs({url:url}, (err, ret) => {
      fn(err, ret);
    });
  },

  encrypt(data, key){
    return mdCryto.AES.encrypt(data, key || defaultKey).toString();
  },

  decrypt(data, key){
    return mdCryto.AES.decrypt(data, key).toString(mdCryto.enc.Utf8);
  },

  encryptSha2(data, key) {
    if(!data) return null;
    key = key || defaultKey;

    try {
      return  mdSha256.SHA256(data+key).toString();
    } catch(err) {
      console.error(err);
    }
  },

  makeMap(key, value){
    const map = new mdHashmap();
    map.set(key,value);
    console.log('TTT>>>', map.get(key));
    return map;
  }
 };    