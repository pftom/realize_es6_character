// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });

// let promise = new Promise(function (resolve, reject) {
//   console.log('Promise');
//   resolve();
// });

// promise.then(function () {
//   console.log('resolved.');
// });

// console.log('Hi');

// // for async flow
// getJSON('/post/1.json').then(function (post) {
//   return getJSON(post.commentURL);
// }).then(function funcA(comments) {
//   console.log('resolved: ', comments);
// }, function funcB(err) {
//   console.log('rejected: ', err);
// });

// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// })
// .then(result => result);

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));

// 保证及时响应，如果没有响应那么就抛错
// const p = Promise.race([
//   fetch('/resource-that-may-take-a-while'),
//   new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('request timeout')), 5000)
//   }),
// ]);

// p
// .then(console.log)
// .catch(console.error);

// Promise.resolve('foo');
// new Promise(resolve => resolve('foo'));

// let thenable = {
//   then: function (resolve, reject) {
//     resolve(42);
//   }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function (value) {
//   console.log(value);
// });
// console.log('43');

const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  })
}
