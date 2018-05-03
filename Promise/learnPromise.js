// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });

let promise = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function () {
  console.log('resolved.');
});

console.log('Hi');

// for async flow
getJSON('/post/1.json').then(function (post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log('resolved: ', comments);
}, function funcB(err) {
  console.log('rejected: ', err);
});