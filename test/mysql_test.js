


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
const Pool = require('../modules/dbpool');

let sql1 = 'update Test set loginDate = now() where uid="user1" ';
let sql2 = 'update Test set loginDate = now() where uid="user2" ';

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


// Promise.using(pool.connect(), conn => {
//     conn.beginTransaction( txerr => {
//         Promise.all([
//             conn.queryAsync(sql1),
//             conn.queryAsync(sql2)

//         ]).then(r => {
//             for(let i=0; i< r.length; i++)
//               util.log(`sql${i+1}=`, r[i].affectedRows);    

//             conn.commit();
//             pool.end();

//         }).catch(err => {
//             util.log('error ===> ', err);
//             conn.rollback();
//             pool.end();
//         });

//         util.log('txerr :', txerr);
//     });
  
// });


function execTransaction(sqls) {  
  Promise.using(pool.connect(), conn => {
    const queries=[];
    sqls.forEach( item => {
      if (item.length >5)
        queries.push(conn.queryAsync(item) )
    });

    conn.beginTransaction( txerr => {
        Promise.all(queries).then(r => {
            for(let i=0; i< r.length; i++)
              util.log(`sql${i+1}=`, r[i].affectedRows);    

            conn.commit();
            pool.end();

        }).catch(err => {
            util.log('error ===> ', err);
            conn.rollback();
            pool.end();
        });

        util.log('txerr :', txerr);
    });
  });
}

execTransaction([sql1, sql2]);