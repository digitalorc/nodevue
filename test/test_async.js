const async = require('async');


const task1 = callback => {
  console.log('Task1 start...');
  setTimeout(() => {
    console.log('Task1 end up!');
    callback(null, 'success Task1');
  }, 300);
};

const task2 = callback => {
  console.log('task2 start...');
  setTimeout(() => {
    console.log('task2 end up!');
    callback('task2 error', 'success task2');
  }, 300);
};

const task3 = callback => {
  console.log('task3 start...');
  setTimeout(() => {
    console.log('task3 end up!');
    callback(null, 'success task3');
  }, 300);
};




// async.series([task1, task2, task3], (err, result) => {
//   if(err) console.log(err);

//   console.log('all async tasks are clolsed',result);
// });


async.parallel([task1, task2, task3], (err, result) => {
  if(err) console.log(err);

  console.log('all async tasks are clolsed',result);
});