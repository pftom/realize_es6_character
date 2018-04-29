const Promise = require('appoint');


// The first trial
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('haha');
//   }, 1000);
// });

// const a = promise.then(function onSuccess() {});
// const b = promise.catch(function onError() {});

// console.dir(promise, { depth: 10 });
// console.log(promise.queue[0].promise === a);
// console.log(promise.queue[1].promise === b);

// The first trial
const promise1 = new Promise(function resolver(resolve, reject) {
  setTimeout(() => {
    resolve('haha');
  }, 1000);

  reject('error');
});

promise1.then(console.log);
promise1.catch(console.error);