


//************** legacy way to use mysql
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//    host    : '49.50.164.86',
//    // host    : '11.11.11.104',
//     user    : 'billy',
//     password: 'Ghkrdls72!!',
//  //   password: '',
//     database: 'testdb'
// });
// connection.connect();

// connection.query('select * from Student', (error, results, fields) => {
//     if(error) throw error;

//     console.log('The First user is ', results);
// });

// connection.end();

//*************************************************** */


//***********************using connection pool           */

const util = require('util');
const Promise = require('bluebird');
const Pool = require('./modules/dbpool');

let sql1 = 'update Test set loginDate = now() where ttt="user1" ';
let sql2 = 'update Test set loginDate1 = now() where ttt="user2" ';

const pool = new Pool();

// Promise.using(pool.connect(),conn => {
//     conn.queryAsync(sql1, (err, ret) => {
//         util.log('sql1=', ret.affectedRows);
//     });


// });

// Promise.using(pool.connect(), conn => {
//     conn.queryAsync(sql1)
//     .then(ret => util.log('sql1 affected rows : ', ret.affectedRows))
//     .catch(err => console.log('erro !!!!!!!! ==> ',err));


//     pool.end();
// });


Promise.using(pool.connect(), conn => {
    Promise.all([
        conn.queryAsync(sql1),
        conn.queryAsync(sql2)
    ])
    .then(r => {
        util.log('sql1 =', r[0].affectedRows);    
        util.log('sql2 =', r[1].affectedRows);    
        pool.end();
    })
    .catch(err => {
        util.log('error ===> ', err);
        pool.end();
    });
});