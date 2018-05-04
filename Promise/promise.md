Promise 是异步编程的一种解决方案，比传统的解决方案 — 回调函数和事件 — 更合理和更强大

`Promise`对象有以下两个特点：

- ​




立即执行的异步操作将会在当前脚本的所有同步任务执行完之后才会执行。



调用 `resolve` 或 `reject` 并不会终结 Promise 的参数函数的执行：

```javascript
new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
}).then(r => {
    console.log(r);
});
```

调用 `resolve(1)` 之后，后面的 `console.log(2)` 还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮事件循环的同步任务。



### 关于 Promise 内部抛出错误

下面的三种方法等效：

第一种：

```javascript
const promise = new Promise(function (resolve, reject) {
    throw new Error('test');
});

promise.catchh(function (err) {
    console.log(err);
});
```

第二种：

```javascript
const promise = new Promise(function (resolve, reject) {
    try {
        throw new Error('test');
    } catch (e) {
        reject(e);
    }
});

promise.catch(function (err) {
    console.log(err);
});
```

第三种：

```javascript
const promise = new Promise(function (resolve, reject) {
    reject(new Error('test'));
});

promise.catch(function (err) {
    console.log(err);
});
```

`reject` 方法的左右，等同于抛出错误。



### 关于 Promise 内部抛出错误的处理

Promise 对象的错误具有 “冒泡” 性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 `catch` 语句捕获。

```javascript
getJSON('/post/1.json').then(function (post) {
    return getJSON(post.commentURL);
}).then(function (comments) {
    
}).catch(function (err) {
    
});
```

上面代码中，一共有三个 Promise 对象：一个由`getJSON`产生，两个由`then`产生。它们之中任何一个抛出的错误，都会被最后一个`catch`捕获。

### Promise.prototype.finally

`finally` 是和状态无关的，不管目前的状态是 `fulfilled` 还是 `rejected` 最后都会执行 `finally` 方法。

```javascript
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
    	value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback().then(() => { throw reason }))
    );
};
```

`finally` 方法总会返回原来的值。

```javascript
Promise.resolve(2).then(() => {}, () => {}) // resolve 的值是 undefined

Promise.resolve(2).finally(() => {}) // resolve 的值时 2

Promise.reject(3).then(() => {}, () => {}) // resolve 的值 是 undefined

Promise.reject(3).finally(() => {}) // reject 的值是 3
```



### 



### 关于几大函数的执行顺序

`setTimeout` , `setImmediate` , `setInterval` , `Promise` , `nextTick` , 同步代码

- 同步代码在本轮事件循环中执行
- Promise 在本轮事件循环结束时执行
- setTimeout 在下一轮 ”事件循环“ 开始时执行