const mysql = require('mysql');
const promise = require('bluebird');
const util = require('util');

promise.promisifyAll(mysql);
promise.promisifyAll(require('mysql/lib/Connection').prototype);
promise.promisifyAll(require('mysql/lib/Pool').prototype);


const DB_INFO = {
   host    : '49.50.164.86',
   user    : 'billy',
   password: 'Ghkrdls72!!',
   database: 'testdb',
   multipleStatements: true,
   connectionLimit:5,
   waitForConnections: false
};


module.exports = class {
  constructor(dbinfo){
    dbinfo = dbinfo || DB_INFO;
    this.pool = mysql.createPool(dbinfo);
  }

  connect() {
    return this.pool.getConnectionAsync().then(console.log('connection success!!')).disposer(conn => {
      console.log('this connection is now released!');
      return conn.release();
    });
  }

  end() {
    this.pool.end(err => {
      util.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>> End of Pool !!!');
      if(err)
        util.log('Err pool ended !!');
    });
  }
}